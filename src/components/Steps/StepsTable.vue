<template>
    <form v-on:submit.prevent="handleStepCRUD('create',$event,{
                    art_number: preart,
                    date: stepDate,
                    site: site.value,
                    step: step,
                    origin_destination: origin_destination.value,
                    patient: patient.patientID,
                })">
        <div v-if="steps.length > 0" class="row d-flex justify-content-center">
            <div class="alert alert-success" role="alert">
                Click  <router-link to="/patients/show"><span class="alert-link">HERE</span> </router-link> to manage Mastercards .
            </div>
        </div>
        <div class="table-responsive" style="overflow: unset !important">
            <table class="table visit-table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">
                        Step Date
                    </th>
                    <th scope="col" >
                        Step/Outcome
                    </th>
                    <th scope="col" >
                        Site
                    </th>
                    <th scope="col">
                        ART Number
                    </th>
                    <th scope="col">
                        Origin/Destination
                    </th>
                    <th scope="col">
                        Void Status
                    </th>
                    <th scope="col">
                        Action
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
                            <option value="Blank">Blank</option>
                            <option value="ART Start">ART Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                            <option value="ART Stop">ART Stop</option>
                            <option value="Restart">Restart</option>
                            <option value="Died">Died</option>
                        </select>
                    </td>
                    <td width="300px">
                        <model-select :options="facilities"
                                v-model="singleStep.site"
                                placeholder="select item">
                        </model-select>
                    </td>

                    <td>
                        <div class="input-group">
                            <!-- <div class="input-group-prepend">
                                <div class="input-group-text">{{prefix}}</div>
                            </div> -->
                            <input v-model="singleStep.artNumber" class="form-control"  type="text" required>
                        </div>
                        
                    </td>
                    <td width="300px">
                        <model-select :options="facilities"
                                v-model="singleStep.originDestination"
                                placeholder="select item">
                        </model-select>
                    </td>
                    <td align="center">
                        <div class="mt-2">
                            <b-form-checkbox v-model="singleStep.voided" name="check-button" @change="voidVisit(singleStep)" switch>
                                {{singleStep.voided ? 'VOID' : 'NOT VOID'}}
                            </b-form-checkbox>
                        </div>
                    </td>
                    <td align="center">
                        <button @click="handleStepCRUD('update',$event, singleStep)" class="btn btn-warning">Update</button>
                    </td>
                </tr>
                <tr v-if="patient.lastStep === null || patient.lastStep.step !== 'Died'">
                    <td> 
                        <input type="date" ref="stepDate" class="form-control" v-model="stepDate" required>
                    </td>
                    <td>
                        <select v-model="step" class="form-control" required>
                            <option value="Blank">Blank</option>
                            <option value="ART Start">ART Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                            <option value="ART Stop">ART Stop</option>
                            <option value="Restart">Restart</option>
                            <option value="Died">Died</option>
                        </select>
                    </td>
                    <td width="300px">
                        <model-select :options="facilities"
                                v-model="site"
                                placeholder="select item">
                        </model-select>
                    </td>
                    <td>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">{{prefix}}</div>
                            </div>
                            <input v-model="art_number" class="form-control"  type="text" required>
                        </div>
                    </td>
                    <td width="300px">
                        <model-select :options="facilities"
                                v-model="origin_destination"
                                placeholder="select item"
                                id="originDestination">
                        </model-select>
                    </td>
                    <td>

                    </td>
                    <td>
                        <button type="submit" class="btn btn-primary" style="text-align:center">Add Step</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </form>

    

</template>

<script>
    import Vue from 'vue'
    import {authResource} from './../../authResource'
    import { notificationSystem } from '../../globals'
    import { ModelSelect } from 'vue-search-select'
    import { mapActions, mapGetters } from 'vuex'


    export default {
        name: 'Steps',
        props: ['postPayload', 'lastStep', 'dob'],
        components: { ModelSelect },
        methods: {
            update(singleStep){
                const payload = {
                    art_number: singleStep.artNumber,
                    date: singleStep.date,
                    site: singleStep.site,
                    step: singleStep.step,
                    origin_destination: singleStep.originDestination,
                    patient: this.patient.patientID,
                }

                const url = `${this.APIHosts.art}/patient-steps/${singleStep.patientStepID}`

                authResource().patch(url, payload)
                    .then(({data: {data}})=> {
                        this.getStages()
                        if (this.patient.lastStep === null){
                            this.patient.lastStep = {step: ''}
                        }
                        this.patient.lastStep.step = data.step
                        this.patient.artNumber = this.art_number
                        
                        sessionStorage.setItem('patient', JSON.stringify(this.patient))
                        
                            this.$emit('died', data.step)

                        this.$toast.success('Successfully updated step!', 'OK', notificationSystem.options.success)
                    })
                   .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                        
                    }) 
            },
            handleStepCRUD(action, event, data=null){
                if (action === 'update') event.preventDefault()

                if (data !== null){
                    const {art_number, artNumber, date, origin_destination, patient, site, step} = data

                    if ((this.step === 'Trans-in' && origin_destination === '') ||
                        (this.step === 'Trans-out' && origin_destination === '') 
                    ){
                        return this.$toast.error(`<strong>Origin/Destination</strong> must not be empty, failed to add step`, 'Error', notificationSystem.options.error)
                    }
                    else if(this.step == 'Trans-in' && origin_destination === site ||
                        this.step == 'Trans-out' && origin_destination === site){
                    return this.$toast.error(`<strong>Site Name</strong> must not be same as, <strong>Origin/Destination</strong>`, 'Error', notificationSystem.options.error)
                    }
                    else if(this.step === 'ART Start' && origin_destination.length > 0){
                        return this.$toast.error(`<strong>ART Start Cannot have Origin/Destination</strong>`, 'Error', notificationSystem.options.error)
                    }
                    else if(this.step === 'ART Start' && art_number.length === 0 || this.step === 'ART Start' && art_number.length === 0){
                        return this.$toast.error(`<strong>Please add ART Number</strong>`, 'Error', notificationSystem.options.error)
                    }
                    else if (this.step === 'Died'){
                            const happen = {
                                onClosing: (instance, toast, closedBy) => {
                                    if (closedBy === 'yes'){
                                        if(action === 'create'){
                                            this.addStep(data)
                                        }
                                        else if(action ==='update'){
                                            this.update(data)
                                        }
                                    }
                                }
                            }

                            Object.assign(notificationSystem.options.question, happen)
                            this.$toast.question(`You have selected <strong>died</strong> step, Do you intend to proceed?`, 'Warning', notificationSystem.options.question)
                    }else{
                        if(action === 'create'){
                            this.addStep(data)
                        }
                        else if(action ==='update'){
                            this.update(data)
                        }
                    }
                }
                
            },

            addStep(payload){

                const url = `${this.APIHosts.art}/patient-steps`

                authResource().post(url, payload)
                    .then(({data: {data}})=> {
                        this.getStages()

                        if (this.patient.lastStep === null){
                            this.patient.lastStep = {step: ''}
                        }
                        this.patient.lastStep.step = this.step
                        this.patient.artNumber = payload.art_number
                        
                        sessionStorage.setItem('patient', JSON.stringify(this.patient))

                        if (this.step === 'Died'){
                            this.$emit('died', this.step)
                        }
                        
                        this.art_number = ''
                        this.stepDate = ''
                        this.site = {value:'', text:''}
                        this.step = ''
                        this.origin_destination = {value:'', text:''}

                        this.$toast.success('Successfully added new step!', 'OK', notificationSystem.options.success)
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                        
                    }) 
            },

            getStages(){
                const url = `${this.APIHosts.art}/patients/${this.patient.patientID}/steps`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.steps = data
                        console.log(data)
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
                        this.facilities = JSON.parse(JSON.stringify(data)).map(({name, siteCode}) => {
                            return {value: name, text: name, code: siteCode}
                        })
                        if (sessionStorage.getItem('facilities') === null){
                            sessionStorage.setItem('facilities', JSON.stringify(this.facilities))
                        }
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

                else if(this.dob === ''){
                    this.$refs.stepDate.setAttribute('max', this.maxDate())
                }
            },
            maxDate(){
                const today = new Date()
                return today.toISOString().split('T')[0]
            },
            toggleIsDisabled(ref, isTrue){
                const parent = document.querySelector(`#${ref}`).parentElement
                isTrue ? parent.classList.add('disabled') : parent.classList.remove('disabled')
            },
            voidVisit(step){    
                let action = true
                if (step.voided)
                    action = false

                let dhisAPIEndpoint = `${this.APIHosts.art}/patient-steps/`+step.patientStepID+'/toggle-void';
                let payload = {
                    'void' : action,
                };

                authResource().patch(dhisAPIEndpoint, payload)
                    .then((response)=>{
                        this.getStages();
                        this.$toast.success(`Success! Visit Void Toggled`, 'OK', notificationSystem.options.success)
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });

                    })

            }
        },
        data: () => {
            return {
                notificationSystem,
                BASE_URL : 'patients',
                art_number:'',
                step:'',
                stepDate:'',
                site: {value:'', text:''},
                origin_destination: {
                    value: '',
                    text: ''
                },
                steps: [],
                facilities: [],
                // patient: {lastStep: {step: ''}},
                prefix: '__'
            }
        },
        beforeMount(){
            
            if (sessionStorage.getItem('facilities') !== null){
                this.facilities = JSON.parse(sessionStorage.getItem('facilities'))
            }else{
                this.loadFacilities()
            }
        },
         created() {
            if (this.patient !== undefined)
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
                    
            },
            site: function(){
                this.prefix = this.facilities.filter(({text}) => text === this.site.text)[0].code
            }
        },
        computed: {
            ...mapGetters(['patient']),
            preart: function(){
                
                return `${this.prefix}${this.art_number}`
            }
        }
    }
</script>
