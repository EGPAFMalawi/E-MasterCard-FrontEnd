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
                    <th v-if="patient.person.gender === 'F'" >
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
                    <th>
                        Month on ART
                    </th>
                    <th colspan="3">
                        Viral Load
                    </th>
                    <th>
                        Next Appointment
                    </th>
                </tr>
                <tr>
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
                </tr>
                </thead>
                <tbody>
                <tr v-for="(encounter, key) in encounters" v-bind:key="key">
                    <td>
                       <input v-model="observations['concept32Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="date" >
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept33Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');">
                    </td>
                    <td v-if="patient.person.gender === 'F'">
                        <select v-model="observations['concept34Encounter'+encounter.encounterID].value" class="form-control tb-form" >
                            <option value=""></option>
                            <option value="Preg">Preg</option>
                            <option value="Br">Br</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="observations['concept35Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value=""></option>
                            <option value="N">N (Suspected No)</option>
                            <option value="Y">Y (Suspected Yes)</option>
                            <option value="C">C (Confirmed Not Rx)</option>
                            <option value="Rx">Rx (Confirmed Rx)</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="observations['concept36Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value=""></option>
                            <option value="N">N</option>
                            <option value="Y">Y</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept37Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" value="">
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept38Encounter'+encounter.encounterID].value" class="form-control tb-form" min="0" step="1" oninput="validity.valid||(value='');" value="">
                    </td>
                    <td>
                        <select v-model="observations['concept39Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value=""></option>
                            <option value="0A">0A (ABC600 / 3TC300 + NVP200)</option>
                            <option value="2A">2A (AZT300 / 3TC150 + NVP200)</option>
                            <option value="4A">4A (AZT300 / 3TC150 + EFV600)</option>
                            <option value="5A">5A (TDF300 / 3TC300 + EFV600)</option>
                            <option value="6A">6A (TDF300 / 3TC300 + NVP200)</option>
                            <option value="7A">7A (TDF300 / 3TC300 + ATV/r300/100)</option>
                            <option value="8A">8A (AZT300 / 3TC150 + ATV/r300/100)</option>
                            <option value="9A">9A (ABC600 / 3TC300 + LPV/r200/50)</option>
                            <option value="10A">10A (TDF300 / 3TC300 + LPV/r200/50)</option>
                            <option value="11A">11A (AZT300 / 3TC150 + LPV/r200/50)</option>
                            <option value="12A">12A (DRV600 + r100 + DTG50(+-NRTIs)</option>
                            <option value="13A">13A (TDF300 / 3TC300 / DTG50</option>
                            <option value="14A">14A (ABC600 / 3TC300 + DTG50</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept40Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" value="">
                    </td>
                    <td style="width:30px">
                        <select v-model="observations['concept41Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value=""></option>
                            <option value="P">P</option>
                            <option value="G">G</option>
                        </select>
                    </td>

                    <td>
                        <select v-model="observations['concept42Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value=""></option>
                            <option value="C">C (CPT Only)</option>
                            <option value="I">I (IPT Only)</option>
                            <option value="CI">CI (CPT + IPT)</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept43Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');">
                    </td>
                    <td style="width:60px">
                        <input v-model="observations['concept44Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');">
                    </td>
                    <td>
                        <select v-model="observations['concept45Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value=""></option>
                            <option value="Bled">Bled</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="observations['concept53Encounter'+encounter.encounterID].value" class="form-control tb-form">
                            <option value=""></option>
                            <option value=">"> &gt; </option>
                            <option value="<"> &lt; </option>
                            <option value="=">=</option>
                            <option value="LDL">LDL</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="observations['concept46Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');">
                    </td>
                    <td>
                        <input v-model="observations['concept47Encounter'+encounter.encounterID].value" class="form-control tb-form"  type="date" >
                    </td>
                </tr>
                <tr>
                    <td>
                        <input ref="visitDate" v-model="concepts.concept32" class="form-control tb-form"  type="date" required>
                        <span>{{ errors.first('Visit-Date')}}</span>
                    </td>
                    <td style="width:60px">
                        <input v-model="concepts.concept33" class="form-control tb-form"  type="number" min="30" step="1">
                    </td>
                    <td v-if="patient.person.gender === 'F'">
                        <select v-model="concepts.concept34" class="form-control tb-form" >
                            <option value=""></option>
                            <option value="Preg">Preg</option>
                            <option value="Br">Br</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="concepts.concept35" class="form-control tb-form">
                            <option value=""></option>
                            <option value="N">N (Suspected No)</option>
                            <option value="Y">Y (Suspected Yes)</option>
                            <option value="C">C (Confirmed Not Rx)</option>
                            <option value="Rx">Rx (Confirmed Rx)</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="concepts.concept36" class="form-control tb-form"
                        >
                            <option value=""></option>
                            <option value="N">N</option>
                            <option value="Y">Y</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="concepts.concept37" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" >
                    </td>
                    <td style="width:60px">
                        <input v-model="concepts.concept38" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');" >
                    </td>
                    <td>
                        <select v-model="concepts.concept39" class="form-control tb-form">
                            <option value=""></option>
                            <option value="0A">0A (ABC600 / 3TC300 + NVP200)</option>
                            <option value="2A">2A (AZT300 / 3TC150 + NVP200)</option>
                            <option value="4A">4A (AZT300 / 3TC150 + EFV600)</option>
                            <option value="5A">5A (TDF300 / 3TC300 + EFV600)</option>
                            <option value="6A">6A (TDF300 / 3TC300 + NVP200)</option>
                            <option value="7A">7A (TDF300 / 3TC300 + ATV/r300/100)</option>
                            <option value="8A">8A (AZT300 / 3TC150 + ATV/r300/100)</option>
                            <option value="9A">9A (ABC600 / 3TC300 + LPV/r200/50)</option>
                            <option value="10A">10A (TDF300 / 3TC300 + LPV/r200/50)</option>
                            <option value="11A">11A (AZT300 / 3TC150 + LPV/r200/50)</option>
                            <option value="12A">12A (DRV600 + r100 + DTG50(+-NRTIs)</option>
                            <option value="13A">13A (TDF300 / 3TC300 / DTG50</option>
                            <option value="14A">14A (ABC600 / 3TC300 + DTG50</option>
                            <option value="15A">15A</option>
                        </select>
                    </td>
                    <td style="width:60px">
                        <input v-model="concepts.concept40" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');">
                    </td>
                    <td style="width:30px">
                        <select v-model="concepts.concept41" class="form-control tb-form" >
                            <option value=""></option>
                            <option value="P">P</option>
                            <option value="G">G</option>
                        </select>
                    </td>

                    <td>
                        <select v-model="concepts.concept42" class="form-control tb-form">
                            <option value=""></option>
                            <option value="C">C (CPT Only)</option>
                            <option value="I">I (IPT Only)</option>
                            <option value="CI">CI (CPT + IPT)</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="concepts.concept43" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');">
                    </td>
                    <td>
                        <input v-model="concepts.concept44" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');">
                    </td>
                    <td>
                        <select v-model="concepts.concept45" class="form-control tb-form">
                            <option value=""></option>
                            <option value="Bled">Bled</option>
                        </select>
                    </td>
                    <td>
                        <select v-model="concepts.concept53" class="form-control tb-form">
                            <option value=""></option>
                            <option value=">"> &gt; </option>
                            <option value="<"> &lt; </option>
                            <option value="=">=</option>
                            <option value="LDL">LDL</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="concepts.concept46" class="form-control tb-form"  type="number" min="0" step="1" oninput="validity.valid||(value='');">
                    </td>
                    <td>
                        <input id="tooltip-button-1" v-model="concepts.concept47" ref="appointmentDate" class="form-control tb-form"  type="date" required>
                        <span>{{ errors.first('Next Visit')}}</span>
                    </td>
                </tr>
                <b-tooltip :show.sync="show" target="tooltip-button-1" placement="top">
                    Visit Date must be before Appointment Date
                </b-tooltip>
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
    import { notificationSystem } from '../../../globals'
    import { networkInterfaces } from 'os';

    export default {
        name: 'VisitDataV7',
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
                if(this.concepts.concept47 <= this.concepts.concept32){
                    this.$toast.error(
                        `Appointment date is before or same as vist date`, 
                        'Error', 
                        notificationSystem.options.error)
                }
                else{
                    this.processDataForPost(true, 'Visit Added')
                }  
            },
            processDataForPost: function (isAddVisit, message)
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

                this.handlePost(payload, message);
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
            handlePost: function (payload, message)
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/observations`;
                let finalPayload = {
                    'patient-card' : this.patientCard.patientCardID,
                    'observations' : payload
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
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                        
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
                    console.log(currentVisitDate, JSON.parse(JSON.stringify(this.patient)))
                    return months
                }
                else{
                    return 0
                }
            },

            assignNextAppointment(currentVisitDate, givenPills){
                const givenPillsInt = parseInt(givenPills)
                const fromDate = new Date(currentVisitDate)

                const nextApponintmentDate = new Date(currentVisitDate) 
                nextApponintmentDate.setDate(fromDate.getDate() + givenPillsInt)

                return nextApponintmentDate.toISOString().split('T')[0]
            },
            calculateMaxStartDate(){
                const today = new Date()
                const max = new Date(today.setDate(today.getDate() + 365))
                return max.toISOString().split('T')[0]
            },
            setMinMax(ref){
                const startDate = localStorage.getItem('startDate')
                let max = this.calculateMaxStartDate()

                if(this.patient.lastStep.step == 'Died'){
                    max = this.patient.lastStep.date
                }

                if(startDate !== ''){
                    this.$refs[ref].setAttribute('min', startDate)
                    this.$refs[ref].setAttribute('max', max)
                }
            }
        },
        data: () => {
            return {
                notificationSystem,
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
                show: false,
                concepts : {
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
                this.processDataForPost(false, 'Saved');
            },
            encounterTypes : function (value) {
                if (value.length > 0)
                {
                    this.getPatientCardDetails()
                }
            },
            patientCardData : function (value) {
                this.fillConceptObservations(value);
                this.setMinMax('visitDate')
                this.setMinMax('appointmentDate')
            },
            'concepts.concept32': function(){
                if(this.concepts.concept32!=='' && this.concepts.concept47!=='')
                    this.show = this.evaluateIfVisitDateBeforeAppointmenttDate(this.concepts.concept32, this.concepts.concept47)
                
                const startDate = localStorage.getItem('startDate')
                
                this.concepts.concept44 = this.calculateMonthsOnART(startDate, this.concepts.concept32)
                
            },
            'concepts.concept47': function(){
                if(this.concepts.concept32!=='' && this.concepts.concept47!=='')
                    this.show = this.evaluateIfVisitDateBeforeAppointmenttDate(this.concepts.concept32, this.concepts.concept47)
            }
        }
    }
</script>
