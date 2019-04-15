<template>
        <form v-on:submit.prevent="addNewVisit">
        <div class="table-responsive">
            <table class="table visit-table">
                <thead class="thead-dark">
                <tr>
                    <th>
                        Step Date
                    </th>
                    <th >
                        ART Number
                    </th>
                    <th >
                        Step
                    </th>
                    <th >
                        Site
                    </th>
                    <th>
                        Original Destination
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(singleStep, key) in steps" v-bind:key="key">
                    <td>
                       <input v-model="stepDate" placeholder="DD-MM-YYYY" name="Step-Date" ref="stepDate" v-validate="'date_format:dd-MM-yyyy'" class="form-control" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}" required>
                    </td>
                    <td style="width:60px">
                        <input v-model="art_number" class="form-control"  type="text" required>
                    </td>
                    <td>
                        <select v-model="step" class="form-control">
                            <option value="singleStep.step">All The Available Step</option>
                            <option value="Art Start">Art Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="site" class="form-control"  type="text" required>
                    </td>
                    <td>
                        <input v-model="original_destination" class="form-control"  type="text" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input v-model="concepts.concept32" placeholder="DD-MM-YYYY" name="Visit-Date" ref="visitDate" v-validate="'date_format:dd-MM-yyyy'" class="form-control"  required pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}">
                        <!-- <date-picker v-model="concepts.concept32" format="DD-MM-YYYY" lang="en"></date-picker> -->
                        <span>{{ errors.first('Visit-Date')}}</span>
                    </td>
                    <td style="width:60px">
                        <input v-model="concepts.concept33" class="form-control"  type="number" min="30">
                    </td>
                    <td>
                        <select v-model="concepts.concept34" class="form-control" >
                            <option value=""></option>
                            <option value="Preg">Preg</option>
                            <option value="Br">Br</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="concepts.concept35" class="form-control">
                            <option value=""></option>
                            <option value="N">N (Suspected No)</option>
                            <option value="Y">Y (Suspected Yes)</option>
                            <option value="C">C (Confirmed no Rx)</option>
                            <option value="Rx">Rx (Confirmed Rx)</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="concepts.concept36" class="form-control" required>
                            <option value=""></option>
                            <option value="N">N</option>
                            <option value="Y">Y</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
            <div class="form-row my-4">
                <div class="col-md-12 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary btn-lg my-4">Add New Visit</button>
                </div>
            </div>
        </form>
</template>

<script>
    import authResource from './../../../authResource'
    import _ from 'lodash'
    import DatePicker from 'vue2-datepicker'

    export default {
        components: { DatePicker },
        name: 'Steps',
        props: ['encounterTypes', 'postPayload'],
        methods: {
             getStages(){
                const url = `${this.APIHosts.art}/patients/${this.patient.patientID}/steps`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.stages = data;
                        console.log(this.stages[0].patientStepID)
                    })
                    .catch(err => console.error(err))
            },
            addStep(){
                const payload = {
                    art_number: this.art_number,
                    date: this.stepDate,
                    site: this.site,
                    step: this.step,
                    original_destination: this.original_destination,
                    patient: this.patient.patientID,
                }
                const url = `${this.APIHosts.art}/patient-steps`
                console.log(payload)
                authResource().post(url, payload)
                    .then(({data: {data}})=> {
                        this.stages.push(data)
                    })
                    .catch(err => console.error(err))
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
                encounters : [],
                observations : {},
                patientCardData : [

                ],
                art_number:'',
                step:'',
                stepDate:'',
                site:'',
                original_destination: '',
                steps: []
            }
        },
        created() {


            let patient = JSON.parse(sessionStorage.getItem('patient'));
            let patientCard = JSON.parse(sessionStorage.getItem('patientCard'));

            if (!patient || !patientCard){
                this.$router.push('/')
            }

            this.patient = patient;
            this.patientCard = patientCard;

        },
        watch : {
            // postPayload : function ()
            // {
            //     this.processDataForPost(false);
            // },
            // encounterTypes : function (value) {
            //     if (value.length > 0)
            //     {
            //         this.getPatientCardDetails()
            //     }
            // },
            // patientCardData : function (value) {
            //     this.fillConceptObservations(value);
            //     console.log(this.concepts)
            // }
        }
    }
</script>
