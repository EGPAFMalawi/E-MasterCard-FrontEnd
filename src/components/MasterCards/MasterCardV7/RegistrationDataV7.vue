<template>
    <div class="row">
        <div class="col-4 pr-0 pl-0">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">ART Reg no</span>
                </div>
                <input type="text" class="form-control" v-model="patient.artNumber" disabled>
            </div>
        </div>
        <div class="col-4 pr-0">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Child HCC no</span>
                </div>
                <input type="text" class="form-control" v-model="concepts.concept30">
            </div>
        </div>
         <div class="col-4 pr-0">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Year</span>
                </div>
                <input type="number" class="form-control" v-model="concepts.concept31">
            </div>
        </div>
    </div>
</template>

<script>
    import {authResource} from './../../../authResource'
    import { mapGetters, mapActions } from 'vuex' 

    export default {
        name: 'RegistrationDataV7',
        props : ['encounterTypes', 'postPayload', 'patient', 'patientCard'],
        methods: {
            getPatientCardDetails : function ()
            {
                let url = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[0].encounterTypeID,
                    'consider-version' : true
                };

                authResource().post(url, payload)
                    .then((response)=>{
                        this.patientCardData.push(...response.data.data)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            processDataForPost: function ()
            {
                let payload = this.encounterTypes[0].concepts.map((item)=>{
                    return {
                        'concept' : item.conceptID,
                        'encounter-type' : this.encounterTypes[0].encounterTypeID,
                        'value' : this.concepts['concept'+item.conceptID],
                        'observation' : this.getObservation(item.conceptID)
                    }
                });

                this.handlePost(payload);
            },
            getObservation: function (conceptID)
            {
                let obs = this.patientCardData.filter((item)=>{
                    return item.concept.conceptID === conceptID
                });

                if (obs.length > 0)
                    return obs[0].observationID;
                else
                    return null
            },
            handlePost: function (payload)
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/observations`;
                let finalPayload = {
                    'patient-card' : this.patientCard.patientCardID,
                    'observations' : payload
                };

                authResource().post(dhisAPIEndpoint, finalPayload)
                    .then((response)=>{
                        this.patientCardData = [];
                        this.getPatientCardDetails()
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            fillConceptObservations: function (patientCardData)
            {
                for (var i = 0; i < patientCardData.length; i++)
                {
                    this.concepts['concept'+patientCardData[i].concept.conceptID] = patientCardData[i].value
                }
            }
        },
        data: () => {
            return {
                BASE_URL : 'patients',
                patientCardData : [],
                masterCardWithDetails : {},
                concepts : {
                    concept28 : '',
                    concept29 : '',
                    concept30 : '',
                    concept31 : '',
                }
            }
        },
        watch : {
            postPayload : function ()
            {
                this.processDataForPost();
            },
            encounterTypes : function (value) {
                if (value.length > 0)
                {
                    this.getPatientCardDetails();
                }
            },
            patientCardData : function (value) {
                this.fillConceptObservations(value);
            }
        }
    }
</script>
