<template>
<div>
    <div class="row">
        <div class="card-group">
            <div class="card my-4">
            <div class="card-header">
                <h5 class="text-align-center">Patient / Guardian Details</h5>
            </div>
            <div class="card-body reduce-margin-p">
                <form v-on:submit.prevent="updatePatient">

                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationServer01">Given Name*</label>
                            <input type="text" class="form-control" placeholder="First name" 
                                pattern="^[a-zA-Z']+$" title="Name cannot have numbers or symbols." 
                                :class="{'is-invalid':!gnameAlphanumericValidation && patient.person.personName.given !== ''}"
                            v-model="patient.person.personName.given" required>
                            <b-form-invalid-feedback v-if="patient.person.personName.given !== ''" :state="gnameAlphanumericValidation">
                                Name cannot have numbers or symbols.
                            </b-form-invalid-feedback>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationServer02">Middle Name</label>
                            <input type="text" class="form-control" placeholder="Middle name"
                            pattern="^[a-zA-Z']+$" title="Name cannot have numbers or symbols." 
                            :class="{'is-invalid':!mnameAlphanumericValidation && patient.person.personName.middle !== ''}"
                            v-model="patient.person.personName.middle">
                            <b-form-invalid-feedback v-if="patient.person.personName.middle !== ''" :state="mnameAlphanumericValidation">
                                Name cannot have numbers or symbols.
                            </b-form-invalid-feedback>

                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationServer02">Family Name*</label>
                            <input type="text" class="form-control" placeholder="Last name" 
                                pattern="^[a-zA-Z']+$" title="Name cannot have numbers or symbols." 
                                :class="{'is-invalid':!fnameAlphanumericValidation && patient.person.personName.family !== ''}"
                                v-model="patient.person.personName.family">
                            <b-form-invalid-feedback v-if="patient.person.personName.family !== ''" :state="fnameAlphanumericValidation">
                                Name cannot have numbers or symbols.
                            </b-form-invalid-feedback>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                                <label>Sex*</label>
                                <div class="input-group pt-1">
                                    <b-form-radio v-model="patient.person.gender" name="sex" value="F">Female</b-form-radio>
                                    <span style="padding: 5px"></span>
                                    <b-form-radio v-model="patient.person.gender" name="sex" value="M">Male</b-form-radio>
                                </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label >Date of Birth</label>
                            <input type="date" ref="regimenStartDate" class="form-control" v-model="patient.person.birthdate">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label></label>
                            <div class="input-group pt-1" v-if="showEstimateButton">
                                <button @click="estimateDOB" class="btn btn-outline-primary my-1 btn-sm">Estimate DoB</button>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <label>Physical Address</label>
                            <input type="text" class="form-control" placeholder="Physical Address" v-model="patient.person.personAddress.cityVillage">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                                <label >Guardian Name</label>
                                <input type="text" class="form-control" placeholder="Name of guardian" 
                                pattern="^[a-zA-Z'\s]+$" title="Name cannot have numbers or symbols."
                                :class="{'is-invalid':!guardnameAlphanumericValidation && patient.guardianName !== ''}"
                                    v-model="patient.guardianName">
                                <b-form-invalid-feedback v-if="patient.guardianName !== ''" :state="guardnameAlphanumericValidation">
                                    Name cannot have numbers or symbols.
                                </b-form-invalid-feedback>
                                
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label>Patient Phone Number</label>
                            <input type="text" class="form-control" placeholder="Patient" v-model="patient.patientPhone" :class="{'is-invalid': (patient.patientPhone !== '' && !patientPhoneValidation)}"  id="patient-phone">
                            <b-form-invalid-feedback v-if="patient.patientPhone !== ''" :state="patientPhoneValidation">
                                Phone Number must be 10 characters long and Start with 0
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="patientPhoneValidation">
                                Looks Good.
                            </b-form-valid-feedback>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label >Guardian Phone Number</label>
                            <input type="text" class="form-control" placeholder="Guardian" v-model="patient.guardianPhone" :class="{'is-invalid': (patient.guardianPhone !== '' && !guardianPhoneValidation)}" id="guardian-phone">
                            <b-form-invalid-feedback v-if="patient.guardianPhone !== ''" :state="guardianPhoneValidation">
                                Phone Number must be 10 characters long and Start with 0
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="guardianPhoneValidation">
                                Looks Good.
                            </b-form-valid-feedback>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                                <label>Agrees to FUP</label>
                                <div class="input-group pt-1">
                                    <b-form-radio v-model="patient.followUp" name="followUp" value="true">Yes</b-form-radio>
                                    <span style="padding: 10px"></span>
                                    <b-form-radio v-model="patient.followUp" name="followUp" value="false">No</b-form-radio>
                                </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label >Guardian Relation</label>
                            <select class="form-control" v-model="patient.guardianRelation">
                                <option :value="null" disabled>Select Relation</option>
                                <option value="Parent">Parent</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Relative">Relative</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                    </div> 
                     <div class="form-row" v-if="isMDF">
                        <div class="col-12 mb-3">
                            <label>Is patient a solder?</label>
                            <div class="input-group pt-1">
                                <b-form-radio v-model="patient.soldier" name="isSoldier" value="1">Yes, Patient is a is a Soldier</b-form-radio>
                                <span style="padding: 10px"></span>
                                <b-form-radio v-model="patient.soldier" name="isSoldier" value="0">No, Patient is a civilian</b-form-radio>
                            </div>
                        </div>
                    </div> 
                    <button class="btn btn-outline-success" type="submit" >UPDATE</button>
                </form>
                
            </div>
        </div>
        <!-- Patient Details end here -->

        <!-- Status at ART Initiation starts -->
        <div class="card my-4">
            <div class="card-header">
                <h5 class="text-align-center">Status at ART Initiation</h5>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-row">
                            <div class="col-md-12 mb-2">
                                <label>HIV Related Diseases</label>
                                <multi-select :options="conditions"
                                        :selected-options="selectedConditions"
                                        placeholder="select items"
                                        @select="onSelect">
                                </multi-select>
                            </div>
                            <div class="col-md-12 mb-2 is-disabled-section">
                                <label>Urine LAM / CrAg Result</label>
                                <select v-model="concepts.concept2" class="form-control" disabled>
                                    <option :value="null" disabled>Positive or Negative</option>
                                    <option value="Blank">Blank</option>
                                    <option value="Positive">Positive(+)</option>
                                    <option value="Negative">Negative(-)</option>
                                </select>
                            </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-2">
                            <label>WHO Stage</label>
                            <select v-model="concepts.concept3" class="form-control">
                                <option :value="null" disabled>Select WHO stage</option>
                                <option value="Blank">Blank</option>
                                <option value="Clinical Stage 1">Clinical Stage 1</option>
                                <option value="Clinical Stage 2">Clinical Stage 2</option>
                                <option value="Clinical Stage 3">Clinical Stage 3</option>
                                <option value="Clinical Stage 4">Clinical Stage 4</option>
                                <option value="PSHD">PSHD</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-2">
                            <label>TB Status at Init</label>
                            <select class="form-control" v-model="concepts.concept9">
                                <option :value="null" disabled>Select Status</option>
                                <option value="Blank">Blank</option>
                                <option value="Never > 2yrs">Never > 2yrs</option>
                                <option value="Last 2yrs">Last 2yrs</option>
                                <option value="Curr">Curr</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-2">
                            <label>CD4</label>
                            <input v-model="concepts.concept4" type="number"  pattern="[0-9]" class="form-control" placeholder="CD4" min="1" max="1200" @keyup="validateCD4" @change="validateCD4" @blur="clearField(isCD4Valid, 'concept4')" required>
                            <b-form-invalid-feedback v-if="isCD4Valid" :state="!isCD4Valid">
                                Invalid CD4 value
                            </b-form-invalid-feedback> 
                        </div>
                        <div class="col-md-6 mb-2">
                            <label>KS</label>
                            <select v-model="concepts.concept10" class="form-control" >
                                <option value="Blank">Blank</option>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-6 mb-2">
                            <label>CD4 Date</label>
                            <input v-model="concepts.concept5" type="date" ref="regimenStartDate" class="form-control" @keyup="validateCD4Date" @change="validateCD4Date" @focus="setCD4MinMaxDate" @click="setCD4MinMaxDate" @blur="clearField(isCD4DateValid, 'concept5')">
                            <b-form-invalid-feedback v-if="isCD4DateValid" :state="!isCD4DateValid">
                                Invalid Date
                            </b-form-invalid-feedback> 
                        </div>
                        <div class="col-md-6 mb-2" v-if="patient.person.gender !== 'M'">
                                <label >Pregnant/Breastfeeding</label>
                                <select class="form-control" v-model="concepts.concept11">
                                    <option v-if="patient.person.gender === 'M'" :value="null" disabled>Not Allowed</option>
                                    <option v-if="patient.person.gender !== 'M'" value="N">N</option>
                                    <option v-if="patient.person.gender !== 'M'" value="Preg">Preg</option>
                                    <option v-if="patient.person.gender !== 'M'" value="Bf">Bf</option>
                                </select>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-6 mb-2">
                            <label>Height(cm) &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Wgt(Kg)</label>
                            <div class="form-inline fit-2-input-fields">
                                    <input v-model="concepts.concept6" type="number" min="50" max="200" class="form-control" @change="validateHeight" @keyup="validateHeight" @blur="clearField(isHeightValid, 'concept6')" step="any" required>
                                    <input v-model="concepts.concept7" type="number" min="5" max="200" class="form-control" @change="validateWeight" @keyup="validateWeight" @blur="clearField(isWeightValid, 'concept7')" step="any" required>
                            </div>
                            <b-form-invalid-feedback v-if="isHeightValid" :state="!isHeightValid">
                                Height outside range of (50 - 200)
                            </b-form-invalid-feedback> 
                            <b-form-invalid-feedback v-if="isWeightValid" :state="!isWeightValid">
                                Weight outside range of (5 - 200)
                            </b-form-invalid-feedback>
                        </div>
                        <div class="col-md-6 mb-2">
                                <label >Ever taken ARVs</label>
                                <select class="form-control" v-model="concepts.concept12">
                                    <option :value="null" disabled>Y for yes, N for no</option>
                                    <option value="Blank">Blank</option>
                                    <option value="N">N</option>
                                    <option value="Y">Y</option>
                                </select>
                        </div>                      
                    </div>

                    <div class="form-row">
                        <div class="col-md-6 mb-2">
                            <label >Age at Initiation</label>
                            <div class="form-inline fit-2-input-fields">
                            <input v-model="concepts.concept8" type="number" min="1" step="1" oninput="validity.valid||(value='');" class="form-control" placeholder="Age" required>
                                <select class="form-control" v-model="concepts.concept54">
                                    <option value="Months">Months</option>
                                    <option value="Years">Years</option>
                                </select>`
                            </div>
                                <!-- <button v-on:click="estimateAgeAtInitiation" class="btn btn-outline-primary my-1">Estimate</button> -->
                        </div>
                        <div v-if="concepts.concept12 === 'Y'" class="col-md-6 mb-2">
                            <label >Last ARVs (type/date)</label>
                            <div class="form-inline fit-2-input-fields">
                                <select  class="form-control" v-model="concepts.concept13">
                                    <option value="Blank">Blank</option>
                                    <option v-for="regimen in regimens" v-bind:key="regimen.value" :value="regimen.value">{{regimen.title}}</option>
                                </select>
                                
                                <input  v-model="concepts.concept14" type="date" ref="regimenStartDate" class="form-control no-padding" required>
                            </div>
                        </div> 
                    </div>
                </form>
            </div>
        </div>

        <div class="card my-4">
            <div class="card-header">
                <h5 class="text-align-center">Confirmatory HIV Test before ART Start</h5>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-row is-disabled-section">
                        <div class="col-md-12 mb-2">
                            <label>Site, HTC Serial No.</label>
                            <input v-model="concepts.concept15" type="text" class="form-control" placeholder="Site, HTC Serial No."  disabled>
                        </div>
                    </div>

                        <div class="form-row">
                            <div class="col-md-12 mb-2">
                                    <label >Test Date</label>
                                    <div class="form-inline fit-2-input-fields">
                                            <input @click="setTestDateMinMax" @focus="setTestDateMinMax" @keyup="validateTestDate" v-model="concepts.concept16" type="date" class="form-control" :class="{'is-invalid': isTestDateValid}">
                                            <select v-model="concepts.concept17" class="form-control">
                                                <option :value="null" disabled>Rapid or PCR</option>
                                                <option value="Blank">Blank</option>
                                                <option value="Rapid">Rapid</option>
                                                <option value="PCR">PCR</option>
                                            </select>
                                            <b-form-invalid-feedback :state="!isTestDateValid || eval">
                                                INVALID DATE! the Test date must be before the ART regimen start date
                                            </b-form-invalid-feedback>
                                            <!-- <b-form-invalid-feedback v-if="concepts.concept16 !== ''" :state="eval">
                                                Please make sure that the Test date is before the ART regimen start date 
                                            </b-form-invalid-feedback> -->
                                    </div>
                                    <!-- <b-form-valid-feedback :state="eval">
                                        Looks Good. (Coming before ART Regimen start date)
                                    </b-form-valid-feedback> -->
                            </div>
                        </div>

                        <div class="form-row is-disabled-section">
                            <div class="col-md-12 mb-2">
                                    <label >ART education done</label>
                                    <div class="form-inline fit-2-input-fields">
                                            <select v-model="concepts.concept18" class="form-control" disabled>
                                                <option :value="null" disabled>Y for yes, N for no</option>
                                                <option value="Blank">Blank</option>
                                                <option value="N">N</option>
                                                <option value="Y">Y</option>
                                            </select>
                                            <input @click="setTestDateMinMax" @focus="setTestDateMinMax"  @keyup="validateEduDate" v-if="concepts.concept18 === 'Y'" v-model="concepts.concept19" type="date" class="form-control" :class="{'is-invalid': isEduDateValid}" disabled>
                                    </div>
                                    <b-form-invalid-feedback v-if="concepts.concept19 !== '' && concepts.concept18 === 'Y'" :state="evalEduDate">
                                        Please make sure that the education is before the ART regimen start date 
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback v-if="concepts.concept18 === 'Y'" :state="evalEduDate">
                                        Looks Good. (Coming before ART Regimen start date)
                                    </b-form-valid-feedback>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-12 mb-2">
                                    <label >TB treatment (Reg No. / Start Date)</label>
                                    <div class="form-inline fit-2-input-fields">
                                            <input v-model="concepts.concept20" type="text" class="form-control" placeholder="Registration Number">
                                            <input v-model="concepts.concept21" ref="regimenStartDate" type="date" class="form-control">
                                    </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-12 mb-2">
                                    <label >ART Regimens (Regimen / Start Date)</label>
                                    <div class="form-inline fit-2-input-fields">
                                            <select v-model="concepts.concept22" class="form-control">
                                                <option :value="null" disabled>Select Regimen</option>
                                                <option value="Blank">Blank</option>
                                                <option v-for="regimen in regimens" v-bind:key="regimen.value" :value="regimen.value">{{regimen.title}}</option>
                                            </select>
                                            <input v-model="concepts.concept23" @click="setStartDateMinMax" @focus="setStartDateMinMax" @keyup="validateStartDate" min="2000-01-01" ref="regimenStartDate" type="date" class="form-control" :class="{'is-invalid': isStartDateValid}">
                                    </div>
                                    <b-form-invalid-feedback v-if="concepts.concept16 !== ''" :state="eval">
                                        Please make sure that the Test date is before the ART regimen start date 
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="eval">
                                        Looks Good. (Coming after test date)
                                    </b-form-valid-feedback>
                                    <b-form-invalid-feedback v-if="concepts.concept19 !== '' && concepts.concept18 === 'Y'" :state="evalEduDate">
                                        Please make sure that the education is before the ART regimen start date 
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback v-if="concepts.concept18 === 'Y'" :state="evalEduDate">
                                        Looks Good. (Coming after ART education date)
                                    </b-form-valid-feedback>
                            </div>
                        </div>

                        <div class="form-row is-disabled-section">
                            <div class="col-md-12 mb-2">
                                    <label >Annual BP Screening for 30+ yrs (sys / dias)</label>
                                    <div class="form-inline fit-2-input-fields">
                                            <input v-model="concepts.concept26" type="number" min="0" step="1" oninput="validity.valid||(value='');" class="form-control" placeholder="SYS" required disabled>
                                            <input v-model="concepts.concept27" type="number" min="0" step="1" oninput="validity.valid||(value='');" class="form-control" placeholder="DIAS" required disabled>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
            
        </div>
    </div>
    <div class="d-flex justify-content-end pl-0">
        <button @click="updateInitConfData" class="btn btn-success btn-lg my-4 ml-2">
            Update Data
            <font-awesome-icon icon="save" class="ml-1"/>
        </button>
    </div>
</div>
</template>

<script>
    import {authResource} from './../../../authResource'
    import { MultiSelect } from 'vue-search-select'
    import { notificationSystem, setMinDate, setMaxDate, validateDate, matchString, compareDates } from '../../../globals'
    import { mapGetters, mapActions } from 'vuex' 

    export default {
        name: 'InitDataV7',
        props : ['encounterTypes', 'postPayload', 'patient', 'patientCard', 'autofill'],
        components: { MultiSelect },
        methods: {
            ...mapActions([
                'selectPatient', 
                'patchPatient', 
                'loadPatientCardData',
                'resetPatientCardData',
                'loadARTstartDate',
                'setTestDate',
                'setStartDate',
                'setRegStartDate'
            ]),
            updatePatient (){
                if (this.patient.person.gender === ''){
                    this.$toast.error(
                        `Missing information, sex is required`, 
                        'Error', 
                        notificationSystem.options.error
                    )
                } else{
                    let payload = {
                        art_number : this.patient.art_number,
                        given_name : this.patient.person.personName.given,
                        middle_name : this.patient.person.personName.middle,
                        family_name : this.patient.person.personName.family,
                        gender : this.patient.person.gender,
                        birthdate : this.patient.person.birthdate,
                        guardian_name : this.patient.guardianName,
                        patient_phone : this.patient.patientPhone,
                        guardian_phone : this.patient.guardianPhone,
                        follow_up : this.patient.follow_up,
                        guardian_relation : this.patient.guardianRelation,
                        city_village :  this.patient.person.personAddress.cityVillage,
                        region : this.region,
                        subregion : this.subregion,
                        soldier: parseInt(this.patient.soldier)
                    };
                    
                    let endpoint = `${this.APIHosts.art}/patients/${this.patient.patientID}`;
                    this.patchPatient({endpoint, payload})
                        .then((message)=>{
                            this.isLoading = false
                            this.$toast.success(message, 'OK', notificationSystem.options.success)
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
                }

            },
            getPatientCardStatusAtInitDetails (){
                const url= `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                const payload = {
                    'encounter-type' : this.encounterTypes[1].encounterTypeID,
                    'consider-version' : false
                };
                this.loadPatientCardData({url, payload})
                    .then(data => {
                        if (data.length < 1){
                            this.resetPatientCardData()
                        }
                    })
                    .catch(error => console.error(error))

            },
            getPatientCardConfirmatoryDetails (){
                const url = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                const payload = {
                    'encounter-type' : this.encounterTypes[2].encounterTypeID,
                    'consider-version' : false
                };
                this.loadPatientCardData({url, payload})
                    .then(data => console.info(data))
                    .catch(error => console.error(error))
            },
            updateInitConfData(e){
                e.preventDefault()
                this.processDataForPost('Initiation and Confirmatory Data Saved');
            },
            processDataForPost(message){   

                let payloadForStatus = this.encounterTypes[1].concepts.map((item)=>{
                    return {
                        'concept' : item.conceptID,
                        'encounter-type' : this.encounterTypes[1].encounterTypeID,
                        'value' : this.concepts['concept'+item.conceptID],
                        'observation' : this.getObservation(item.conceptID)
                    }
                });

                let payloadForConfirmatory = this.encounterTypes[2].concepts.map((item)=>{
                    return {
                        'concept' : item.conceptID,
                        'encounter-type' : this.encounterTypes[2].encounterTypeID,
                        'value' : this.concepts['concept'+item.conceptID],
                        'observation' : this.getObservation(item.conceptID)
                    }
                });

                // if (this.concepts.concept18 === 'Y')
                // {
                //     if(this.concepts.concept19 === ''){
                //         //accept ART education done if Y but date is null
                //     }
                //     else if(!this.evaluateDateBeforeARTStartDate(this.concepts.concept19, this.concepts.concept23)){
                //         return this.$toast.error(`<strong>ART education date</strong> must not be after ART Regimen start`, 'Error', notificationSystem.options.error)
                //     }
                // }

                // if(!this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)){
                //     return this.$toast.error(
                //         `<strong>ART start date</strong> must not be after ART test date`, 
                //         'Error', 
                //         notificationSystem.options.error
                //     )
                // }else{
                    let finalPayload = [];
                    finalPayload.push(...payloadForStatus);
                    finalPayload.push(...payloadForConfirmatory);

                    this.handlePost(finalPayload, message);
                // }
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
                    'observations' : payload
                };
                authResource().post(dhisAPIEndpoint, finalPayload)
                    .then((response)=>{
                        this.resetPatientCardData()
                        this.getPatientCardStatusAtInitDetails();
                        this.getPatientCardConfirmatoryDetails();
                        this.selectPatient(this.patient)
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
            fillConceptObservations(patientCardData){
                patientCardData.map(({concept: {conceptID}, value}, key) => {
                    this.concepts[`concept${conceptID}`] = value
                })

                if (this.concepts.concept1 !== null) 
                    this.selectedConditions = JSON.parse(this.concepts.concept1)

                this.loadARTstartDate(this.concepts.concept23)
            },
            calculatedBirthDate(ageType){
               const date = new Date(this.concepts.concept23)
               const age = this.concepts.concept8

               if (ageType === 'Years'){
                    const birthYear = date.getFullYear() - age
                    const birthdate = new Date(birthYear.toString())
                    return birthdate.toISOString().split('T')[0]
               }else if(ageType === 'Months'){
                    date.setMonth(date.getMonth() - age);
                    return date.toISOString().split('T')[0]
               }
               
            },
            calculatedAgeAtInit(ageType){
                const date = new Date(this.concepts.concept23)
                const age = this.concepts.concept8

                if (ageType === 'Years'){
                    const birthYear = date.getFullYear() - age
                    const birthdate = new Date(birthYear.toString())
                    return birthdate.toISOString().split('T')[0]
                }else if(ageType === 'Months'){
                    date.setMonth(date.getMont() - age);
                    return date.toISOString().split('T')[0]
                }

            },
            evaluateDateBeforeARTStartDate(date, startDate){
                date = new Date(date)
                startDate = new Date(startDate)

                if (date <= startDate)
                    return true
                else
                    return false
            },
            calculateMaxStartDate(){
                const today = new Date()
                const max = new Date(today.setDate(today.getDate() + 365))
                return max.toISOString().split('T')[0]
            },

            setMinMax(){
                if(this.patient.person.birthdate !== ''){
                    this.$refs.regimenStartDate.setAttribute('min', this.patient.person.birthdate)
                    this.$refs.regimenStartDate.setAttribute('max', this.calculateMaxStartDate())
                }
            },
            getConditions(stageName){
                return (stageName !== null) ? 
                    this.stages.filter(({name}) => name === stageName)[0].conditions :
                    []
            },
            onSelect(conditions, lastSelectCondition){
                if(this.concepts.concept3 === '' || this.concepts.concept3 === null){
                    this.concepts.concept3 = "Clinical Stage 1"
                }
                this.selectedConditions = conditions
                this.lastSelectCondition = lastSelectCondition
                this.concepts.concept1 = JSON.stringify(this.selectedConditions)
                const numArray = conditions.map(({stage}) => stage )

                this.concepts.concept3 = `Clinical Stage ${Math.max.apply(null, numArray)}`
            },
            handleAgeEstimation(){
                if ((this.concepts.concept8 == null || this.concepts.concept8 == '')
                    && this.patient.person.birthdate !== null
                    && this.concepts.concept23 !== null
                    )
                {
                    let startDateObj = new Date(this.concepts.concept23)
                    let birthDateObj = new Date(this.patient.person.birthdate)

                    const startYear = startDateObj.getFullYear()
                    const birthYear = birthDateObj.getFullYear()
                    this.concepts.concept8 =  startYear - birthYear
                    this.concepts.concept54 = 'Years'
                }
            },
            estimateDOB(e){
                e.preventDefault()
                if((this.concepts.concept8 !== '' || this.concept.concept8 !== null )
                    && this.patient.person.birthdate === ''){
                    this.patient.person.birthdate = this.calculatedBirthDate(this.concepts.concept54)
                }
            },
            toggleAgeEstimateButton(){
                if ((this.patient.person.birthdate === '' || this.patient.person.birthdate === null) 
                    && (this.concepts.concept8  && this.concepts.concept8.length > 0))
                {
                    this.showEstimateButton = true
                }
                else
                    this.showEstimateButton = false
            },
            setTestDateMinMax(e){
                if (compareDates(new Date(this.patient.person.birthdate), new Date('2000-01-01')))
                    setMinDate(e, this.patient.person.birthdate)
                else{
                    setMinDate(e, '2000-01-01')
                }
                setMaxDate(e)
            },
            setStartDateMinMax(e){
                if (compareDates(new Date(this.patient.person.birthdate), new Date('2000-01-01')))
                    setMinDate(e, this.patient.person.birthdate)
                else{
                    setMinDate(e, '2000-01-01')
                }
                setMaxDate(e)
            },
            setCD4MinMaxDate(e){
                if(this.concepts.concept16 !== ''){
                    setMinDate(e, this.concepts.concept16)
                }
                else if (compareDates(new Date(this.patient.person.birthdate), new Date('2001-01-01'))){
                    setMinDate(e, this.patient.person.birthdate)
                }else{
                    setMinDate(e, '2001-01-01')
                }
                setMaxDate(e)
            },
            validateTestDate(e){
                this.isTestDateValid = validateDate(e)
            },
            validateEduDate(e){
                this.isEduDateValid = validateDate(e)
            },
            validateStartDate(e){
                this.isStartDateValid = validateDate(e)
            },
            validateWeight(e){
                this.isWeightValid = validateDate(e)
                if (validateDate(e)){
                    e.target.classList.add('is-invalid-custom')
                }else{
                    e.target.classList.remove('is-invalid-custom')
                }
            },
            validateHeight(e){
                this.isHeightValid = validateDate(e)
                if (this.isHeightValid){
                    e.target.classList.add('is-invalid-custom')
                }else{
                    e.target.classList.remove('is-invalid-custom')
                }
            },
            validateCD4(e){
                this.isCD4Valid = validateDate(e)
                if (this.isCD4Valid){
                    e.target.classList.add('is-invalid-custom')
                }else{
                    e.target.classList.remove('is-invalid-custom')
                }
            },
            validateCD4Date(e){
                this.isCD4DateValid = validateDate(e)
                if (this.isCD4DateValid){
                    e.target.classList.add('is-invalid-custom')
                }else{
                    e.target.classList.remove('is-invalid-custom')
                }
            },
            clearField(isInvalid, concept, isConcept = true){
                if (isInvalid && isConcept){
                    this.concepts[concept] = ''
                }
            },

        },
        data: () => {
            return {
                notificationSystem,
                BASE_URL : 'patients',
                eval:null, //turns to boolean when evaluating 
                evalEduDate: null, // turns to boolean when evaluating
                showEstimateButton: false,
                selectedConditions: [],
                lastSelectCondition: {},
                concepts : {
                    concept1 : null,
                    concept2 : '',
                    concept3 : '',
                    concept4 : '',
                    concept5 : '',
                    concept6 : '',
                    concept7 : '',
                    concept8 : '', // age at initiation
                    concept9 : '', // age period
                    concept10 : '',
                    concept11 : '',
                    concept12 : '',
                    concept13 : '',
                    concept14 : '',
                    concept15 : '',
                    concept16 : '', //test date
                    concept17 : '',
                    concept18 : '',
                    concept19 : '',
                    concept20 : '',
                    concept21 : '',
                    concept22 : '', 
                    concept23 : '', // ART start date
                    concept24 : '',
                    concept25 : '',
                    concept26 : '',
                    concept27 : '',
                    concept54 : ''
                },
                isTestDateValid: false,
                isEduDateValid: false,
                isStartDateValid: false,
                isHeightValid: false,
                isWeightValid: false,
                isCD4DateValid: false,
                isCD4Valid: false
            }
        },
        created(){
            this.fillConceptObservations(this.patientCardData)
            
            this.toggleAgeEstimateButton()

            this.concepts.concept23 = this.autofill.dateOfFirstStartingART || ''
            this.concepts.concept8 = this.autofill.ageAtARTInit || ''
            this.concepts.concept54 = this.autofill.period || ''
        },
        watch: {
            encounterTypes : function (value) {
                if (value.length > 0)
                {
                    this.getPatientCardStatusAtInitDetails();
                    this.getPatientCardConfirmatoryDetails();
                }
            },
            patientCardData : function (value) {
                this.fillConceptObservations(value)
                
                if (this.concepts.concept1 !== null)
                    this.selectedConditions = JSON.parse(this.concepts.concept1)

                this.setMinMax()
            },
            'concepts.concept23': function(value){
                this.evalEduDate = this.evaluateDateBeforeARTStartDate(this.concepts.concept19, this.concepts.concept23)
                
                if (this.patient.person.birthdate === ''){
                    this.setMinMax()
                }
                this.setStartDate(this.concepts.concept23)      
                this.eval = this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)
            },
            'concepts.concept16': function (value){
                this.eval = this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)
                this.setTestDate(value)
            },
            'concepts.concept19': function(){
                this.evalEduDate = this.evaluateDateBeforeARTStartDate(this.concepts.concept19, this.concepts.concept23)
            },
            'concepts.concept8': function(){
                this.toggleAgeEstimateButton()
            },
            
        },
        computed: {
            ...mapGetters(['patientCardData', 'stages', 'conditions', 'isMDF', 'startDate', 'regimens']),
            gnameAlphanumericValidation(){
                return matchString(this.patient.person.personName.given)
            },
            fnameAlphanumericValidation(){
                return matchString(this.patient.person.personName.family)
            },
            mnameAlphanumericValidation(){
                return matchString(this.patient.person.personName.middle)
            },
            guardnameAlphanumericValidation(){
                return matchString(this.patient.guardianName)
            },
            patientPhoneValidation() {
                if (this.patient.patientPhone == null)
                    return true
                return this.patient.patientPhone !== '' && this.patient.patientPhone.length === 10 && (new RegExp("^((0)[0-9]{9})$")).test(this.patient.patientPhone)
            },
            guardianPhoneValidation() {
                if (this.patient.guardianPhone == null)
                    return true
                return this.patient.guardianPhone !== '' && this.patient.guardianPhone.length === 10 && (new RegExp("^((0)[0-9]{9})$")).test(this.patient.guardianPhone)
            },
        }
    }
</script>
