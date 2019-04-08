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
                        <p class="mb-3">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
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
                                <th scope="col">Phone</th>
                                <th scope="col">Date Created</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(patient, index) in patients" v-bind:key="index">
                                <th scope="row">{{ index+1}}</th>
                                <td>{{ patient.person.personName.given}}</td>
                                <td>{{ patient.person.personName.middle}}</td>
                                <td>{{ patient.person.personName.family}}</td>
                                <td>{{ patient.person.gender}}</td>
                                <td>{{ patient.person.birthdate}}</td>
                                <td>{{ patient.patientPhone}}</td>
                                <td>{{ patient.dateCreated}}</td>
                                <td><button type="button" class="btn btn-success btn-sm" v-on:click="setPatient(patient)">View MasterCards</button></td>
                              </tr>
                            </tbody>
                          </table>
            </div> 
        </div>
        
    </section>
    <b-modal id="modal-1" title="Enter Patient Details" size="lg">
          <form>
                                <div class="form-row">
                                  <div class="col-md-4 mb-3">
                                    <label for="validationServer01">Given Name</label>
                                    <input type="text" class="form-control" id="validationServer01" placeholder="First name" value="Mark" required>
                                    <div class="valid-feedback">
                                      Looks good!
                                    </div>
                                  </div>
                                  <div class="col-md-4 mb-3">
                                    <label for="validationServer02">Middle Name</label>
                                    <input type="text" class="form-control" id="validationServer02" placeholder="Last name" value="Otto" required>
                                    <div class="valid-feedback">
                                      Looks good!
                                    </div>
                                  </div>
                                  <div class="col-md-4 mb-3">
                                        <label for="validationServer02">Family Name</label>
                                        <input type="text" class="form-control" id="validationServer02" placeholder="Last name" value="Otto" required>
                                        <div class="valid-feedback">
                                          Looks good!
                                        </div>
                                      </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                            <legend class="col-form-label col-sm-2 pt-0">Sex</legend>
                                            <div class="col-sm-10">
                                              <div class="form-check">
                                                <input class="form-check-input" type="radio" name="sex" id="sex1" value="Female" checked>
                                                <label class="form-check-label" for="sex1">
                                                  Female
                                                </label>
                                              </div>
                                              <div class="form-check">
                                                <input class="form-check-input" type="radio" name="sex" id="sex2" value="Male">
                                                <label class="form-check-label" for="sex2">
                                                  Male
                                                </label>
                                              </div>
                                            </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="validationServer03">Date of Birth</label>
                                        <input type="date" class="form-control" id="validationServer03" required>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                            <label for="validationServer03">Tribe</label>
                                            <input type="text" class="form-control" id="validationServer03" placeholder="Tribe" required>
                                        </div>
                                </div>
                                <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                                <label for="validationServer03">Guardian Name</label>
                                                <input type="text" class="form-control" id="validationServer03" placeholder="Name of guardian" required>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationServer03">Phone Numbers</label>
                                            <input type="text" class="form-control" id="validationServer03" placeholder="Patient" required>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                                <label for="validationServer03" style="color: #fff">.</label>
                                                <input type="text" class="form-control" id="validationServer03" placeholder="Guardian" required>
                                            </div>
                                    </div>
                                    <br>
                                    <div class="form-row">
                                        <div class="col-md-4 mb-3">
                                                <label for="validationServer03">Address 1</label>
                                                <input type="text" class="form-control" id="validationServer03" placeholder="Address 1" required>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationServer03">Address 2</label>
                                            <input type="text" class="form-control" id="validationServer03" placeholder="Address 2" required>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                                <label for="validationServer03">City Village</label>
                                                <input type="text" class="form-control" id="validationServer03" placeholder="City Village" required>
                                            </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-4 mb-3">
                                                <label for="validationServer03">State Province</label>
                                                <input type="text" class="form-control" id="validationServer03" placeholder="" required>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationServer03">Postal Code</label>
                                            <input type="text" class="form-control" id="validationServer03" placeholder="" required>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationServer03">Country</label>
                                            <input type="text" class="form-control" id="validationServer03" placeholder="City Village" required>
                                        </div>

                                        
                                    </div>

                                    <div class="form-row">
                                        <div class="col-md-4 mb-3">
                                            <label for="validationServer03">District</label>
                                            <input type="text" class="form-control" id="validationServer03" placeholder="City Village" required>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                                <label for="validationServer03">Latitude</label>
                                                <input type="text" class="form-control" id="validationServer03" placeholder="Latitude" required>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationServer03">Longitude</label>
                                            <input type="text" class="form-control" id="validationServer03" placeholder="Longitude" required>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary" type="submit">Submit form</button>
                                    </form>
    </b-modal>
    </div>
</template>

<script>

import NavBar from "./NavBar";
import axios from 'axios'
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

            axios.post(dhisAPIEndpoint, payload)
                .then((response)=>{
                    this.isLoading = false;
                    this.patients.push(...response.data.data);

                })
                .catch((error)=>{
                    this.isLoading = false;
                    console.log(error)
                })

        },
        setPatient : function (patient)
        {
            
            sessionStorage.setItem('patient',JSON.stringify(patient));
            this.$router.push('/patients/show')
        }
    },
    data: () => {
        return {
            isLoading : false,

            BASE_URL : 'patients/search',
            searchParam : '',
            patients : []
        }
    }

}
</script>
