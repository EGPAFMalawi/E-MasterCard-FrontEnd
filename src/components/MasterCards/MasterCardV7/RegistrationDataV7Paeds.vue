<template>
    <div class="row">
        <div class="col-6">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">ART Reg no</span>
                </div>
                <input type="text" class="form-control" v-model="patient.artNumber" disabled>
            </div>
        </div>
        <div class="col-4">
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
    import authResource from './../../../authResource'

    export default {
        name: 'RegistrationDataV7Paeds',
        props : ['encounterTypes', 'postPayload'],
        methods: {
            getPatientCardDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[0].encounterTypeID,
                    'consider-version' : true
                };

                authResource().post(dhisAPIEndpoint, payload)
                    .then((response)=>{
                        console.log(response);
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
                }
            }
        },
        created() {
            let patient = JSON.parse(sessionStorage.getItem('patient'));
            let patientCard = JSON.parse(sessionStorage.getItem('patientCard'));

            if (!patient || !patientCard){
                this.$router.push('/')
            }

            this.patient = patient;
            this.patientCard = patientCard;
            console.log(this.patient)
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
