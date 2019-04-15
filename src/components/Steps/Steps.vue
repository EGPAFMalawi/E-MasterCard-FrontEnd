<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div class="container py-5">
            <div v-if="steps.length > 0" class="row d-flex justify-content-center">
                <div class="alert alert-success" role="alert">
                    Click  <router-link to="/patients/show"><span class="alert-link">HERE</span> </router-link> to manage Mastercards .
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <h5 class="navbar-brand">{{ `${patient.person.personName.given} ${patient.person.personName.family}'s` }} Steps</h5>
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center">
            <StepsTable :postPayload="postPayload"></StepsTable>
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
    import NavBar from "../../views/NavBar"

    export default {
        name: 'Steps',
        components: {StepsTable, NavBar},
        methods: {
            getStages(){
                const url = `${this.APIHosts.art}/patients/${this.patient.patientID}/steps`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.steps = data
                    })
                    .catch(err => console.error(err))
            },
        },
        data: () => {
            return {
                BASE_URL : 'patients',
                patient : {person: {personName: { }}},
                steps: [],
                postPayload : false
            }
        },
        computed: {
            personName: ()=>{
                return `${this.patient.person.personName.given} ${this.patient.person.personName.family}`
            }
        },
        created() {

            this.patient = JSON.parse(sessionStorage.getItem('patient'))
            this.getStages()
        }
    }
</script>
