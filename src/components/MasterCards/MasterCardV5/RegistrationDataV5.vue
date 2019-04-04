<template>
    <div class="row">
        <div class="col-4">
            <strong>Transfer-In Date</strong>
            <input v-model="concepts.concept28" name="concept28" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="date">
        </div>
        <div class="col-3">
            <strong>ART Reg no</strong>
            <input v-model="concepts.concept29"  name="concept29" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text">
            <span>{{ errors.first('concept29')}}</span>
        </div>
        <div class="col-3">
            <strong>Child HCC no</strong>
            <input v-model="concepts.concept30" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text">
        </div>
        <div class="col-2">
            <strong>Year</strong>
            <input v-model="concepts.concept31" name="Year" v-validate="'numeric'" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text">
            <span>{{ errors.first('Year')}}</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'RegistrationDataV5',
        props : ['encounterTypes', 'postPayload'],
        methods: {
            getPatientCardDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[0].encounterTypeID,
                    'consider-version' : true
                };

                axios.post(dhisAPIEndpoint, payload)
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

                axios.post(dhisAPIEndpoint, finalPayload)
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
