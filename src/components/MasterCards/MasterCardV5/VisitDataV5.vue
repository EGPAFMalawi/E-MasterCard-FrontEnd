<template>
        <form v-on:submit.prevent="addNewVisit">
            <div class="table-responsive">
                <table class="table visit-table">
                <thead class="thead-dark">
                    <tr>
                        <th>
                            Visit Date
                        </th>
                        <th >
                            Weight
                        </th>
                        <th >
                            Height
                        </th>
                        <th >
                            Pregnant / Breastfeed
                        </th>
                        <th >
                            Tb Status (Current)*
                        </th>
                        <th>
                            Side Effects
                        </th>
                        <th>
                            Pill<br>
                            Count
                        </th>
                        <th>
                            Dosses<br>
                            Missed
                        </th>
                        <th>
                            ART Regimen
                        </th>
                        <th colspan="2">
                            ARVs Given
                        </th>
                        <th colspan="2">
                            CPT/IPT Given
                        </th>
                        <th colspan="2">
                            Family Planning
                        </th>
                        <th>
                            Month on ART
                        </th>
                        <th colspan="2">
                            Viral Load
                        </th>
                        <th>
                            Next Appointment / Outcome Date
                        </th>
                        <th>
                            Adverse Outcome
                        </th>
                    </tr>
                    <tr>
                        <th width="5">
                            DD/MM/YYYY
                        </th>
                        <th>
                            kg
                        </th>
                        <th>
                            cm
                        </th>
                        <th>

                        </th>
                        <th>

                        </th>
                        <th>

                        </th>
                        <th>

                        </th>
                        <th>

                        </th>
                        <th>
                            Write Code
                        </th>
                        <th>
                            No. of Tablets
                        </th>
                        <th style="width:10px">
                            Given To
                        </th>
                        <th>
                            CPT/IPT Given
                        </th>
                        <th >
                            No. of Tablets
                        </th>
                        <th>
                            Depo Given
                        </th>
                        <th >
                            No. of Condom
                        </th>
                        <th>

                        </th>
                        <th>
                            Sample Taken
                        </th>
                        <th>
                            Result
                        </th>
                        <th>

                        </th>
                        <th>

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(encounter, key) in encounters" v-bind:key="key">
                        <td>
                            <input v-model="observations['concept32Encounter'+encounter.encounterID].value" class="form-control"  type="date" >
                        </td>
                        <td style="width:60px">
                            <input v-model="observations['concept33Encounter'+encounter.encounterID].value" class="form-control"  type="number">
                        </td>
                        <td style="width:60px">
                            <input v-model="observations['concept51Encounter'+encounter.encounterID].value" class="form-control"  type="number">
                        </td>
                        <td>
                            <select v-model="observations['concept34Encounter'+encounter.encounterID].value" class="form-control" >
                                <option value=""></option>
                                <option value="Preg">Preg</option>
                                <option value="Br">Br</option>
                            </select>
                        </td>
                        <td>
                            <select v-model="observations['concept35Encounter'+encounter.encounterID].value" class="form-control">
                                <option value=""></option>
                                <option value="N">N (Suspected No)</option>
                                <option value="Y">Y (Suspected Yes)</option>
                                <option value="C">C (Confirmed no Rx)</option>
                                <option value="Rx">Rx (Confirmed Rx)</option>
                            </select>
                        </td>
                        <td>
                            <select v-model="observations['concept36Encounter'+encounter.encounterID].value" class="form-control">
                                <option value=""></option>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </td>
                        <td style="width:60px">
                            <input v-model="observations['concept37Encounter'+encounter.encounterID].value" class="form-control"  type="number" value="">
                        </td>
                        <td style="width:60px">
                            <input v-model="observations['concept38Encounter'+encounter.encounterID].value" class="form-control"  type="number" value="">
                        </td>
                        <td>
                            <select v-model="observations['concept39Encounter'+encounter.encounterID].value" class="form-control">
                                <option value=""></option>
                                <option value="0A">0A</option>
                                <option value="1A">2A</option>
                                <option value="2A">2A</option>
                                <option value="3A">2A</option>
                                <option value="4A">4A</option>
                                <option value="5A">5A</option>
                                <option value="6A">6A</option>
                                <option value="7A">7A</option>
                                <option value="8A">8A</option>
                                <option value="0thA">0th</option>
                            </select>
                        </td>
                        <td style="width:60px">
                            <input v-model="observations['concept40Encounter'+encounter.encounterID].value" class="form-control"  type="number" value="">
                        </td>
                        <td style="width:30px">
                            <select v-model="observations['concept41Encounter'+encounter.encounterID].value" class="form-control">
                                <option value=""></option>
                                <option value="P">P</option>
                                <option value="G">G</option>
                            </select>
                        </td>

                        <td>
                            <select v-model="observations['concept42Encounter'+encounter.encounterID].value" class="form-control">
                                <option value=""></option>
                                <option value="C">C (CPT Only)</option>
                                <option value="I">I (IPT Only)</option>
                                <option value="CI">CI (CPT + IPT)</option>
                            </select>
                        </td>
                        <td style="width:60px">
                            <input v-model="observations['concept43Encounter'+encounter.encounterID].value" class="form-control"  type="number">
                        </td>
                        <td>
                            <select v-model="observations['concept49Encounter'+encounter.encounterID].value" class="form-control">
                                <option value=""></option>
                                <option value="Depo">Depo Given</option>
                                <option value="false">Depo not Given</option>
                            </select>
                        </td>
                        <td style="width:60px">
                            <input v-model="observations['concept50Encounter'+encounter.encounterID].value" class="form-control"  type="number">
                        </td>
                        <td style="width:60px">
                            <input v-model="observations['concept44Encounter'+encounter.encounterID].value" class="form-control"  type="number">
                        </td>
                        <td>
                            <select v-model="observations['concept45Encounter'+encounter.encounterID].value" class="form-control">
                                <option value=""></option>
                                <option value="true">Bled True</option>
                                <option value="false">Bled False</option>
                            </select>
                        </td>
                        <td>
                            <input v-model="observations['concept46Encounter'+encounter.encounterID].value" class="form-control"  type="number">
                        </td>
                        <td>
                            <input v-model="observations['concept47Encounter'+encounter.encounterID].value" class="form-control"  type="date" >
                        </td>
                        <td>
                            <select v-model="observations['concept48Encounter'+encounter.encounterID].value" class="form-control">
                                <option value=""></option>
                                <option value="D">D</option>
                                <option value="Def">Def</option>
                                <option value="Stop">Stop</option>
                                <option value="TO">TO</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input v-model="concepts.concept32" name="Visit-Date" ref="visitDate" v-validate="'date_format:dd-MM-yyyy'" class="form-control"  placeholder='DD-MM-YYYY' required pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}">
                            <span>{{ errors.first('Visit-Date')}}</span>
                        </td>
                        <td style="width:60px">
                            <input v-model="concepts.concept33" class="form-control"  type="number" min="30">
                        </td>
                        <td style="width:60px">
                            <input v-model="concepts.concept51" class="form-control"  type="number" min="30">
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
                            <select v-model="concepts.concept36" class="form-control">
                                <option value=""></option>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </td>
                        <td style="width:60px">
                            <input v-model="concepts.concept37" class="form-control"  type="number" min="0">
                        </td>
                        <td style="width:60px">
                            <input v-model="concepts.concept38" class="form-control"  type="number" min="0">
                        </td>
                        <td>
                            <select v-model="concepts.concept39" class="form-control">
                                <option value=""></option>
                                <option value="0A">0A</option>
                                <option value="1A">2A</option>
                                <option value="2A">2A</option>
                                <option value="3A">2A</option>
                                <option value="4A">4A</option>
                                <option value="5A">5A</option>
                                <option value="6A">6A</option>
                                <option value="7A">7A</option>
                                <option value="8A">8A</option>
                                <option value="0th">0th</option>
                            </select>
                        </td>
                        <td style="width:60px">
                            <input v-model="concepts.concept40" class="form-control"  type="number" min="0">
                        </td>
                        <td style="width:30px">
                            <select v-model="concepts.concept41" class="form-control">
                                <option value=""></option>
                                <option value="P">P</option>
                                <option value="G">G</option>
                            </select>
                        </td>

                        <td>
                            <select v-model="concepts.concept42" class="form-control">
                                <option value=""></option>
                                <option value="C">C (CPT Only)</option>
                                <option value="I">I (IPT Only)</option>
                                <option value="CI">CI (CPT + IPT)</option>
                            </select>
                        </td>
                        <td>
                            <input v-model="concepts.concept43" class="form-control"  type="number">
                        </td>
                        <td>
                            <select v-model="concepts.concept49"  class="form-control">
                                <option value=""></option>
                                <option value="Depo">Depo Given</option>
                                <option value="false">Depo not Given</option>
                            </select>
                        </td>
                        <td style="width:60px">
                            <input v-model="concepts.concept50" class="form-control"  type="number">
                        </td>
                        <td>
                            <input v-model="concepts.concept44" class="form-control"  type="number">
                        </td>
                        <td>
                            <select v-model="concepts.concept45" class="form-control">
                                <option value=""></option>
                                <option value="Bled">Bled True</option>
                                <option value="false">Bled False</option>
                            </select>
                        </td>
                        <td>
                            <input v-model="concepts.concept46" class="form-control"  type="number">
                        </td>
                        <td>
                            <input name="Next Visit" v-model="concepts.concept47" v-validate="'date_format:dd-MM-yyyy|after:visitDate'" class="form-control"  type="text" placeholder='DD-MM-YYYY' required pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}">
                            <span>{{ errors.first('Next Visit')}}</span>
                        </td>
                        <td>
                            <select v-model="concepts.concept48" class="form-control">
                                <option value=""></option>
                                <option value="D">D</option>
                                <option value="Def">Def</option>
                                <option value="Stop">Stop</option>
                                <option value="TO">TO</option>
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

    export default {
        name: 'VisitDataV5',
        props: ['encounterTypes', 'postPayload'],
        methods: {
            getPatientCardDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[3].encounterTypeID,
                    'consider-version' : true
                };

                authResource().post(dhisAPIEndpoint, payload)
                    .then((response)=>{
                        console.log(response);
                        this.patientCardData.push(...response.data.data)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            addNewVisit :function()
            {
                this.processDataForPost(true)
            },
            processDataForPost: function (isAddVisit)
            {
                let payload = [];

                if (isAddVisit)
                {
                    let newPayload = this.encounterTypes[3].concepts.map((item)=>{
                        return {
                            'concept' : item.conceptID,
                            'encounter-type' : this.encounterTypes[3].encounterTypeID,
                            'value' : this.concepts['concept'+item.conceptID],
                            'observation' : null
                        }
                    });

                    payload.push(...newPayload);
                }else {

                    let oldPayload = this.patientCardData.map((item)=>{

                        let key = 'concept'+item.concept.conceptID+'Encounter'+item.encounter.encounterID
                        let obj = this.observations[key]

                        return {
                            'concept' : obj.concept,
                            'encounter-type' : item.encounter.encounterType,
                            'value' : obj.value,
                            'observation' : obj.observation
                        }
                    });

                    payload.push(...oldPayload);
                }

                this.handlePost(payload);
            },
            getObservation: function (conceptID)
            {
                let obs = this.patientCardData.filter((item)=>{
                    return item.concept.conceptID === conceptID
                });

                if (obs.length > 0)
                    return obs[0].observationID;
                else
                    return null
            },
            handlePost: function (payload)
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/observations`;
                let finalPayload = {
                    'patient-card' : this.patientCard.patientCardID,
                    'observations' : payload
                };

                authResource().post(dhisAPIEndpoint, finalPayload)
                    .then((response)=>{
                        console.log(response);
                        this.clearFields();
                        this.patientCardData = [];
                        this.getPatientCardDetails()
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            fillConceptObservations: function (patientCardData)
            {

                let mappedObs = patientCardData.map((item)=>{
                    return {
                        observation : item.observationID,
                        concept : item.concept.conceptID,
                        encounter : item.encounter.encounterID,
                        value : item.value
                    }
                });

                this.observations = _.keyBy(mappedObs,(item)=>{
                    return 'concept'+item.concept+'Encounter'+item.encounter
                });

                this.encounters = _.chain(patientCardData).groupBy((item)=>{
                    return item.encounter.encounterID
                })
                    .toPairs()
                    .map(pair => _.zipObject(['encounterID', 'data'], pair))
                    .value()
            },
            clearFields : function()
            {
                this.concepts = {
                    concept32 : '',
                    concept33 : '',
                    concept34 : '',
                    concept35 : '',
                    concept36 : '',
                    concept37 : '',
                    concept38 : '',
                    concept39 : '',
                    concept40 : '',
                    concept41 : '',
                    concept42 : '',
                    concept43 : '',
                    concept44 : '',
                    concept45 : '',
                    concept46 : '',
                    concept47 : '',
                    concept48 : '',
                    concept49 : '',
                    concept50 : '',
                    concept51 : '',
                    concept52: ''

                }
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
                concepts : {
                    concept32 : '',
                    concept33 : '',
                    concept34 : '',
                    concept35 : '',
                    concept36 : '',
                    concept37 : '',
                    concept38 : '',
                    concept39 : '',
                    concept40 : '',
                    concept41 : '',
                    concept42 : '',
                    concept43 : '',
                    concept44 : '',
                    concept45 : '',
                    concept46 : '',
                    concept47 : '',
                    concept48 : '',
                    concept49 : '',
                    concept50 : '',
                    concept51 : '',
                    concept52: ''

                }
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
            postPayload : function ()
            {
                this.processDataForPost(false);
            },
            encounterTypes : function (value) {
                if (value.length > 0)
                {
                    this.getPatientCardDetails()
                }
            },
            patientCardData : function (value) {
                this.fillConceptObservations(value);
                console.log(this.concepts)
            }
        }
    }
</script>
