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
                    <div class="card" v-on:click="loadPatientsDue6MonthsData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Patients Due Viral Load (6 Months)</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{dueSixMonths.counts}}</h1></div>
                    </div>
                    <div class="card" v-on:click="loadPatientsDueTwelveMonthsData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Patients Due Viral Load (12 Months)</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{dueTwelveMonths.counts}}</h1></div>
                    </div>
                    <div class="card" v-on:click="loadPatientsDueAfterYearData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Patients Due Viral Load (After 1 Year)</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{dueAfterYear.counts}}</h1></div>
                    </div>
                    <div class="card" v-on:click="loadTomorrowAppointmentData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Patients with Appointments Tomorrow</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{appointmentsTomorrow.counts}}</h1></div>
                    </div>
                    <div class="card" v-on:click="loadLastViralLoadGT1000Data" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Patients with Last Viral Load Greater than 1000</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{lastViralLoadGT1000.counts}}</h1></div>
                    </div> 
                </div>
                <div class="card-deck my-3">
                    <div class="card" v-on:click="loadMissedAppointmentData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Patients with Missed Appointments </h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{appointmentMissers.counts}}</h1></div>
                    </div>
                    <div class="card" v-on:click="loadPatientsOnDTGData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Patients on DTG</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{patientsOnDTG.counts}}</h1></div>
                    </div> 
                    <div class="card" v-on:click="loadCDCDefaultersData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Defaulters (CDC) </h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{defaultersCDC.counts}}</h1></div>
                    </div>
                    <div class="card" v-on:click="loadMOHDefaultersData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">Defaulters (MOH)</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{defaultersMOH.counts}}</h1></div>
                    </div>
                    <div class="card" v-on:click="loadCDCTXCurrentData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">TX Current (CDC)</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{cdctxcurrent.counts}}</h1></div>
                    </div>
                </div>
                <div class="card-deck">
                    <div class="card" v-on:click="loadMOHTXCurrentData" v-b-modal.modal-1>
                        <div class="card-body">
                            <h5 class="card-title">TX Current (MOH)</h5>
                            
                        </div>
                        <div class="card-footer"><h1 class="display-4">{{mohctxcurrent.counts}}</h1></div>
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
                        Download the excel sheet  <span v-on:click="downloadCDCDefaultersCount" class="alert-link">HERE</span>
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

        loadCDCDefaultersCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 6,
                    type:'CDCDefaulters'

                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}/counts?code=${count.code}&type=${count.type}`;

                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data: {counts}}})=>{
                        this.isLoading = false;
                        this.defaultersCDC = JSON.parse(JSON.stringify({counts}))
                        
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

            loadCDCTXCurrentCount ()
            {
                this.isLoading = true;

                const count = {
                    code: 7,
                    type:'CDCTXCurrent'

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

            loadCDCDefaultersData(){
                this.payload = {
                    code: 6,
                    type:'CDCDefaulters'
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

            loadCDCTXCurrentData(){
                this.dataPayload = {
                    code: 7,
                    type:'CDCTXCurrent'

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

            downloadCDCDefaultersCount ()
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
                        a.download = "filename.xlsx"
                        document.body.appendChild(a)
                        a.click()    
                        a.remove()
                    })

            },

    },
     beforeMount(){
        this.loadPatientDueViralCount()
        this.loadPatientDueViralCountTwelve()
        this.loadPatientDueViralCountYear()
        this.loadTomorrowAppointmentsCount()
        this.loadLastViralLoadGT1000Count()
        this.loadPatientsOnDTGCount()
        this.loadCDCDefaultersCount()
        this.loadMOHDefaultersCount()
        this.loadMissedAppointmentsCount()
        this.loadCDCTXCurrentCount()
        this.loadMOHTXCurrentCount()
    },
    data: () => {
        return {
            BASE_URL : 'reports',
            reports : [],

            dueSixMonths: {},
            dueAfterYear: {},
            dueTwelveMonths: {},
            appointmentsTomorrow: {},
            defaultersCDC: {},
            defaultersMOH: {},
            patientsOnDTG: {},
            appointmentMissers: {},
            lastViralLoadGT1000: {},
            cdctxcurrent: {},
            mohctxcurrent: {},
            patients: [],
            payload:{}
        }
    }

}
</script>
