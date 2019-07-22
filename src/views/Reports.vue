<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>

        </div>
        <section>
            <div class="container my-5">
                <div class="row">
                    <div class="card-deck">
                        <div class="card" v-on:click="loadData(payloads.dueSixMonths)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Patients Due Viral Load (6 Months)</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{dueSixMonths.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.dueTwelveMonths)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Patients Due Viral Load (12 Months)</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{dueTwelveMonths.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.dueAfterYear)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Patients Due Viral Load (After 1 Year)</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{dueAfterYear.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.appointmentsTomorrow)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Patients with Appointments Tomorrow</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{appointmentsTomorrow.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.lastViralLoadGT1000)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Patients with Last Viral Load Greater than 1000</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{lastViralLoadGT1000.counts}}</h1></div>
                        </div> 
                    </div>
                    <div class="card-deck my-3">
                        <div class="card" v-on:click="loadData(payloads.appointmentMissers)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Patients with Missed Appointments </h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{appointmentMissers.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.patientsOnDTG)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Patients on DTG</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{patientsOnDTG.counts}}</h1></div>
                        </div> 
                        <div class="card" v-on:click="loadData(payloads.defaultersPEPFAR)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Defaulters (PEPFAR) </h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{defaultersPEPFAR.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.defaultersMOH)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Defaulters (MOH) </h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{defaultersMOH.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.cdctxcurrent)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">TX Current (PEPFAR)</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{cdctxcurrent.counts}}</h1></div>
                        </div>
                    </div> 
                    
                     <div class="card-deck">
                        <div class="card" v-on:click="loadData(payloads.mohctxcurrent)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">TX Current (MOH)</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{mohctxcurrent.counts}}</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container my-5">
                <h3>Steps Reports</h3>
                <div class="row">
                    <div class="card-deck">
                        <div class="card" v-on:click="loadData(payloads.ARTStop)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">ART Stop</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{ARTStop.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.restart)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Restart</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{restart.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.transIn)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Transifer In</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{transIn.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.transOut)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Transifer Out</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{transOut.counts}}</h1></div>
                        </div>
                        <div class="card" v-on:click="loadData(payloads.died)" v-b-modal.modal-1>
                            <div class="card-body">
                                <h5 class="card-title">Died</h5>
                                
                            </div>
                            <div class="card-footer"><h1 class="display-4">{{died.counts}}</h1></div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>

        <b-modal id="modal-1" title="Patients Reports" hide-footer	 size="xl">
            <div class="container">
                <div class="row d-flex justify-content-center py-5">
                    <div class="alert alert-warning" role="alert" v-if="patients[0] === undefined">
                        No Records Available here
                    </div>
                    <div class="alert alert-primary" role="alert" v-if="patients[0] !== undefined">
                        Download the excel sheet  <span v-on:click="downloadPEPFARDefaultersCount" class="alert-link">HERE</span>
                    </div>
                    <table class="table" v-if="patients[0] !== undefined">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">ART No.</th>
                            <th scope="col">Given Name</th>
                            <th scope="col">Middle Name</th>
                            <th scope="col">Family Name</th>
                            <th scope="col">Sex</th>
                            <th scope="col">Address</th>
                            <th scope="col">Guardian</th>
                            <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(patient, index) in patients" v-bind:key="index">
                            <th scope="row">{{ patient.artNumber}}</th>
                            <td>{{ patient.person.personName.given}}</td>
                            <td>{{ patient.person.personName.middle}}</td>
                            <td>{{ patient.person.personName.family}}</td>
                            <td>{{ patient.person.gender}}</td>
                            <td>{{ (patient.person.personAddress.cityVillage !== null ? patient.person.personAddress.cityVillage : '' ) + (patient.person.personAddress.townshipDivision !== null ? (' ' + patient.person.personAddress.townshipDivision) : '')}}</td>
                            <td>{{ patient.guardianName}}</td>
                            <td>{{ patient.patientPhone}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </b-modal>

    </div>
</template>

<script>

import NavBar from "./NavBar";
import authResource from './../authResource'
import { countAll, loadAll } from './reports.utils'


export default {
    name: 'Reports',
    components: {NavBar},
    methods: {
        setPatient : function (patient)
        {
            
            sessionStorage.setItem('patient',JSON.stringify(patient));
            this.$router.push('/patients/show')
        },
        loadPatientDueViralCount(){
                this.isLoading = true;

                let count = {
                    code: 1,
                    type:'due6Months'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.dueSixMonths = JSON.parse(JSON.stringify({counts}))  
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

        },

        loadPatientDueViralCountTwelve(){
                this.isLoading = true;

                let count = {
                    code: 1,
                    type:'due12Months'

                };
                
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.dueTwelveMonths = JSON.parse(JSON.stringify({counts}))
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

        },
        loadPatientDueViralCountYear(){
                this.isLoading = true;

                const count = {
                    code: 1,
                    type:'dueAfter12Months'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.dueAfterYear = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

        },
        loadPatientsDueAfterYearData(){
                this.payload = {
                    code: 1,
                    type:'dueAfter12Months'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
        },
        loadPatientsDueTwelveMonthsData(){
                this.payload = {
                    code: 1,
                    type:'due12Months'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
        },

            loadPatientsDue6MonthsData(){
                this.payload = {
                    code: 1,
                    type:'due6Months'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

        loadPEPFARDefaultersCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 6,
                    type:'PEPFARDefaulters'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.defaultersPEPFAR = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            loadMOHDefaultersCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 6,
                    type:'MOHDefaulters'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.defaultersMOH = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                    })

            },

            loadPatientsOnDTGCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 5,
                    type: null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.patientsOnDTG = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            loadPEPFARTXCurrentCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 7,
                    type:'PEPFARTXCurrent'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.cdctxcurrent = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },
            loadMOHTXCurrentCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 7,
                    type:'MOHTXCurrent'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.mohctxcurrent = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            loadTomorrowAppointmentsCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 2,
                    type: null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.appointmentsTomorrow = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                    })

            },

            loadTomorrowAppointmentData(){
                this.payload = {
                    code: 2,
                    type:null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                    })
            },

            loadMissedAppointmentsCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 3,
                    type:null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.appointmentMissers = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            loadLastViralLoadGT1000Count ()
            {
                this.isLoading = true;

                const count = {
                    code: 4,
                    type:null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.lastViralLoadGT1000 = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            loadLastViralLoadGT1000Data(){
                this.payload = {
                    code: 4,
                    type:null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

            loadMissedAppointmentData(){
                this.payload = {
                    code: 3,
                    type:null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

            loadPatientsOnDTGData(){
                this.payload = {
                    code: 5,
                    type:null
                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

            loadPEPFARDefaultersData(){
                this.payload = {
                    code: 6,
                    type:'PEPFARDefaulters'
                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

            loadMOHDefaultersData(){
                this.payload = {
                    code: 6,
                    type:'MOHDefaulters'
                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                    })
            },

            loadPEPFARTXCurrentData(){
                this.dataPayload = {
                    code: 7,
                    type:'PEPFARTXCurrent'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.dataPayload.code}&type=${this.dataPayload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

            loadMOHTXCurrentData(){
                this.payload = {
                    code: 7,
                    type:'MOHTXCurrent'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients?code=${this.payload.code}&type=${this.payload.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

            countARTStop(){
                this.payload = {
                    code: 10,
                    type: 'ARTStop'
                }

                countAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.ARTStop = result
                })
                .catch(error => console.log(error))
            },

            loadARTStop(){
                this.payload = {
                    code: 10,
                    type: 'ARTStop'
                }

                loadAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.patients = result
                })
                .catch(error => console.log(error))
            },

             countRestart(){
                this.payload = {
                    code: 10,
                    type: 'Restart'
                }

                countAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.restart = result
                })
                .catch(error => console.warn(error))
            },

            loadRestart(){
                this.payload = {
                    code: 10,
                    type: 'Restart'
                }

                loadAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.patients = result
                })
                .catch(error => console.log(error))
            },

            countTransIn(){
                this.payload = {
                    code: 10,
                    type: 'Trans-in'
                }

                countAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.transIn = result
                })
                .catch(error => console.warn(error))
            },

            loadTransIn(){
                this.payload = {
                    code: 10,
                    type: 'Trans-in'
                }

                loadAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.patients = result
                })
                .catch(error => console.log(error))
            },

            countTransOut(){
                this.payload = {
                    code: 10,
                    type: 'Trans-out'
                }

                countAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.transOut = result
                })
                .catch(error => console.warn(error))
            },

            loadTransOut(){
                this.payload = {
                    code: 10,
                    type: 'Trans-out'
                }

                loadAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.patients = result
                })
                .catch(error => console.log(error))
            },

            countDied(){
                this.payload = {
                    code: 10,
                    type: 'Died'
                }

                countAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.died = result
                })
                .catch(error => console.warn(error))
            },

            loadDied(){
                this.payload = {
                    code: 10,
                    type: 'Died'
                }

                loadAll(`${this.APIHosts.art}/${this.BASE_URL}`, this.payload)
                .then(result => {
                    this.isLoading = false
                    this.patients = result
                })
                .catch(error => console.log(error))
            },

            loadData(payload){
                loadAll(`${this.APIHosts.art}/${this.BASE_URL}`, payload)
                .then(result => {
                    this.isLoading = false
                    this.patients = result
                })
                .catch(error => console.log(error))
            },

            downloadPEPFARDefaultersCount ()
            {
                this.isLoading = true;
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/export?code=${this.payload.code}&type=${this.payload.type}`;

                const token = JSON.parse(sessionStorage.getItem('auth')).accessToken;

                fetch(dhisAPIEndpoint, {
                        method: 'GET',
                        headers: new Headers({
                            "Authorization": "Bearer " + token
                        })
                    })
                    .then((res) => res.blob())
                    .then(blob => {
                        const url = window.URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = "report.xlsx"
                        document.body.appendChild(a)
                        a.click()    
                        a.remove()
                    })

            },

    },
     created(){
        this.loadPatientDueViralCount()
        this.loadPatientDueViralCountTwelve()
        this.loadPatientDueViralCountYear()
        this.loadTomorrowAppointmentsCount()
        this.loadLastViralLoadGT1000Count()
        this.loadPatientsOnDTGCount()
        this.loadPEPFARDefaultersCount()
        this.loadMOHDefaultersCount()
        this.loadMissedAppointmentsCount()
        this.loadPEPFARTXCurrentCount()
        this.loadMOHTXCurrentCount()

        this.countARTStop()
        this.countRestart()
        this.countTransIn()
        this.countTransOut()
        this.countDied()
    },
    data: () => {
        return {
            BASE_URL : 'reports',
            reports : [],

            dueSixMonths: {},
            dueAfterYear: {},
            dueTwelveMonths: {},
            appointmentsTomorrow: {},
            defaultersPEPFAR: {},
            defaultersMOH: {},
            patientsOnDTG: {},
            appointmentMissers: {},
            lastViralLoadGT1000: {},
            cdctxcurrent: {},
            mohctxcurrent: {},
            patients: [],
            payload:{},
            ARTStop: {},
            restart: {},
            transIn: {},
            transOut: {},
            died: {},

            payloads: {
                dueAfterYear: {
                    code: 1,
                    type:'dueAfter12Months'
                },
                dueTwelveMonths:{
                    code: 1,
                    type:'due12Months'
                },
                dueSixMonths: {
                     code: 1,
                    type:'due6Months'
                },
                appointmentsTomorrow: {
                    code: 2,
                    type:null
                },
                appointmentMissers: {
                    code: 3,
                    type:null
                },
                lastViralLoadGT1000: {
                    code: 4,
                    type:null
                },
                patientsOnDTG: {
                    code: 5,
                    type:null
                },
                defaultersPEPFAR: {
                    code: 6,
                    type:'PEPFARDefaulters'
                },
                defaultersMOH: {
                    code: 6,
                    type:'MOHDefaulters'
                },
                cdctxcurrent: {
                    code: 7,
                    type:'PEPFARTXCurrent'
                },
                mohctxcurrent: {
                    code: 7,
                    type:'PEPFARTXCurrent'
                },
                ARTStop: {
                    code: 10,
                    type: 'ARTStop'
                },
                restart: {
                    code: 10,
                    type: 'Restart'
                },
                transIn: {
                    code: 10,
                    type: 'Trans-in'
                },
                transOut: {
                    code: 10,
                    type: 'Trans-out'
                },
                died: {
                    code: 10,
                    type: 'Died'
                }
            }
        }
    }

}
</script>
