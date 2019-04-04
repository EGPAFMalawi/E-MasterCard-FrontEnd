<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>

        </div>
        <div class="container">
            <div>
                <h2 style="text-align: center;">Patient Details Below</h2>
            </div>

            <div class="shadow-4 border-2 border-yellow-dark rounded p-2 m-4">
                <div class="row">
                    <div class="col">
                        <div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">Given Name</div>
                                <div class="col">
                                    {{ patient.person.personName.given}}
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">Middle Name</div>
                                <div class="col">
                                    {{ patient.person.personName.middle}}
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">Family Name</div>
                                <div class="col">
                                    {{ patient.person.personName.family}}
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-7 font-bold">Sex</div>
                                        <div class="col">
                                            {{ patient.person.gender}}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div class="row mb-2">
                                        <div class="col-2 font-bold">Tribe</div>
                                        <div class="col">
                                            {{ patient.tribe}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">Date of Birth</div>
                                <div class="col">
                                    {{ patient.person.birthdate}}
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">
                                    Guardian Name
                                </div>
                                <div class="col">
                                    {{ patient.guardianName}}
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-3 font-bold">Phone</div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col">
                                            <h5>
                                                Patient
                                            </h5>
                                            <div>
                                                {{ patient.patientPhone}}
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h5>
                                                Guardian
                                            </h5>
                                            <div>
                                                {{ patient.guardianPhone}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">Agrees to FUP</div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col-3">
                                            {{ patient.followUp}}
                                        </div>
                                        <div class="col">
                                            <h5>
                                                Guardian Relation
                                            </h5>
                                            <div>
                                                {{ patient.guardianRelation}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">Address 1</div>
                                <div class="col">
                                    {{ patient.person.personAddress.address1}}
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">Address 2</div>
                                <div class="col">
                                    {{ patient.person.personAddress.address2}}
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-3 font-bold">City Village</div>
                                <div class="col">
                                    {{ patient.person.personAddress.cityVillage}}
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">State Province</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.stateProvince}}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">Postal Code</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.postalCode}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">Country</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.country}}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">District</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.countryDistrict}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">Neighbor hood Cell</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.neighborhoodCell}}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">Township Division</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.townshipDivision}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">Region</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.region}}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">SubRegion</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.subRegion}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">Latitude</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.latitude}}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row mb-2">
                                        <div class="col-4 font-bold">Longitude</div>
                                        <div class="col">
                                            {{ patient.person.personAddress.longitude}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 style="text-align: center;">Patient Cards</h2>
            </div>

            <form v-on:submit.prevent="addNewPatientCard">
                <div class="row">
                    <div class="offset-2 col-4">
                        <div class="w-full">
                            <label class="block uppercase tracking-wide text-grey-darkest text-xs font-bold mb-2" for="grid-state">
                                Master Card Version
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-grey-lighter border border-yellow-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark" id="grid-state" v-model="selectedMasterCardVersion" required>
                                    <option :value="null" disabled>Pick from the Available Versions</option>
                                    <option v-for="(masterCard,index) in availableMasterCards" v-bind:key="index" :value="masterCard.masterCardID">{{masterCard.name}}</option>
                                </select>
                                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="w-full">
                            <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
                                Master Card Version
                            </label>
                            <div class="relative">
                                <button type="submit" class="bg-yellow-darker px-5 py-3 text-white rounded flex mx-auto">Add New MasterCard <font-awesome-icon icon="plus" class="ml-1"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

                <div class="border-r-4 border-l-4 border-yellow-darker shadow-md rounded bg-white mt-2">
                    <div class="pl-3 mt-5 pt-3">
                        <h2 class="text-yellow-darker font-light">All Patient Cards</h2>
                        <div class="container-fluid my-3">
                            <table class="tableauto w-full">
                                <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        MasterCard
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
                                <tr v-for="(patientCard, index) in patientCards" v-bind:key="index">
                                    <td class="text-center" style="padding:10px!important">
                                        {{ index+1}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patientCard.masterCard.name}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        {{ patientCard.dateCreated}}
                                    </td>
                                    <td class="text-center" style="padding:10px!important">
                                        <a role="button" v-on:click="setPatientCard(patientCard)">View Card</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
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