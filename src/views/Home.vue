<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>

        </div>
            <section class="">
        <div class="container">
            <div class="row d-flex justify-content-center py-5">
                <form v-on:submit.prevent="search" class="search-form form-inline my-2 my-lg-0 align-self-center">
                    <input v-model="searchParam" v-on:keyup="search" class="form-control mr-sm-2 py-4" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0 py-2" type="submit">Search</button>
                </form>
                        
            </div>

        </div>
           
    </section>
    <section class="search-results">
        <div class="container">
            <div class="row d-flex justify-content-center py-5">
                    <div v-if="patients[0] !== undefined" class="alert alert-info" role="alert">
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
                        
                    </div>
                    
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
    <b-modal id="modal-1" title="Enter Patient Details" hide-footer	 size="lg">
          <form name='addpatient' v-on:submit.prevent="addPatient">
              <div class="form-row">
                  <div class="col-md-4 mb-3">
                      <label for="validationServer01">Given Name</label>
                      <input type="text" class="form-control" placeholder="First name" v-model="given_name" required>
                       
                  </div>
                  <div class="col-md-4 mb-3">
                      <label for="validationServer02">Middle Name</label>
                      <input type="text" class="form-control" placeholder="Middle name" v-model="middle_name">

                  </div>
                  <div class="col-md-4 mb-3">
                      <label for="validationServer02">Family Name</label>
                      <input type="text" class="form-control" placeholder="Last name" v-model="family_name" required>
                  </div>
              </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Sex</legend>
                        <div class="col-sm-10">
                            <b-form-radio v-model="gender" name="sex" value="F">Female</b-form-radio>
                            <b-form-radio v-model="gender" name="sex" value="M">Male</b-form-radio>
                        </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationServer03">Date of Birth</label>
                    <input type="date"  class="form-control" v-model="birthdate" ref="el">
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                        <label for="validationServer03">Guardian Name</label>
                        <input type="text" class="form-control" placeholder="Name of guardian" v-model="guardian_name">
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationServer03">Patient Phone Number</label>
                    <input type="text" class="form-control" placeholder="Patient" v-model="patient_phone">
                    <b-form-invalid-feedback v-if="patient_phone !== ''" :state="patientPhoneValidation">
                        Phone Number must be 10 characters long.
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="patientPhoneValidation">
                        Looks Good.
                    </b-form-valid-feedback>
                </div>
                <div class="col-md-3 mb-3">
                        <label for="validationServer03">Guardian Phone Number</label>
                        <input type="text" class="form-control" placeholder="Guardian" v-model="guardian_phone">
                        <b-form-invalid-feedback v-if="guardian_phone !== ''" :state="guardianPhoneValidation">
                            Phone Number must be 10 characters long.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="guardianPhoneValidation">
                            Looks Good.
                        </b-form-valid-feedback>
                    </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationServer03">Guardian Relation</label>
                    <input type="text" class="form-control" placeholder="Guardian Relation" v-model="guardian_relation">
                </div>
                <div class="col-md-6 mb-3">
                        <label>Agrees to FUP</label>
                        <div class="col-sm-10">
                            <b-form-radio v-model="follow_up" name="followUp" value="true">Yes</b-form-radio>
                            <b-form-radio v-model="follow_up" name="followUp" value="false">No</b-form-radio>
                        </div>
                </div>
                
            </div>

                <div class="form-row">
                    <div class="col-md-4 mb-3">
                            <label>Physical Address</label>
                            <input type="text" class="form-control" placeholder="Physical Address" v-model="address1">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationServer03">District</label>
                        
                            <select v-model="county_district" class="form-control" placeholder="District" >
                                <option v-for="(district, index) in districts" v-bind:key="index">{{district.name}}</option>
                            </select>
                    </div>
                    
                    <div class="col-md-4 mb-3">
                        <label for="validationServer03">TA</label>
                        <select v-model="township_division" class="form-control" placeholder="TA" >
                                <option v-for="(TA, index) in TAs" v-bind:key="index">{{TA.name}}</option>
                            </select>
                    </div>
                </div>
                <button class="btn btn-success" type="submit">Submit form</button>
            </form>
        </b-modal>
    </div>
</template>

<script>

import NavBar from "./NavBar";
import authResource from './../authResource'
import { constants } from 'crypto';

export default {
    name: 'Home',
    components: {NavBar},
    methods: {
        search ()
        {
            this.isLoading = true;
            this.patients = [];

            let payload = {
                search : this.searchParam,
            };
            console.log(this.searchParam)
            let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}`;
            
            if(this.searchParam !== '' && this.searchParam !== undefined){
                authResource().post(dhisAPIEndpoint, payload)
                .then((response)=>{
                    this.isLoading = false;
                    this.patients.push(...response.data.data);

                })
                .catch((error)=>{
                    this.isLoading = false;
                    console.log(error)
                })
            }
            

        },
        setPatient : function (patient)
        {
            
            sessionStorage.setItem('patient', JSON.stringify(patient));
            this.$router.push('/patients/show')
        },
        addPatient : function ()
            {
                this.isLoading = true;

                let payload = {
                    prefix : this.prefix,
                    art_number : this.art_number,
                    given_name : this.given_name,
                    middle_name : this.middle_name,
                    family_name : this.family_name,
                    gender : this.gender,
                    birthdate : this.birthdate,
                    tribe : 'Yao',
                    guardian_name : this.guardian_name,
                    patient_phone : this.patient_phone,
                    guardian_phone : this.guardian_phone,
                    follow_up : this.follow_up,
                    guardian_relation : this.guardian_relation,
                    address1 : this.address1,
                    address2 : this.address2,
                    city_village :  this.city_village,
                    state_province : this.state_province,
                    postal_code : this.postal_code,
                    country : this.country,
                    latitude : this.latitude,
                    longitude : this.longitude,
                    county_district : this.county_district,
                    neighborhood_cell : this.neighborhood_cell,
                    region : this.region,
                    subregion : this.subregion,
                    township_division : this.township_division
                };
                
                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL_POST}`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then(({data: {data}})=>{
                        this.isLoading = false;
                        console.log(data)
                        sessionStorage.setItem('patient', JSON.stringify(data));
                        this.$router.push('steps')
                        
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },
        loadRegions(){
            let dhisAPIEndpoint = `${this.APIHosts.art}/regions`;


            authResource().get(dhisAPIEndpoint)
                .then(({data: {data}})=>{
                    this.isLoading = false;
                    this.regions = JSON.parse(JSON.stringify(data))
                    console.log(this.regions)
                    
                })
                .catch((error)=>{
                    this.isLoading = false;
                    console.log(error)
                })
        },
        loadDistricts(){
            let dhisAPIEndpoint = `${this.APIHosts.art}/districts`;


            authResource().get(dhisAPIEndpoint)
                .then(({data: {data}})=>{
                    this.isLoading = false;
                    this.districts = JSON.parse(JSON.stringify(data))
                    // sessionStorage.setItem('patient', JSON.stringify(data));
                    // this.setPatient(data)
                    
                })
                .catch((error)=>{
                    this.isLoading = false;
                    console.log(error)
                })
        },
        loadTAs(){
            let dhisAPIEndpoint = `${this.APIHosts.art}/traditional-authorities`;


            authResource().get(dhisAPIEndpoint)
                .then(({data: {data}})=>{
                    this.isLoading = false;
                    this.TAs = JSON.parse(JSON.stringify(data))
                    // sessionStorage.setItem('patient', JSON.stringify(data));
                    // this.setPatient(data)
                    
                })
                .catch((error)=>{
                    this.isLoading = false;
                    console.log(error)
                })
        },
    },
    beforeMount(){
        this.loadRegions(),
        this.loadDistricts()
        this.loadTAs()
    },
    data: () => {
        return {
            isLoading : false,

            BASE_URL : 'patients/search',
            BASE_URL_POST: 'patients',
            searchParam : '',
            patients : [],

            regions: [],
            districts: [],
            TAs:[],
            prefix : '',
            art_number : '',
            given_name : '',
            middle_name : '',
            family_name : '',
            gender : '',
            birthdate : '',
            tribe : '',
            guardian_name : '',
            patient_phone : '',
            guardian_phone : '',
            follow_up : '',
            guardian_relation : '',
            address1 : '',
            address2 : '',
            city_village :  '',
            state_province : '',
            postal_code : '',
            country : '',
            latitude : '',
            longitude : '',
            county_district : '',
            neighborhood_cell : '',
            region : '',
            subregion : '',
            township_division : ''
        }
    },
    computed: {
        patientPhoneValidation() {
            return this.patient_phone !== '' && this.patient_phone.length === 10 
        },
        guardianPhoneValidation() {
            return this.guardian_phone !== '' && this.guardian_phone.length === 10 
        }
    }
    
}
</script>
