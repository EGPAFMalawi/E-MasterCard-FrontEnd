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
                        Step/Outcome
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
                        <input type="date" ref="stepDate" class="form-control" v-model="singleStep.date" required>
                    </td>
                    <td>
                        <select v-model="singleStep.step" class="form-control">
                            <option>{{singleStep.step}}</option>
                            <option value=""></option>
                            <option value="ART Start">ART Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                            <option value="ART Stop">ART Stop</option>
                            <option value="Restart">Restart</option>
                            <option value="Died">Died</option>
                        </select>
                    </td>
                    <td>
                        <select  v-model="singleStep.site" class="form-control">
                            <option  v-for="(facility, index) in facilities" v-bind:key="index">{{facility.name}}</option>
                        </select>
                    </td>

                    <td>
                        <div class="input-group">
                            <!-- <div class="input-group-prepend">
                                <div class="input-group-text">{{prefix}}</div>
                            </div> -->
                            <input v-model="singleStep.artNumber" class="form-control"  type="text" required>
                        </div>
                        
                    </td>
                    <td>
                        <select v-model="singleStep.originDestination" class="form-control" >
                            <option v-for="(facility, index) in facilities" :value="facility.name" v-bind:key="index">{{facility.name}}</option>
                        </select>
                    </td>
                </tr>
                <tr v-if="patient.lastStep === null || patient.lastStep.step !== 'Died'">
                    <td>
                        <input type="date" ref="stepDate" class="form-control" v-model="stepDate" required>
                    </td>
                    <td>
                        <select v-model="step" class="form-control" required>
                            <option value=""></option>
                            <option value="ART Start">ART Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                            <option value="ART Stop">ART Stop</option>
                            <option value="Restart">Restart</option>
                            <option value="Died">Died</option>
                        </select>
                    </td>
                    <td>
                        <select  v-model="site" class="form-control" required>
                            <option value=""></option>
                            <option v-for="(facility, index) in facilities" v-bind:key="index">{{facility.name}}</option>
                        </select>
                    </td>
                    <td>
                        <div class="input-group">
                            <!-- <div class="input-group-prepend">
                                <div class="input-group-text">{{prefix}}</div>
                            </div> -->
                            <input v-model="art_number" class="form-control"  type="text" required>
                        </div>
                    </td>
                    <td>
                        <select  ref="originDestination" v-model="origin_destination" class="form-control">
                            <option value=""></option>
                            <option v-for="(facility, index) in facilities" v-bind:key="index">{{facility.name}}</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="form-row my-4" v-if="patient.lastStep === null || patient.lastStep.step !== 'Died'">
            <div class="col-md-12 d-flex justify-content-center">
                <button type="submit" class="btn btn-primary btn-lg my-4">Add Step</button>
            </div>
        </div>
    </form>
</template>

<script>
    import authResource from './../../authResource'
    import _ from 'lodash'
    import { notificationSystem } from '../../globals'
    import { error } from 'util';


    export default {
        name: 'Steps',
        props: ['postPayload', 'lastStep', 'dob'],
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
                
                if ((this.step === 'Trans-in' && this.origin_destination === '') ||
                    (this.step === 'Trans-out' && this.origin_destination === '') 
                ){
                    return this.$toast.error(`<strong>Origin/Destination</strong> must not be empty, failed to add step`, 'Error', notificationSystem.options.error)
                }
                else if(this.step == 'Trans-in' && this.origin_destination === this.site ||
                    this.step == 'Trans-out' && this.origin_destination === this.site){
                   return this.$toast.error(`<strong>Site Name</strong> must not be same as, <strong>Origin/Destination</strong>`, 'Error', notificationSystem.options.error)
                }
                else if(this.step === 'ART Start' && this.origin_destination.length > 0){
                    return this.$toast.error(`<strong>ART Start Cannot have Origin/Destination</strong>`, 'Error', notificationSystem.options.error)
                }
                else if(this.step === 'ART Start' && this.art_number.length === 0){
                    return this.$toast.error(`<strong>Please add ART Number</strong>`, 'Error', notificationSystem.options.error)
                }
                else{
                    if (this.step === 'Died'){
                        this.$toast.question(`You have selected <strong>died</strong> step, Do you intend to proceed?`, 'Warning', notificationSystem.options.question)
                    }
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
                            this.getStages()

                            if (this.patient.lastStep === null){
                                this.patient.lastStep = {step: ''}
                            }
                            this.patient.lastStep.step = this.step
                            
                            sessionStorage.setItem('patient', JSON.stringify(this.patient))

                            if (this.step === 'Died'){
                                this.$emit('died', this.step)
                            }
                            
                            this.art_number = ''
                            this.stepDate = ''
                            this.site = ''
                            this.step = ''
                            this.origin_destination = ''

                            this.$toast.success('Successfully added new step!', 'OK', notificationSystem.options.success)
                        })
                        .catch((response) => {
                            return console.log(response)

                            return Object.values(errors).forEach(error => {
                                this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                            });
                            
                        }) 
                }
                
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

            loadFacilities(){
                let dhisAPIEndpoint = `${this.APIHosts.art}/facilities`;


                authResource().get(dhisAPIEndpoint)
                    .then(({data: {data}})=>{
                        this.isLoading = false
                        this.facilities = JSON.parse(JSON.stringify(data))
                    })
                    .catch((error)=>{
                        this.isLoading = false;
                    })
            },

            setMinMax(){
                if(this.dob !== '' && this.$refs.stepDate !== undefined){
                    
                    this.$refs.stepDate.setAttribute('min', this.dob)
                    this.$refs.stepDate.setAttribute('max', this.maxDate())
                }
            },
            maxDate(){
                const today = new Date()
                return today.toISOString().split('T')[0]
            },
            toggleIsDisabled(ref, isTrue){
                this.$refs[ref].disabled = isTrue
            }
        },
        data: () => {
            return {
                notificationSystem,
                BASE_URL : 'patients',
                art_number:'',
                step:'',
                stepDate:'',
                site:'',
                origin_destination: '',
                steps: [],
                facilities: [],
                patient: {lastStep: {step: ''}},
                prefix: 'PRE'
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
                this.setMinMax()
                return value
            },
            postPayload : function ()
            {
                this.saveStages()
            },
            step: function(){
                if (this.step === 'ART Start'){ 
                    this.toggleIsDisabled('originDestination', true)
                }
                else if (this.step === 'Restart'){ 
                    this.toggleIsDisabled('originDestination', true)
                }
                else if (this.step === 'Died'){ 
                    this.toggleIsDisabled('originDestination', true)
                }
                else{
                    this.toggleIsDisabled('originDestination', false)
                }
                    
            }
        }
    }
</script>
