<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>

        </div>
            <section class="patient-profile my-5">
        <div class="container">
            <div class="row">
                    <div class="card" style="width: 100%">
                        <div class="card-body">
                            <h5 class="card-title">
                                Name : {{patient.person.personName.given + ' ' + 
                                (patient.person.personName.middle !== null ? patient.person.personName.middle : '') + 
                                ' ' + 
                                patient.person.personName.family }}
                                <!-- <span v-if="patient.lastStep.step === 'Died'" class="badge badge-danger">deceased</span> -->
                            </h5>
                            <h5 class="card-title">ARTNo : {{patient.fullArtNumber }}</h5>
                        </div>
                    </div>
            </div>
            
        </div>

    </section>
    <section>
        <div class="container">
                <h5 class="text-align-center">Patient Cards</h5>
                <form class="form-row " v-on:submit.prevent="addNewPatientCard">
                    
                    <div class="col-md-6">
                            <div class="form-group">
                                <label>Select MasterCard Version</label>
                                <select class="form-control" v-model="selectedMasterCardVersion" required>
                                    <option :value="null" disabled>Pick from the Available Versions</option>
                                    <option v-for="(masterCard,index) in masterCardsToShow" v-bind:key="index" :value="masterCard.masterCardID">{{masterCard.name}}</option>
                                </select>
                            </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary btn-lg my-4">Add New Mastercard</button>
                    </div>
                </form>
        </div>
        
    </section>

        <section class="search-results">
        <div class="container">
            <div class="row d-flex justify-content-center py-5">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Mastercard</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(patientCard, index) in patientCards" v-bind:key="index">
                        <th scope="row">{{ index+1}}</th>
                        <td>{{ patientCard.masterCard.name}}</td>
                        <td> {{ patientCard.dateCreated | moment("dddd, MMMM Do, YYYY, h:mm A")}}</td>
                        <td><button type="button" class="btn btn-success btn-sm" v-on:click="setPatientCard(patientCard)">View MasterCards</button></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
        
    </section>

    </div>
</template>

<script>

    import NavBar from "../../views/NavBar"
    import {authResource} from './../../authResource'
    import { version } from 'punycode'
    import { notificationSystem } from '../../globals'
    import { async } from 'q';
    import { mapGetters, mapActions } from 'vuex' 

    export default {
        name: 'ShowPatient',
        components: {NavBar},
        methods: {
            ...mapActions(['createPatientCard', 'mutatePatientCard']),
            getMasterCards(){
                let dhisAPIEndpoint = `${this.APIHosts.art}/master-cards`;

                authResource().get(dhisAPIEndpoint)
                    .then(async (response)=>{
                        this.availableMasterCards = await response.data.data
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            addNewPatientCard (){
                let url = `${this.APIHosts.art}/patient-cards`;

                let payload = {
                    'master-card' : this.selectedMasterCardVersion,
                    patient : this.patient.patientID
                };
                this.createPatientCard({url, payload})
                    .then(message => {
                        this.$toast.success(message, 'OK', notificationSystem.options.success)
                        this.$router.push('/patients/show/card')
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                        
                    })
            },
            setPatientCard (patientCard){
                this.mutatePatientCard(patientCard)

                this.$router.push('/patients/show/card')
            },
        },
        data: () => {
            return {
                notificationSystem,
                BASE_URL : 'patients',
                art_number:'',
                step:'',
                stepDate:'',
                site:'',
                original_destination: '',
                availableMasterCards : [],
                patientCards : [],
                masterCardsToShow : [],
                selectedMasterCardVersion : null,
            }
        },
        created() {
            this.getMasterCards()
            
            if (!this.patient){
                this.$router.push('/')
            }
        },

        watch : {
            availableMasterCards : function (value) {
               
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/${this.patient.patientID}/cards`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data}})=>{
                        
                        this.patientCards.push(...data)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            patientCards : function (value) {
                const allVersions = JSON.parse(JSON.stringify(this.availableMasterCards))
                const patientVersions = JSON.parse(JSON.stringify(value)).map(({masterCard: {name}}) => name)

                this.masterCardsToShow = allVersions.filter(({name}) => {
                    if (!patientVersions.includes(name))
                        return name
                })
            }
        },
        computed: {
            ...mapGetters(['patient', 'patientCard'])
        }
    }
</script>