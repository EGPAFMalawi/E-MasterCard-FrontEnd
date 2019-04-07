<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>

        </div>
        <div class="container">
            <div class="search-patient">
                <form v-on:submit.prevent="search">
                    <div class="mb-4 mx-auto position-sticky">
                        <input v-model="searchParam" id="search" class="mx-auto" type="search" placeholder="Search using Names" required/>
                    </div>

                    <div class="mb-4 row">
                        <div class="offset-3 col-3">
                            <button type="submit" class="">Search Patient <font-awesome-icon icon="search" class="ml-1"/></button>
                        </div>
                        <div class="col-3">
                            <router-link to="/patients/add">
                                <button class="">Add Patient <font-awesome-icon icon="plus" class="ml-1"/></button>
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div class="card">
                    <div class="card-body">
                        <h2 class="">{{patients.length}} Patients Matching '{{this.searchParam}}' Search</h2>
                        <div class="container">
                            <table class="">
                                <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Given Name
                                    </th>
                                    <th>
                                        Middle Name
                                    </th>
                                    <th>
                                        Family Name
                                    </th>
                                    <th>
                                        Sex
                                    </th>
                                    <th>
                                        Date of Birth
                                    </th>
                                    <th>
                                        Phone
                                    </th>
                                    <th>
                                        Date Created
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(patient, index) in patients" v-bind:key="index">
                                    <td class="text-center" style="padding:10px!important">
                                        {{ index+1}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patient.person.personName.given}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patient.person.personName.middle}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patient.person.personName.family}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patient.person.gender}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patient.person.birthdate}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patient.patientPhone}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patient.dateCreated}}
                                    </td>
                                    <td>
                                        <a role="button" v-on:click="setPatient(patient)">View MasterCards</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
