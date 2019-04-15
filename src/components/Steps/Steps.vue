<template>
    <div>
        <div class="container py-5">
            <div class="row d-flex justify-content-center">
                <h5 class="navbar-brand">{{ patient.person.name + "'s"}} Steps</h5>
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center">
            <StepsTable :steps="steps" :postPayload="postPayload"></StepsTable>
        </div>
        <section>
            <div class="container">
                    <form class="form-row " v-on:submit.prevent="initiatePost">
                        <div class="col-md-12 d-flex justify-content-center">
                                <button type="submit" class="btn btn-success btn-lg my-4">Save <font-awesome-icon icon="save" class="ml-1"/></button>
                        </div>
                    </form>
            </div>
            
        </section>
    </div>
</template>

<script>
    import authResource from './../../authResource'
    import StepsTable from "./StepsTable";

    export default {
        name: 'Steps',
        components: {StepsTable},
        methods: {
            getMasterCardDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/master-cards/${this.patientCard.masterCard.masterCardID}`;

                authResource().get(dhisAPIEndpoint)
                    .then((response)=>{
                        console.log(response)
                        this.masterCardWithDetails = response.data.data
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            initiatePost : function ()
            {
                this.postPayload++;
            },
            getStages(){
                const url = `${this.APIHosts.art}/patients/${this.patient.patientID}/steps`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.steps = data;
                        console.log(this.stages[0].patientStepID)
                    })
                    .catch(err => console.error(err))
            },
            // addStep(){
            //     const payload = {
            //         art_number: this.art_number,
            //         date: this.stepDate,
            //         site: this.site,
            //         step: this.step,
            //         original_destination: this.original_destination,
            //         patient: this.patient.patientID,
            //     }
            //     const url = `${this.APIHosts.art}/patient-steps`
            //     console.log(payload)
            //     authResource().post(url, payload)
            //         .then(({data: {data}})=> {
            //             this.stages.push(data)
            //         })
            //         .catch(err => console.error(err))
            // }
        },
        data: () => {
            return {
                BASE_URL : 'patients',
                patient : {
                    person : {
                        personName : {},
                        personAddress : {}
                    }
                },
                personName: '',
                steps: [],
                postPayload : false
            }
        },
        computed: {
            personName(){
                return `${this.patient.personName.given} ${this.patient.personName.family}`
            }
        },
        created() {

            this.patient = JSON.parse(sessionStorage.getItem('patient'))
            console.log(JSON.parse(JSON.stringify(this.patient)))
            this.getStages()
        }
    }
</script>
