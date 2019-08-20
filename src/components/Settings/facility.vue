<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        
        <section>
            <div class="container">
                <div class="row">

                    <div class="card w-100 mt-5">
                        <div class="card-body">
                            <form v-on:submit.prevent="saveFacilitySettings">
                                <div class="form-row">
                                    <div class="col-12">
                                        <label>Facility Name</label>
                                        <model-select :options="facilities"
                                                v-model="selectedFacility"
                                                placeholder="Select Facility">
                                        </model-select>
                                        <!-- <input v-model="selectedFacility" class="form-control"  type="text" required> -->
                                    </div>

                                </div>
                                <div class="form-row">
                                    <div class="col-12">
                                        <label>Facility Code</label>
                                        <input v-model="facilityCode" class="form-control"  type="facilityCode" placeholder="Create User Password" required>
                                    </div>
                                </div>
                                <button class="btn btn-success mt-3" type="submit">Save</button>
                            
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
</template>

<script>
    import {authResource} from './../../authResource'
    import NavBar from '../../views/NavBar'
    import { notificationSystem } from '../../globals'
    import { ModelSelect } from 'vue-search-select'

    export default {
        name: 'Settings',
        components: { NavBar, ModelSelect},
        methods: {
            loadFacilities(){
                let url = `${this.APIHosts.art}/facilities`;

                authResource().get(url)
                    .then(({data: {data}})=>{
                        this.isLoading = false
                        console.log(data)
                        this.facilities = JSON.parse(JSON.stringify(data)).map(({name, siteCode, facilityID}) => {
                            return {value: name, text: name, code: siteCode, facilityID}
                        })

                        if (sessionStorage.getItem('facilities') === null){
                            sessionStorage.setItem('facilities', JSON.stringify(this.facilities))
                        }
                    })
                    .catch((error)=>{
                        console.error(error)
                        this.isLoading = false;
                    })
            },
            saveFacilitySettings(){
                const url = `${this.APIHosts.art}/settings/1`,
                    payload = {
                        settingID: 1,
                        options: this.selectedFacility
                    }

                authResource().patch(url, payload)
                    .then( data => {
                        this.$toast.success('Saved', 'OK', notificationSystem.options.success)
                    })
                    .catch( error => console.error(error))
            },
            loadFacilitySettings(){
                const url = `${this.APIHosts.art}/settings`

                authResource().get(url)
                    .then(({data: {data}}) => {
                        this.selectedFacility = data[0].options
                    })
                    .catch(error => {
                        this.$toast.error(`Unable to load facility Settings`, 'Error', notificationSystem.options.error)
                    })
            }
        },
        data: () => {
            return {
                notificationSystem,
                isBusy: true,
                show: false,
                showUpdateModal: false,
                BASE_URL : 'users',
                users: [],
                userID: '',
                postPayload : false,
                perPage: 8,
                currentPage: 1,
                selectedFacility: {value: null, text: null, facilityID: null},
                facilityCode: null,
                facilities: [],
                selectMode: 'single',
                status: ''
            }
        },
        computed: {
        },
        watch: {
            selectedFacility: function(){
                this.facilityCode = this.facilities.filter(({text}) => text === this.selectedFacility.text)[0].code
            }
        },
        created() {
            this.loadFacilities()
            this.loadFacilitySettings()
        },
        beforeMount(){
            
            if (sessionStorage.getItem('facilities') !== null){
                this.facilities = JSON.parse(sessionStorage.getItem('facilities'))
            }else{
                this.loadFacilities()
            }
        },
    }
</script>
