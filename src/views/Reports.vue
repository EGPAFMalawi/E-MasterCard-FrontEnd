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
                    <div class="card" v-on:click="loadPatientsDue6MonthsData">
                        <div class="card-body">
                            <h5 class="card-title">Patients Due Viral</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{dueSixMonths.counts}}</h1></div>
                    </div>
                    <div class="card" v-on:click="loadMissedAppointmentData">
                        <div class="card-body">
                            <h5 class="card-title">Patients with Missed Appointments </h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{appointmentMissers.counts}}</h1></div>
                    </div>
                     <div class="card" v-on:click="loadDefaultersData">
                        <div class="card-body">
                            <h5 class="card-title">Defaulters(CDC) </h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{defaulters.counts}}</h1></div>
                    </div>
                     <div class="card" v-on:click="loadTXCurrentData">
                        <div class="card-body">
                            <h5 class="card-title">TX Current(CDC) </h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{cdctxcurrent.counts}}</h1></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="search-results">
        <div class="container">
            <div class="row d-flex justify-content-center py-5">
                    <!-- <div v-if="patients[0] !== undefined" class="alert alert-info" role="alert">
                            {{patients.length}}  Patients Matching <span class="alert-link">{{this.searchParam}}</span> Search
                    </div>
                    <div v-if="patients[0] === undefined && searchParam != ''" class="alert text-align-center alert-warning" role="alert">
                        <h4 class="alert-heading">No Patient found  matching <strong>{{this.searchParam}}</strong> Search</h4>
                        <p class="mb-3">
                            Click on the button below to add a new Patient
                        </p>
                        <div>
                            <button type="button" class="btn btn-success btn-lg" v-b-modal.modal-1>Add New Patient</button>
                            
                        </div>
                        
                    </div> -->
                    
                    <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">ART No.</th>
                                <th scope="col">Given Name</th>
                                <th scope="col">Middle Name</th>
                                <th scope="col">Family Name</th>
                                <th scope="col">Sex</th>
                                <th scope="col">Date of Birth</th>
                                <th scope="col">Guardian</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Date Created</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(patient, index) in patients" v-bind:key="index">
                                <th scope="row">{{ patient.artNumber}}</th>
                                <td>{{ patient.person.personName.given}}</td>
                                <td>{{ patient.person.personName.middle}}</td>
                                <td>{{ patient.person.personName.family}}</td>
                                <td>{{ patient.person.gender}}</td>
                                <td>{{ patient.person.birthdate}}</td>
                                <td>{{ patient.guardianName}}</td>
                                <td>{{ patient.patientPhone}}</td>
                                <td>{{ patient.dateCreated}}</td>
                                <td><button type="button" class="btn btn-success btn-sm" v-on:click="setPatient(patient)">View MasterCards</button></td>
                              </tr>
                            </tbody>
                          </table>
            </div> 
        </div>
        
    </section>

    </div>
</template>

<script>

import NavBar from "./NavBar";
import authResource from './../authResource'

export default {
    name: 'Reports',
    components: {NavBar},
    methods: {
        // search ()
        // {
        //     this.isLoading = true;
        //     this.patients = [];

        //     let payload = {
        //         search : this.searchParam,
        //     };
        //     console.log(this.searchParam)
        //     let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}`;

        //     authResource().post(dhisAPIEndpoint, payload)
        //         .then((response)=>{
        //             this.isLoading = false;
        //             this.patients.push(...response.data.data);

        //         })
        //         .catch((error)=>{
        //             this.isLoading = false;
        //             console.log(error)
        //         })

        // },
        // setPatient : function (patient)
        // {
            
        //     sessionStorage.setItem('patient',JSON.stringify(patient));
        //     this.$router.push('/patients/show')
        // },
        loadPatientDueViralCount : function ()
            {
                this.isLoading = true;

                let payload = {
                    code: 1,
                    type:'due6Months'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.dueSixMonths = JSON.parse(JSON.stringify({counts}))
                        console.log(this.dueSixMonths)
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            loadPatientsDue6MonthsData(){
                let payload = {
                    code: 1,
                    type:'due6Months'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                        console.log(this.dueSixMonths)
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

        loadDefaultersCount ()
            {
                this.isLoading = true;

                let payload = {
                    code: 6,
                    type:'CDCDefaulters'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.defaulters = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            loadTXCurrentCount ()
            {
                this.isLoading = true;

                let payload = {
                    code: 7,
                    type:'CDCTXCurrent'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.cdctxcurrent = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            loadMissedAppointmentsCount ()
            {
                this.isLoading = true;

                let payload = {
                    code: 3,
                    type:null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.appointmentMissers = JSON.parse(JSON.stringify({counts}))
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },


            loadMissedAppointmentData(){
                let payload = {
                    code: 3,
                    type:null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                        console.log(this.dueSixMonths)
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

            loadDefaultersData(){
                let payload = {
                    code: 3,
                    type:null

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                        console.log(this.dueSixMonths)
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

            loadTXCurrentData(){
                let payload = {
                    code: 7,
                    type:'CDCTXCurrent'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/patients`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data: {patients}}})=>{
                        this.isLoading = false;
                        this.patients = JSON.parse(JSON.stringify(patients))
                        
                        console.log(this.dueSixMonths)
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })
            },

    },
     beforeMount(){
        this.loadPatientDueViralCount()
        this.loadDefaultersCount()
        this.loadMissedAppointmentsCount()
        this.loadTXCurrentCount()
    },
    data: () => {
        return {
            BASE_URL : 'reports',
            reports : [],

            dueSixMonths: {},
            defaulters: {},
            appointmentMissers: {},
            cdctxcurrent: {},
            patients: []
        }
    }

}
</script>
