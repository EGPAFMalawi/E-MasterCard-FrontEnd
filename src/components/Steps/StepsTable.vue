<template>
    <form v-on:submit.prevent="addStep">
        <div v-if="steps.length > 0" class="row d-flex justify-content-center">
            <div class="alert alert-success" role="alert">
                Click  <router-link to="/patients/show"><span class="alert-link">HERE</span> </router-link> to manage Mastercards .
            </div>
        </div>
        <div class="table-responsive">
            <table class="table visit-table">
                <thead class="thead-dark">
                <tr>
                    <th>
                        Step Date
                    </th>
                    <th >
                        Step
                    </th>
                    <th >
                        Site
                    </th>
                    <th>
                        ART Number
                    </th>
                    <th>
                        Origin/Destination
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(singleStep, key) in steps" v-bind:key="key">
                    <td>
                        <input type="date" class="form-control" v-model="singleStep.date" required>
                    </td>
                    <td>
                        <select v-model="singleStep.step" class="form-control">
                            <option>{{singleStep.step}}</option>
                            <option value="Art Start">Art Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                            <option value="Back to facility">Back to facility</option>
                            <option value="Died">Died</option>
                            <option value="Restart">Restart</option>
                        </select>
                    </td>
                    <td>
                        <select  v-model="singleStep.site" class="form-control">
                            <option  v-for="(facility, index) in facilities" v-bind:key="index">{{facility.name}}</option>
                        </select>
                    </td>

                    <td>
                        <input v-model="singleStep.artNumber" class="form-control"  type="text" required>
                    </td>
                    <td>
                        <select  v-model="singleStep.originDestination" class="form-control">
                            <option v-for="(facility, index) in facilities" :value="facility.name" v-bind:key="index">{{facility.name}}</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="date" class="form-control" v-model="stepDate" required>
                    </td>
                    <td>
                        <select v-model="step" class="form-control">
                            <option value="singleStep.step">All The Available Step</option>
                            <option value="Art Start">Art Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                            <option value="Back to facility">Back to facility</option>
                            <option value="Died">Died</option>
                            <option value="Restart">Restart</option>
                        </select>
                    </td>
                    <td>
                        <select  v-model="site" class="form-control" required>
                            <option v-for="(facility, index) in facilities" v-bind:key="index">{{facility.name}}</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="art_number" class="form-control"  type="text" required>
                    </td>
                    <td>
                        <select  v-model="origin_destination" class="form-control">
                            <option v-for="(facility, index) in facilities" v-bind:key="index">{{facility.name}}</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="form-row my-4">
            <div class="col-md-12 d-flex justify-content-center">
                <button @click="showAlert" type="submit" class="btn btn-primary btn-lg my-4">Add Step</button>
            </div>
        </div>

        <b-alert
            :show="dismissCountDown"
            dismissible
            variant="success"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
            >
                Step addition successful
        </b-alert>
    </form>
</template>

<script>
    import authResource from './../../authResource'
    import _ from 'lodash'
    import DatePicker from 'vue2-datepicker'

    export default {
        components: { DatePicker },
        name: 'Steps',
        props: ['steps', 'postPayload'],
        methods: {
            addStep(){
                const payload = {
                    art_number: this.art_number,
                    date: this.stepDate,
                    site: this.site,
                    step: this.step,
                    origin_destination: this.origin_destination,
                    patient: this.patient.patientID,
                }
                const url = `${this.APIHosts.art}/patient-steps`

                authResource().post(url, payload)
                    .then(({data: {data}})=> {
                        this.steps.push(data)
                        this.art_number = ''
                        this.stepDate = ''
                        this.site = ''
                        this.step = ''
                        this.origin_destination = ''
                        this.patient.patientID = ''

                        showAlert()
                    })
                    .catch(err => console.error(err))
            },

            getStages(){
                const url = `${this.APIHosts.art}/patients/${this.patient.patientID}/steps`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.steps = data
                        
                    })
                    .catch(err => console.error(err))
            },
            saveStages(){
                authResource().post(url, this.steps)
                    .then(({data: {data}})=> {
                        this.stages = data
                    })
                    .catch(err => console.error(err))
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            loadFacilities(){
                let dhisAPIEndpoint = `${this.APIHosts.art}/locations`;


                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data}})=>{
                        this.isLoading = false
                        this.facilities = JSON.parse(JSON.stringify(data))
                        console.log(JSON.parse(JSON.stringify(data)))
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                    })
            },
        },
        data: () => {
            return {
                BASE_URL : 'patients',
                dismissSecs: 5,
                dismissCountDown: 0,
                art_number:'',
                step:'',
                stepDate:'',
                site:'',
                origin_destination: '',
                steps: [],
                facilities: []
            }
        },
        beforeMount(){
            this.loadFacilities()
        },
         created() {
            this.patient = JSON.parse(sessionStorage.getItem('patient'));
            this.getStages()
            

        },
        watch : {
            steps(value){
                return value
            },
            postPayload : function ()
            {
                this.saveStages()
            },
            origin_destination: function(){
                console.log(this.origin_destination)
            }
        }
    }
</script>
