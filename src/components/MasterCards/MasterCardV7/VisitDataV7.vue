<template>
        <form v-on:submit.prevent="addNewVisit">
        <div class="table-responsive">
            <table class="table visit-table">
                <thead class="thead-dark">
                <tr>
                    <th>
                        Event Type
                    </th>
                    <th>
                        Visit / Outcome Date
                    </th>
                    <th >
                        Weight
                    </th>
                    <th v-if="patient.person.gender === 'F'" >
                        Pregnant / Breastfeed
                    </th>
                    <th >
                        TB Status (Current)*
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
                    <th>
                        Month on ART
                    </th>
                    <th colspan="3">
                        Viral Load
                    </th>
                    <th>
                        Next Appointment
                    </th>
                    <th>
                        Outcome
                    </th>
                    <th>
                        Void Status
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th width="5">
                        DD/MM/YYYY
                    </th>
                    <th>
                        kg
                    </th>
                    <th v-if="patient.person.gender === 'F'" >

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

                    </th>
                    <th>
                        Sample Taken
                    </th>
                    <th>
                        Symbol
                    </th>
                    <th>
                        Result
                    </th>
                    <th>

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
                        <select v-on:change="disableVisitFields" v-model="observations['concept32Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value="Clinical Visit">Clinical Visit</option>
                            <option value="Outcome">Outcome</option>
                        </select>
                    </td>
                    <td>
                       <input v-model="observations['concept32Encounter'+encounter.encounterID].encounterDatetime" 
                        @keyup="validateDate"  @click="setDateMinMax" @focus="setDateMinMax"
                        class="form-control tb-form"  type="date" >
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept33Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="30" step="any" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                    </td>
                    <td style="width:50px" v-if="patient.person.gender === 'F'">
                        <select v-model="observations['concept34Encounter'+encounter.encounterID].value" class="form-control tb-form" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                            <option value=""></option>
                            <option value="Preg">Preg</option>
                            <option value="Bf">Bf</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="observations['concept35Encounter'+encounter.encounterID].value" class="form-control tb-form" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                            <option value=""></option>
                            <option value="N">N (Suspected No)</option>
                            <option value="Y">Y (Suspected Yes)</option>
                            <option value="C">C (Confirmed Not Rx)</option>
                            <option value="Rx">Rx (Confirmed Rx)</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <select v-model="observations['concept36Encounter'+encounter.encounterID].value" class="form-control tb-form" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                            <option value=""></option>
                            <option value="N">N</option> 
                            <option value="Y">Y</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept37Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" value="" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept38Encounter'+encounter.encounterID].value" class="form-control tb-form" min="0" step="1" oninput="validity.valid||(value='');" value="" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                    </td>
                    <td>
                        <select v-model="observations['concept39Encounter'+encounter.encounterID].value" class="form-control tb-form" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                            <option value=""></option>
                            <option v-for="regimen in regimens" :key="regimen.value" :value="regimen.value">
                                {{regimen.title}}
                            </option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept40Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" value="" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                    </td>
                    <td style="width:30px">
                        <select v-model="observations['concept41Encounter'+encounter.encounterID].value" class="form-control tb-form" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                            <option value=""></option>
                            <option value="P">P</option>
                            <option value="G">G</option>
                        </select>
                    </td>

                    <td>
                        <select v-model="observations['concept42Encounter'+encounter.encounterID].value" class="form-control tb-form" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                            <option value=""></option>
                            <option value="C">C (CPT Only)</option>
                            <option value="I">I (IPT Only)</option>
                            <option value="CI">CI (CPT + IPT)</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept43Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept44Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                    </td>
                    <td>
                        <select v-model="observations['concept45Encounter'+encounter.encounterID].value" class="form-control tb-form" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                            <option value=""></option>
                            <option value="BLED">BLED</option>
                            <option value="N/A">N/A</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <select v-model="observations['concept53Encounter'+encounter.encounterID].value" class="form-control tb-form" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                            <option value=""></option>
                            <option value=">"> &gt; </option>
                            <option value="<"> &lt; </option>
                            <option value="=">=</option>
                            <option value="LDL">LDL</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept46Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome">
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept47Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="date" :disabled="observations['concept32Encounter'+encounter.encounterID].isOutcome" >
                    </td>
                    <td style="width:60px">
                        <select v-model="observations['concept48Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value="D">Died</option>
                            <option value="Def"> Defaulted</option>
                            <option value="Stop"> Stop </option>
                            <option value="TO">Trans Out</option>
                        </select>
                    </td>
                    <td align="center">
                        <div class="mt-2">
                            <b-form-checkbox v-model="observations['concept32Encounter'+encounter.encounterID].encounterVoided" name="check-button" @change="voidVisit(observations['concept32Encounter'+encounter.encounterID])" switch>
                                {{observations['concept32Encounter'+encounter.encounterID].encounterVoided ? 'VOID' : 'NOT VOID'}}
                            </b-form-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                         <select v-on:change="disableVisitFields" v-model="concepts.concept32" class="form-control tb-form">
                            <option value="Clinical Visit">Clinical Visit</option>
                            <option value="Outcome">Outcome</option>
                        </select>
                    </td>
                    <td>
                        <input ref="visitDate" v-model="encounterDatetime" 
                        @click="setEventDateMinMax" @focus="setEventDateMinMax"
                        class="form-control tb-form"  type="date" required>
                        <span>{{ errors.first('Visit-Date')}}</span>
                    </td>
                    <td style="width:60px">
                        <input :disabled="!isVisit && isOutcome" v-model="concepts.concept33" class="form-control tb-form"  type="number" min="30" step="any">
                    </td>
                    <td v-if="patient.person.gender === 'F'">
                        <select v-model="concepts.concept34" :disabled="!isVisit && isOutcome" class="form-control tb-form" >
                            <option value=""></option>
                            <option value="Preg">Preg</option>
                            <option value="Bf">Bf</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="concepts.concept35" class="form-control tb-form" :disabled="!isVisit && isOutcome">
                            <option value=""></option>
                            <option value="N">N (Suspected No)</option>
                            <option value="Y">Y (Suspected Yes)</option>
                            <option value="C">C (Confirmed Not Rx)</option>
                            <option value="Rx">Rx (Confirmed Rx)</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="concepts.concept36" class="form-control tb-form" :disabled="!isVisit && isOutcome">
                            <option value=""></option>
                            <option value="N">N</option>
                            <option value="Y">Y</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="concepts.concept37" :disabled="!isVisit && isOutcome" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" >
                    </td>
                    <td style="width:60px">
                        <input v-model="concepts.concept38" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" :disabled="!isVisit && isOutcome">
                    </td>
                    <td>
                        <select v-model="concepts.concept39" class="form-control tb-form" :disabled="!isVisit && isOutcome">
                            <option value=""></option>
                            <option v-for="regimen in regimens" :key="regimen.value" :value="regimen.value">
                                {{regimen.title}}
                            </option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="concepts.concept40" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" :disabled="!isVisit && isOutcome">
                    </td>
                    <td style="width:30px">
                        <select v-model="concepts.concept41" class="form-control tb-form" :disabled="!isVisit && isOutcome">
                            <option value=""></option>
                            <option value="P">P</option>
                            <option value="G">G</option>
                        </select>
                    </td>

                    <td>
                        <select v-model="concepts.concept42" class="form-control tb-form" :disabled="!isVisit && isOutcome">
                            <option value=""></option>
                            <option value="C">C (CPT Only)</option> 
                            <option value="I">I (IPT Only)</option>
                            <option value="CI">CI (CPT + IPT)</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="concepts.concept43" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" :disabled="!isVisit && isOutcome">
                    </td>
                    <td>
                        <input v-model="concepts.concept44" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" :disabled="!isVisit && isOutcome">
                    </td>
                    <td>
                        <select v-model="concepts.concept45" class="form-control tb-form" :disabled="!isVisit && isOutcome">
                            <option value=""></option>
                            <option value="BLED">BLED</option>
                            <option value="N/A">N/A</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="concepts.concept53" class="form-control tb-form" :disabled="!isVisit && isOutcome">
                            <option value=""></option>
                            <option value=">"> &gt; </option>
                            <option value="<"> &lt; </option>
                            <option value="=">=</option>
                            <option value="LDL">LDL</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="concepts.concept46" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" :disabled="!isVisit && isOutcome">
                    </td>
                    <td>
                        <input id="tooltip-button-1" v-model="concepts.concept47" ref="appointmentDate" class="form-control tb-form"  type="date" required :disabled="!isVisit && isOutcome">
                        <span>{{ errors.first('Next Visit')}}</span>
                    </td>
                    <td>
                       <select v-model="concepts.concept48" class="form-control tb-form">
                            <option value="D">Died</option>
                            <option value="Def"> Defaulted</option>
                            <option value="Stop"> Stop </option>
                            <option value="TO">Trans Out</option>
                        </select> 
                    </td>
                    <td></td>
                </tr>
                <b-tooltip :show.sync="show" target="tooltip-button-1" placement="top">
                    Visit Date must be before Appointment Date
                </b-tooltip>
                </tbody>
            </table>
            <div class="d-flex justify-content-end pl-0">
                <button @click="updateVisitData" class="btn btn-success btn-lg my-4">
                    Update Visit Data
                    <font-awesome-icon icon="save" class="ml-1"/>
                </button>
                <button type="submit" class="btn btn-primary btn-lg my-4">
                    Save Visit
                </button>
            </div>
        </div>
            
        </form>
</template>

<script>
    import {authResource} from './../../../authResource'
    import _ from 'lodash'
    import { notificationSystem, setMinDate, setMaxDate, validateDate, matchString } from '../../../globals'
    import { networkInterfaces } from 'os';
    import { constants } from 'crypto';
    import { mapGetters, mapActions } from 'vuex' 

    export default {
        name: 'VisitDataV7',
        props: ['encounterTypes', 'postPayload', 'patient', 'patientCard'],
        methods: {
            getPatientCardDetails(){

                let url = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[3].encounterTypeID,
                    'consider-version' : true
                };

                authResource().post(url, payload)
                    .then((response)=>{
                        this.patientCardData.push(...response.data.data)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            addNewVisit(){
                if(this.concepts.concept47 <= this.encounterDatetime && this.isVisit){
                    this.$toast.error(
                        `Appointment date is before or same as vist date`, 
                        'Error', 
                        notificationSystem.options.error)
                }else if(this.isOutcome){
                    this.processDataForPost(true, 'Visit Added')
                }
                else{
                    this.processDataForPost(true, 'Visit Added')
                }  
            },
            updateVisitData(e){
                e.preventDefault()
                this.processDataForPost(false, 'Visit Data Saved')
            },
            processDataForPost (isAddVisit, message){
                let payload = [];

                if (isAddVisit){
                    let newPayload = this.encounterTypes[3].concepts.map((item)=>{
                        return {
                            'concept' : item.conceptID,
                            'encounter-type' : this.encounterTypes[3].encounterTypeID,
                            'value' : this.concepts['concept'+item.conceptID],
                            'observation' : null
                        }
                    });

                    payload.push(...newPayload);
                    this.handlePost(payload, message);
                }else {

                    let oldPayload = this.patientCardData.map((item)=>{

                        let key = 'concept'+item.concept.conceptID+'Encounter'+item.encounter.encounterID
                        let obj = this.observations[key]

                        return {
                            'concept' : obj.concept,
                            'encounter-type' : item.encounter.encounterType,
                            'encounterID': item.encounter.encounterID,
                            'encounter-datetime': obj.encounterDatetime,
                            'value' : obj.value,
                            'observation' : obj.observation
                        }
                    });

                    const grouped = _.chain(oldPayload)
                        .groupBy((item)=> {
                            return item.encounterID
                        }).value()

                    Object.entries(grouped).forEach(group => {
                        
                        this.handlePost(group[1], message);
                    })
                }

            },
            getObservation (conceptID){
                let obs = this.patientCardData.filter((item)=>{
                    return item.concept.conceptID === conceptID
                });

                if (obs.length > 0)
                    return obs[0].observationID;
                else
                    return null
            },
            handlePost (payload, message){
                let dhisAPIEndpoint = `${this.APIHosts.art}/observations`;
                let finalPayload = {
                    'patient-card' : this.patientCard.patientCardID,
                    'observations' : payload,
                    'encounter-datetime': (
                        message === "Visit Added" ? 
                        this.encounterDatetime : payload.filter(item => item.concept == 32 )[0]['encounter-datetime'])
                };

                authResource().post(dhisAPIEndpoint, finalPayload)
                    .then((response)=>{
                        this.clearFields();
                        this.patientCardData = [];
                        this.getPatientCardDetails()
                        this.$toast.success(`Success! ${message}`, 'OK', notificationSystem.options.success)
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(
                                `${data.message}, 
                                ${error[0]}`, 
                                'Error', 
                                notificationSystem.options.error
                            )
                        });
                        
                    })
            },
            fillConceptObservations (patientCardData){
                const observations = []

                patientCardData.forEach((item, key)=>{
                    const observation = {
                        observation : item.observationID,
                        concept : item.concept.conceptID,
                        encounter : item.encounter.encounterID,
                        encounterVoided : item.encounter.voided,
                        encounterDatetime: item.encounter.encounterDatetime,
                        value : item.value,
                        isOutcome: (item.value === "Outcome")
                    }
                    const newkey = 'concept'+observation.concept+'Encounter'+observation.encounter
                    this.observations[newkey] = observation
                });
                
                this.encounters  = _.chain(patientCardData)
                    .groupBy((item)=> {
                        return item.encounter.encounterID
                    })
                    .toPairs()
                    .map(pair => _.zipObject(['encounterID', 'data'], pair))
                    .sortBy((group)=>{
                        return new Date(group.data[0].encounter.encounterDatetime)
                    })
                    .value();
            },
            clearFields(){
                this.concepts = {
                    concept32 : '',
                    concept33 : '',
                    concept34 : '',
                    concept35 : '',
                    concept36 : '',
                    concept37 : '',
                    concept38 : '0',
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
                    concept52: '',
                    concept53 : '',
                }
                this.encounterDatetime = null
                this.concepts.concept44 = ''
            },
             evaluateIfVisitDateBeforeAppointmenttDate(visitDate, appointmentDate){
                visitDate = new Date(visitDate)
                appointmentDate = new Date(appointmentDate)

                if (visitDate < appointmentDate)
                    return true
                else
                    return false
            },
            calculateMonthsOnART(artStartDate, currentVisitDate){
                if (artStartDate !== undefined){
                    artStartDate = new Date(artStartDate)
                    currentVisitDate = new Date(currentVisitDate)

                    const months = currentVisitDate.getMonth() - artStartDate.getMonth() + (12 * (currentVisitDate.getFullYear() - artStartDate.getFullYear()))
                    return months
                }
                else{
                    return 0
                }
            },
            calculateMaxStartDate(){
                const today = new Date()
                const max = new Date(today.setDate(today.getDate() + 365))
                return max.toISOString().split('T')[0]
            },
            // setMinMax(ref){
            //     const startDate = localStorage.getItem('startDate')
            //     let max = this.calculateMaxStartDate()

            //     if(this.patient.lastStep.step == 'Died'){
            //         max = this.patient.lastStep.date
            //     }

            //     if(startDate !== ''){
            //         this.$refs[ref].setAttribute('min', startDate)
            //         this.$refs[ref].setAttribute('max', max)
            //     }
            // },
            voidVisit(visitObservation){
                let action = true
                if (visitObservation.encounterVoided)
                    action = false

                let dhisAPIEndpoint = `${this.APIHosts.art}/encounters/`+visitObservation.encounter+'/toggle-void';
                let payload = {
                    'void' : action,
                };

                authResource().patch(dhisAPIEndpoint, payload)
                    .then((response)=>{
                        this.clearFields();
                        this.patientCardData = [];
                        this.getPatientCardDetails();
                        this.$toast.success(`Success! Visit Void Toggled`, 'OK', notificationSystem.options.success)
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });

                    })

            },
            disableVisitFields(e){
                if (e.target.value === "Outcome"){

                    const tds = Array.from(e.target.parentNode.parentNode.children)
                    
                    tds.forEach((td, key) => {
                        if (key > 1 && key < 17){
                            td.children[0].disabled = true
                            td.children[0].value = null
                        }

                        if (key === 16){
                            td.children[0].required = false
                        }
                    })
                }else if(e.target.value === "Clinical Visit") {
                    const tds = Array.from(e.target.parentNode.parentNode.children)
                    
                    tds.forEach((td, key) => {
                        if (key > 1 && key < 17){
                            td.children[0].disabled = false
                        }

                        if (key === 16){
                            td.children[0].required = true
                        }

                    })
                }
            },
            setEventDateMinMax(e){
                setMinDate(e, this.startDate ? this.startDate : this.patient.person.birthdate)
                setMaxDate(e)
            },
        },
        data: () => {
            return {
                notificationSystem,
                BASE_URL : 'patients',
                encounters : [],
                observations : {},
                show: false,
                concepts : {
                    concept32 : '', //Event Type
                    concept33 : '', 
                    concept34 : '',
                    concept35 : '',
                    concept36 : '',
                    concept37 : '',
                    concept38 : '0',
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
                    concept52: '',
                    concept53 : '',
                },
                encounterDatetime: null,
                patientCardData: [],
                isOutcome: false,
                isVisit: false
            }
        },
        created() {
            this.getPatientCardDetails()
        },
        watch : {
            encounterTypes : function (value) {
                if (value.length > 0)
                {
                    this.getPatientCardDetails()
                }
            },
            patientCardData : function (value) {
                this.fillConceptObservations(value);
                // this.setMinMax('visitDate')
                // this.setMinMax('appointmentDate')
            },
            'encounterDatetime': function(){
                if(this.encounterDatetime!=='' && this.concepts.concept47!=='')
                    this.show = this.evaluateIfVisitDateBeforeAppointmenttDate(this.encounterDatetime, this.concepts.concept47)    
                
                    this.concepts.concept44 = (
                        this.calculateMonthsOnART(this.startDate, this.encounterDatetime) > 0 && this.isVisit === true 
                        ? this.calculateMonthsOnART(this.startDate, this.encounterDatetime) : ''
                    )
                
            },
            'concepts.concept47': function(){
                if(this.encounterDatetime!=='' && this.concepts.concept47!=='')
                    this.show = this.evaluateIfVisitDateBeforeAppointmenttDate(this.encounterDatetime, this.concepts.concept47)
            },
            'concepts.concept32': function(e){
                if (this.concepts.concept32 === "Clinical Visit"){
                    this.isOutcome = false
                    this.isVisit = true
                }
                else if(this.concepts.concept32 === "Outcome"){
                    this.isOutcome = true
                    this.isVisit = false
                    this.concepts.concept44 = ''
                }
            },
            'startDate': function() { 
                if (Object.values(this.observations).length < 1){
                    const autodate = new Date(this.startDate)
                    this.encounterDatetime = autodate.toISOString().split('T')[0]
                }

            }
        },
        computed: {
            ...mapGetters(['startDate', 'regimens', 'testDate'])
        }
    }
</script>
