<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div class="container py-5">
            <div class="row d-flex justify-content-center">
                <div v-if="patient.lastStep !== null && patient.lastStep.step === 'Died'" class="badge badge-danger">deceased</div>
            </div>
            
            <div class="row d-flex justify-content-center">
                
                <h5 class="navbar-brand">{{ `${patient.person.personName.given} ${patient.person.personName.family}'s` }} Steps</h5>
                
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center">
            <StepsTable @died="patientDied" :postPayload="postPayload" :dob="patient.person.birthdate"></StepsTable>
        </div>
    </div>
</template>

<script>
    import {authResource} from './../../authResource'
    import StepsTable from "./StepsTable";
    import NavBar from "../../views/NavBar"
    import { notificationSystem } from '../../globals'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Steps',
        components: {StepsTable, NavBar},
        methods: {
            getSteps(){
                const url = `${this.APIHosts.art}/patients/${this.patient.patientID}/steps`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.steps = data
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                        
                    })
            },
            patientDied(died){
                console.log('emited')
                this.patient = this.getPatient()
            },
            getPatient(){
                return JSON.parse(sessionStorage.getItem('patient'))
            }
        },
        data: () => {
            return {
                notificationSystem,
                BASE_URL : 'patients',
                steps: [],
                postPayload : false
            }
        },
        computed: {
            ...mapGetters(['patient']),
            personName: ()=>{
                return `${this.patient.person.personName.given} ${this.patient.person.personName.family}`
            }
        },
        created() {
            this.getSteps()
        }
    }
</script>
