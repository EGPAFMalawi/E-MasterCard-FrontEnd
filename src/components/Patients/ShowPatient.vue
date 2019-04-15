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
                            <h5 class="card-title">Name : {{patient.person.personName.given + ' ' + (patient.person.personName.middle !== null ? patient.person.personName.middle : '') + ' ' + patient.person.personName.family }}</h5>
                            <h5 class="card-title">ARTNo : {{patient.artNumber }}</h5>
                            <div class="row d-flex justify-content-center">
                                <div class="alert alert-success" role="alert">
                                    Click  <router-link to="/steps"><span class="alert-link">HERE</span> </router-link> to manage Steps .
                                </div>
                            </div>
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
                        <td> {{ patientCard.dateCreated}}</td>
                        <td><button type="button" class="btn btn-success btn-sm" v-on:click="setPatientCard(patientCard)">View MasterCards</button></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
        
    </section>

    <b-modal id="stage-modal" title="Add New Step" hide-footer	 size="lg">
           <form name='addStep' v-on:submit.prevent="addStep">
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label>ART Number</label>
                    <input type="name" class="form-control" v-model="art_number" required>
                
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label >Step Date</label>
                    <input type="date" class="form-control" v-model="stepDate" required>
                
                </div>
            </div>
              <div class="form-row">
                  <div class="col-md-12 mb-3">
                      <label>Site</label>
                      <input type="text" class="form-control" placeholder="Site" v-model="site" required>
                  </div>
              </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                        <label>Step</label>
                        <select  v-model="step" class="form-control" placeholder="Step" >
                            <option :value="null" disabled>All The Available Step</option>
                            <option value="Art Start">Art Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                            <option value="Back to facility">Back to facility</option>
                            <option value="Died">Died</option>
                            <option value="Restart">Restart</option>
                        </select>
                </div>
            </div>
            <div class="form-row">
                    <div class="col-md-12 mb-3">
                            <label>Original Destination</label>
                            <input type="text" class="form-control" placeholder="Original Destination" v-model="original_destination">
                    </div>
                </div>
                <button class="btn btn-success" type="submit">Submit form</button>
            </form>
        
    </b-modal>
    </div>
</template>

<script>

    import NavBar from "../../views/NavBar";
    import authResource from './../../authResource'
    import { version } from 'punycode';

    export default {
        name: 'ShowPatient',
        components: {NavBar},
        methods: {
            getMasterCards : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/master-cards`;

                authResource().get(dhisAPIEndpoint)
                    .then((response)=>{
                        this.availableMasterCards.push(...response.data.data)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            addNewPatientCard : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/patient-cards`;

                let payload = {
                    'master-card' : this.selectedMasterCardVersion,
                    patient : this.patient.patientID
                };

                authResource().post(dhisAPIEndpoint, payload)
                    .then((response)=>{
                        console.log(response)
                        sessionStorage.setItem('patientCard', JSON.stringify(response.data.data))

                        this.$router.push('/patients/show/card')
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            setPatientCard : function (patientCard)
            {
                sessionStorage.setItem('patientCard', JSON.stringify(patientCard))

                this.$router.push('/patients/show/card')
            },
            getStages(){
                const url = `${this.APIHosts.art}/patients/${this.patient.patientID}/steps`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.stages = data;
                        console.log(this.stages[0].patientStepID)
                    })
                    .catch(err => console.error(err))
            },
            addStep(){
                const payload = {
                    art_number: this.art_number,
                    date: this.stepDate,
                    site: this.site,
                    step: this.step,
                    original_destination: this.original_destination,
                    patient: this.patient.patientID,
                }
                const url = `${this.APIHosts.art}/patient-steps`
                console.log(payload)
                authResource().post(url, payload)
                    .then(({data: {data}})=> {
                        this.stages.push(data)
                    })
                    .catch(err => console.error(err))
            }
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

                art_number:'',
                step:'',
                stepDate:'',
                site:'',
                original_destination: '',
                availableMasterCards : [],
                patientCards : [],
                masterCardsToShow : [],
                selectedMasterCardVersion : null,
                stages: []
            }
        },
        created() {
            this.getMasterCards()
            let patient = JSON.parse(sessionStorage.getItem('patient'))

            if (!patient){
                this.$router.push('/')
            }

            this.patient = patient

        },

        watch : {
            patient : function (value) {
                this.getStages()
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/${value.patientID}/cards`;

                authResource().get(dhisAPIEndpoint)
                    .then((response)=>{
                        this.patientCards.push(...response.data.data)
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
        }
    }
</script>