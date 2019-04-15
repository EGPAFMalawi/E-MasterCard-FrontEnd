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
                       <input v-model="singleStep.stepDate" placeholder="DD-MM-YYYY" name="Step-Date" ref="stepDate" v-validate="'date_format:dd-MM-yyyy'" class="form-control" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}" required>
                    </td>
                    <td style="width:60px">
                        <input v-model="singleStep.art_number" class="form-control"  type="text" required>
                    </td>
                    <td>
                        <select v-model="singleStep.step" class="form-control">
                            <option value="singleStep.step">{{singleStep.step}}</option>
                            <option value="Art Start">Art Start</option>
                            <option value="Trans-in">Trans-in</option>
                            <option value="Trans-out">Trans-out</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="singleStep.site" class="form-control"  type="text" required>
                    </td>
                    <td>
                        <input v-model="singleStep.original_destination" class="form-control"  type="text" required>
                    </td>
                </tr>
                <tr>
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
                
                art_number:'',
                step:'',
                stepDate:'',
                site:'',
                original_destination: '',
                steps: []
            }
        },
        // created() {patient_phone


        //     let patient = JSON.parse(sessionStorage.getItem('patient'));
        //     let patientCard = JSON.parse(sessionStorage.getItem('patientCard'));

        //     if (!patient || !patientCard){
        //         this.$router.push('/')
        //     }

        //     this.patient = patient;
        //     this.patientCard = patientCard;

        // },
        watch : {
            steps(value){
                return value
            }
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
