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
                            <h5 class="card-title">{{patient.person.personName.given + ' ' + patient.person.personName.middle + ' ' + patient.person.personName.family }}</h5>
                            <div class="row">
                                <div class="col-md-4">
                                    <p>Sex</p>
                                </div>
                                <div class="col-md-8">
                                    <p>{{ patient.person.gender}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <p>Tribe</p>
                                </div>
                                <div class="col-md-8">
                                    <p>{{ patient.tribe}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <p>Date of Birth</p>
                                </div>
                                <div class="col-md-8">
                                    <p>{{ patient.person.birthdate }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <p>Guardian Name</p>
                                </div>
                                <div class="col-md-8">
                                    <p>{{ patient.guardianName + ', ' +  patient.guardianRelation}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <p>Phone</p>
                                </div>
                                <div class="col-md-8">
                                    <p>Patient: {{ patient.patientPhone}}, Guardian: {{ patient.guardianPhone}}</p>
                                </div>
                            </div>
                            <div class="row">
                                    <div class="col-md-4">
                                        <p>Agree to FUP</p>
                                    </div>
                                    <div class="col-md-8">
                                        <p>{{ patient.followUp}}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                        <div class="col-md-4">
                                            <p>Address 1</p>
                                        </div>
                                        <div class="col-md-8">
                                            <p>{{ patient.person.personAddress.address1}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <p>Address 2</p>
                                        </div>
                                        <div class="col-md-8">
                                            <p>{{ patient.person.personAddress.address2}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <p>City Village</p>
                                        </div>
                                        <div class="col-md-8">
                                            <p>{{ patient.person.personAddress.cityVillage}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                            <div class="col-md-4">
                                                <p>State Province</p>
                                            </div>
                                            <div class="col-md-8">
                                                <p>{{ patient.person.personAddress.stateProvince}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                                <div class="col-md-4">
                                                    <p>Country</p>
                                                </div>
                                                <div class="col-md-8">
                                                    <p>{{ patient.person.personAddress.country}}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <p>District</p>
                                                </div>
                                                <div class="col-md-8">
                                                    <p>{{ patient.person.personAddress.countryDistrict}}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                        <div class="col-md-4">
                                            <p>Neighbor hood Cell</p>
                                        </div>
                                        <div class="col-md-8">
                                            <p>{{ patient.person.personAddress.neighborhoodCell}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                            <div class="col-md-4">
                                                <p>Township Division</p>
                                            </div>
                                            <div class="col-md-8">
                                                <p>{{ patient.person.personAddress.townshipDivision}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                                <div class="col-md-4">
                                                    <p>Region</p>
                                                </div>
                                                <div class="col-md-8">
                                                    <p>{{ patient.person.personAddress.region}}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <p>SubRegion</p>
                                                </div>
                                                <div class="col-md-8">
                                                    <p>{{ patient.person.personAddress.subRegion}}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <p>Latitude</p>
                                                </div>
                                                <div class="col-md-8">
                                                    <p>{{ patient.person.personAddress.latitude}}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <p>Longitude</p>
                                                </div>
                                                <div class="col-md-8">
                                                    <p>{{ patient.person.personAddress.longitude}}</p>
                                                </div>
                                            </div> 
                                            <button type="button" class="btn btn-primary btn-sm d-flex justify-content-end">View MasterCards</button>
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
                                    <option v-for="(masterCard,index) in availableMasterCards" v-bind:key="index" :value="masterCard.masterCardID">{{masterCard.name}}</option>
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
    </div>
</template>

<script>

    import NavBar from "../../views/NavBar";
    import axios from "axios";

    export default {
        name: 'ShowPatient',
        components: {NavBar},
        methods: {
            getMasterCards : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/master-cards`;

                axios.get(dhisAPIEndpoint)
                    .then((response)=>{
                        console.log(response)
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

                axios.post(dhisAPIEndpoint, payload)
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
                availableMasterCards : [

                ],
                patientCards : [

                ],
                selectedMasterCardVersion : null
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

                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/${value.patientID}/cards`;

                axios.get(dhisAPIEndpoint)
                    .then((response)=>{
                        console.log(response)
                        this.patientCards.push(...response.data.data)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }
        }
    }
</script>