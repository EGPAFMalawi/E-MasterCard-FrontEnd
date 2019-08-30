<template>
    <div class="row">
        <div class="col-2">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text reg-details">ART Reg no</span>
                </div>
                <input type="text" class="form-control" v-model="patient.fullArtNumber" disabled>
            </div>
        </div>
        <div class="col-1">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text reg-details">Year</span>
                </div>
                <input type="number" class="form-control tb-form" v-model="concepts.concept31">
            </div>
        </div>
        <div class="col-3">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text reg-details">Registration Type</span>
                </div>
                <select class="form-control tb-form" v-model="concepts.concept55">
                    <option :value="null" disabled>Select Status</option>
                    <option value="First Time Initiation">First Time Initiation</option>
                    <option value="Reinitiation">Reinitiation</option>
                    <option value="Transfer In">Transfer In</option>
                </select>
            </div>
        </div>
        <div class="col-3">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text reg-details">Registration Date</span>
                </div>
                <input type="date" class="form-control tb-form" v-model="concepts.concept56">
            </div>
        </div>
        <div class="col-3">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text reg-details">ART Initiation Date</span>
                </div>
                <input type="date" class="form-control tb-form" v-model="concepts.concept57">
            </div>
        </div>
    </div>
</template>

<script>
    import {authResource} from './../../../authResource'

    export default {
        name: 'RegistrationDataV7Paeds',
        props : ['encounterTypes', 'postPayload', 'patient', 'patientCard'],
        methods: {
            getPatientCardDetails : function ()
            {
                let url = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[0].encounterTypeID,
                    'consider-version' : false
                };

                authResource().post(url, payload)
                    .then((response)=>{
                        this.patientCardData.push(...response.data.data)
                    })
                    .catch((error)=> console.warn(error))
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
                        console.log(response);
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
                patientCardData : [

                ],
                masterCardWithDetails : {},
                concepts : {
                    concept28 : '',
                    concept29 : '',
                    concept30 : '',
                    concept31 : '',
                    concept55 : '',
                    concept56 : '',
                    concept57 : '',
                    concept58 : '',
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
