<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>

        </div>
        <div class="container">
            <div>
                <h2 style="text-align: center;">Enter Patient Details Below</h2>
            </div>

                <div class="my-4"></div>
            <form v-on:submit.prevent="addPatient">
                <div class="shadow-4 border-2 border-yellow-dark rounded p-2 m-4">
                    <div class="row">
                        <div class="col">
                            <div>
                                <div class="row mb-2">
                                    <div class="col-3">Given Name</div>
                                    <div class="col">
                                        <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="given_name">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-3">Middle Name</div>
                                    <div class="col">
                                        <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="middle_name">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-3">Family Name</div>
                                    <div class="col">
                                        <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="family_name">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-7">Sex</div>
                                            <div class="col">
                                                <label class="font-bold">
                                                    <input class="leading-tight" name="gender" type="radio" value="M" v-model="gender"><span class="text-sm">M</span>
                                                </label>
                                                <br>
                                                <label class="font-bold">
                                                    <input class="leading-tight" name="gender" type="radio" value="F" v-model="gender"><span class="text-sm">F</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <div class="row mb-2">
                                            <div class="col-2">Tribe</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="tribe">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-3">Date of Birth</div>
                                    <div class="col">
                                        <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="date" v-model="birthdate">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-3">
                                        Guardian Name
                                    </div>
                                    <div class="col">
                                        <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="guardian_name">
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-3">Phone</div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col">
                                                <h5>
                                                    Patient
                                                </h5>
                                                <div>
                                                    <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="patient_phone">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <h5>
                                                    Guardian
                                                </h5>
                                                <div>
                                                    <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="guardian_phone">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-3">Agrees to FUP</div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col-3">
                                                <label class="font-bold">
                                                    <input class="leading-tight" name="follow_up" type="radio" value="false" v-model="follow_up">
                                                    <span class="text-sm">
                                                    N
                                                </span>
                                                </label>
                                                <br>
                                                <label class="font-bold">
                                                    <input class="leading-tight" name="follow_up" type="radio" value="true" v-model="follow_up">
                                                    <span class="text-sm">
                                                    Y
                                                </span>
                                                </label>
                                            </div>
                                            <div class="col">
                                                <h5>
                                                    Guardian Relation
                                                </h5>
                                                <div>
                                                    <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="guardian_relation">
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
                                    <div class="col-3">Address 1</div>
                                    <div class="col">
                                        <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="address1">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-3">Address 2</div>
                                    <div class="col">
                                        <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="address2">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-3">City Village</div>
                                    <div class="col">
                                        <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="city_village">
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">State Province</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="state_province">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">Postal Code</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="postal_code">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">Country</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="country">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">District</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="county_district">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">Neighbor hood Cell</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="neighborhood_cell">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">Township Division</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="township_division">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">Region</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="region">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">SubRegion</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="subregion">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">Latitude</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="latitude">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row mb-2">
                                            <div class="col-4">Longitude</div>
                                            <div class="col">
                                                <input class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-yellow-dark"  type="text" v-model="longitude">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="offset-4 col-4">
                            <button type="submit" class="bg-yellow-darker px-5 py-3 text-white rounded flex mx-auto">Save Patient <font-awesome-icon icon="save" class="ml-1"/></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import authResource from './../../authResource'
    import NavBar from "../../views/NavBar";

    export default {
        name: 'AddPatient',
        components: {
            NavBar
        },
        methods: {
            addPatient : function ()
            {
                this.isLoading = true;

                let payload = {
                    prefix : this.prefix,
                    given_name : this.given_name,
                    middle_name : this.middle_name,
                    family_name : this.family_name,
                    gender : this.gender,
                    birthdate : this.birthdate,
                    tribe : this.tribe,
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

                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}`;

                authResource().post(dhisAPIEndpoint, payload)
                    .then((response)=>{
                        this.isLoading = false;
                        console.log(response)
                        sessionStorage.setItem('patient', JSON.stringify(response.data.data));

                        this.$router.push('/');
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                        console.log(error)
                    })

            },

            prepareAuthRequestData : function()
            {
                return {
                    auth : {
                        username: this.authCredentials.username,
                        password: this.authCredentials.password
                    },
                }
            }
        },
        data: () => {
            return {
                isLoading : false,

                BASE_URL : 'patients',
                prefix : '',
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
        }
    }
</script>
