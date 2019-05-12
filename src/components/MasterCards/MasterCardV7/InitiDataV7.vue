<template>
    <div class="row">
        <div class="card-group">
                    <div class="card my-4">
                        <div class="card-header">
                            <h5 class="text-align-center">Patient / Guardian Details</h5>
                        </div>
                        <div class="card-body reduce-margin-p">
                            <div class="form-row">
                  <div class="col-md-4 mb-3">
                      <label for="validationServer01">Given Name*</label>
                      <input type="text" class="form-control" placeholder="First name" v-model="patient.person.personName.given" required>
                       
                  </div>
                  <div class="col-md-4 mb-3">
                      <label for="validationServer02">Middle Name</label>
                      <input type="text" class="form-control" placeholder="Middle name" v-model="patient.person.personName.middle">

                  </div>
                  <div class="col-md-4 mb-3">
                      <label for="validationServer02">Family Name*</label>
                      <input type="text" class="form-control" placeholder="Last name" v-model="patient.person.personName.family" required>
                  </div>
              </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                        <lable class="col-form-label col-sm-2 pt-0">Sex*</lable>
                        <div class="col-sm-10">
                            <b-form-radio v-model="patient.person.gender" name="sex" value="F">Female</b-form-radio>
                            <b-form-radio v-model="patient.person.gender" name="sex" value="M">Male</b-form-radio>
                        </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationServer03">Date of Birth</label>
                    <input type="date" class="form-control" v-model="patient.person.birthdate">
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                        <label for="validationServer03">Guardian Name</label>
                        <input type="text" class="form-control" placeholder="Name of guardian" v-model="patient.guardianName">
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationServer03">Guardian Relation</label>
                    <input type="text" class="form-control" placeholder="Guardian Relation" v-model="patient.guardianRelation">
                </div>
                
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationServer03">Patient Phone Number</label>
                    <input type="text" class="form-control" placeholder="Patient" v-model="patient.patientPhone">
                    
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationServer03">Guardian Phone Number</label>
                    <input type="text" class="form-control" placeholder="Guardian" v-model="patient.guardianPhone">
                </div>
                
            </div>
             <div class="form-row">
                <div class="col-md-6 mb-3">
                        <label>Agrees to FUP</label>
                        <div class="col-sm-10">
                            <b-form-radio v-model="patient.followUp" name="followUp" value="true">Yes</b-form-radio>
                            <b-form-radio v-model="patient.followUp" name="followUp" value="false">No</b-form-radio>
                        </div>
                </div>
                <div class="col-md-6 mb-3">
                        <label>Physical Address</label>
                        <input type="text" class="form-control" placeholder="Physical Address" v-model="patient.person.personAddress.address1">
                    </div>
            </div>  
                <button class="btn btn-success" type="submit">UPDATE</button>
            
                        </div>
                    </div>
                    <div class="card my-4">
                        <div class="card-header">
                            <h5 class="text-align-center">Status at ART Initiation</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-row">
                                        <div class="col-md-12 mb-2">
                                            <label>HIV Related Diseases</label>
                                            <input v-model="concepts.concept1" type="text" class="form-control" placeholder="HIV Related Diseases">
                                        </div>
                                        <div class="col-md-12 mb-2">
                                            <label>Urine LAM / CrAg Result</label>
                                            <input v-model="concepts.concept2" type="text" class="form-control" placeholder="Urine LAM / CrAg Result">
                                        </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-2">
                                        <label>WHO Stage</label>
                                        <input v-model="concepts.concept3" type="number" class="form-control" placeholder="WHO Stage" required>
                                    </div>
                                    <div class="col-md-6 mb-2">
                                        <label>TB Status at Init</label>
                                        <select class="form-control" v-model="concepts.concept9">
                                            <option :value="null" disabled>Select Status</option>
                                            <option value="Never > 2yrs">Never > 2yrs</option>
                                            <option value="Last 2yrs">Last 2yrs</option>
                                            <option value="Curr">Curr</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-2">
                                        <label for="validationServer03">CD4</label>
                                        <input v-model="concepts.concept4" type="text" class="form-control" placeholder="CD4" required>
                                    </div>
                                    <div class="col-md-6 mb-2">
                                        <label>KS</label>
                                        <select v-model="concepts.concept10" class="form-control" >
                                            <option value=""></option>
                                            <option value="N">N</option>
                                            <option value="Y">Y</option>
                                        </select>
                                    </div>
                                </div>
            
                                         <div class="form-row">
                                            <div class="col-md-6 mb-2">
                                                <label>CD4 Date</label>
                                                <input v-model="concepts.concept5" type="date" class="form-control">
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                    <label for="validationServer03">Pregnant/Breastfeeding</label>
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
                                                <label for="validationServer03">Height / Wgt</label>
                                                <div class="form-inline fit-2-input-fields">
                                                        <input v-model="concepts.concept6" type="text" class="form-control" placeholder="CM" required>
                                                        <input v-model="concepts.concept7" type="text" class="form-control" placeholder="KG" required>
                                                </div>  
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                    <label for="validationServer03">Ever taken ARVs</label>
                                                    <select class="form-control" v-model="concepts.concept12">
                                                        <option :value="null" disabled>Y for yes, N for no</option>
                                                        <option value="N">N</option>
                                                        <option value="Y">Y</option>
                                                    </select>
                                            </div>                      
                                        </div>
            
                                        <div class="form-row">
                                                <div class="col-md-6 mb-2">
                                                        <label for="validationServer03">Age at Initiation</label>
                                                        <input v-model="concepts.concept8" type="number" class="form-control" placeholder="Age" min="1" step="1" oninput="validity.valid||(value='');" required>
                                                    </div>
                                                <div v-if="concepts.concept12 === 'Y'" class="col-md-6 mb-2">
                                                        <label for="validationServer03">Last ARVs (type/date)</label>
                                                        <div class="form-inline fit-2-input-fields">
                                                            <select  class="form-control" v-model="concepts.concept13">
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
                                                            
                                                            <input  v-model="concepts.concept14" type="date" class="form-control" id="validationServer03" required>
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
                                                <div class="form-row">
                                                        <div class="col-md-12 mb-2">
                                                          <label>Site, HTC Serial No.</label>
                                                          <input v-model="concepts.concept15" type="text" class="form-control" placeholder="Site, HTC Serial No."  required>
                                                        </div>
                                                      </div>
                          
                                                      <div class="form-row">
                                                            <div class="col-md-12 mb-2">
                                                                    <label for="validationServer03">Test Date</label>
                                                                    <div class="form-inline fit-2-input-fields">
                                                                            <input v-model="concepts.concept16" type="date" class="form-control">
                                                                            <select v-model="concepts.concept17" class="form-control" >
                                                                                <option :value="null" disabled>Rapid or PCR</option>
                                                                                <option value="Rapid">Rapid</option>
                                                                                <option value="PCR">PCR</option>
                                                                            </select>
                                                                    </div>
                                                                    <b-form-invalid-feedback v-if="concepts.concept16 !== ''" :state="eval">
                                                                        Please make sure that the Test date is before the ART regimen start date 
                                                                    </b-form-invalid-feedback>
                                                                    <b-form-valid-feedback :state="eval">
                                                                        Looks Good.
                                                                    </b-form-valid-feedback>
                                                            </div>
                                                      </div>

                                                      <div class="form-row">
                                                            <div class="col-md-12 mb-2">
                                                                    <label for="validationServer03">ART educatucation done</label>
                                                                    <div class="form-inline fit-2-input-fields">
                                                                            <select v-model="concepts.concept18" class="form-control" >
                                                                                <option :value="null" disabled>Y for yes, N for no</option>
                                                                                <option value="N">N</option>
                                                                                <option value="Y">Y</option>
                                                                            </select>
                                                                            <input v-if="concepts.concept18 === 'Y'" v-model="concepts.concept19" type="date" class="form-control" required>
                                                                    </div>
                                                                    <b-form-invalid-feedback v-if="concepts.concept19 !== ''" :state="evalEduDate">
                                                                        Please make sure that the education is before the ART regimen start date 
                                                                    </b-form-invalid-feedback>
                                                                    <b-form-valid-feedback :state="evalEduDate">
                                                                        Looks Good.
                                                                    </b-form-valid-feedback>
                                                            </div>
                                                      </div>

                                                      <div class="form-row">
                                                            <div class="col-md-12 mb-2">
                                                                    <label for="validationServer03">TB treatment (Reg No. / Start Date)</label>
                                                                    <div class="form-inline fit-2-input-fields">
                                                                            <input v-model="concepts.concept20" type="text" class="form-control" placeholder="Registration Number">
                                                                            <input v-model="concepts.concept21" type="date" class="form-control">
                                                                    </div>
                                                            </div>
                                                      </div>

                                                      <div class="form-row">
                                                            <div class="col-md-12 mb-2">
                                                                    <label for="validationServer03">ART Regimens (Regimen / Start Date)</label>
                                                                    <div class="form-inline fit-2-input-fields">
                                                                            <select v-model="concepts.concept22" class="form-control">
                                                                                <option :value="null" disabled>Regimen</option>
                                                                                <option value="0A">0A</option>
                                                                                <option value="1A">1A</option>
                                                                                <option value="2A">2A</option>
                                                                                <option value="3A">3A</option>
                                                                                <option value="4A">4A</option>
                                                                                <option value="5A">5A</option>
                                                                                <option value="6A">6A</option>
                                                                                <option value="7A">7A</option>
                                                                                <option value="8A">8A</option>
                                                                                <option value="9A">9A</option>
                                                                                <option value="10A">10A</option>
                                                                                <option value="11A">11A</option>
                                                                                <option value="12A">12A</option>
                                                                                <option value="13A">13A</option>
                                                                                <option value="14A">14A</option>
                                                                                <option value="15A">15A</option>
                                                                            </select>
                                                                            <input v-model="concepts.concept23" type="date" class="form-control" required>
                                                                    </div>
                                                                    <b-form-invalid-feedback v-if="concepts.concept16 !== ''" :state="eval">
                                                                        Please make sure that the Test date is before the ART regimen start date 
                                                                    </b-form-invalid-feedback>
                                                                    <b-form-valid-feedback :state="eval">
                                                                        Looks Good.
                                                                    </b-form-valid-feedback>
                                                                    <b-form-invalid-feedback v-if="concepts.concept19 !== ''" :state="evalEduDate">
                                                                        Please make sure that the education is before the ART regimen start date 
                                                                    </b-form-invalid-feedback>
                                                                    <b-form-valid-feedback :state="evalEduDate">
                                                                        Looks Good.
                                                                    </b-form-valid-feedback>
                                                            </div>
                                                      </div>

                                                      <div class="form-row">
                                                            <div class="col-md-12 mb-2">
                                                                    <label for="validationServer03">Current Regimens</label>
                                                                    <div class="form-inline fit-2-input-fields">
                                                                            <select v-model="concepts.concept24" class="form-control">
                                                                                <option :value="null" disabled>Regimen</option>
                                                                                <option value="0A">0A</option>
                                                                                <option value="1A">1A</option>
                                                                                <option value="2A">2A</option>
                                                                                <option value="3A">3A</option>
                                                                                <option value="4A">4A</option>
                                                                                <option value="5A">5A</option>
                                                                                <option value="6A">6A</option>
                                                                                <option value="7A">7A</option>
                                                                                <option value="8A">8A</option>
                                                                                <option value="9A">9A</option>
                                                                                <option value="10A">10A</option>
                                                                                <option value="11A">11A</option>
                                                                                <option value="12A">12A</option>
                                                                                <option value="13A">13A</option>
                                                                                <option value="14A">14A</option>
                                                                                <option value="15A">15A</option>
                                                                            </select>
                                                                            <input v-model="concepts.concept25" type="date" class="form-control" required>
                                                                    </div>
                                                            </div>
                                                      </div>

                                                      <div class="form-row">
                                                            <div class="col-md-12 mb-2">
                                                                    <label for="validationServer03">Annual BP Screening for 30+ yrs (sys / dias)</label>
                                                                    <div class="form-inline fit-2-input-fields">
                                                                            <input v-model="concepts.concept26" type="number" min="0" step="1" oninput="validity.valid||(value='');" class="form-control" placeholder="SYS" required>
                                                                            <input v-model="concepts.concept27" type="number" min="0" step="1" oninput="validity.valid||(value='');" class="form-control" placeholder="DIAS" required>
                                                                    </div>
                                                            </div>
                                                      </div>
                                          </form>
                            </div>
                        </div>  
    
                </div>

    </div>
</template>

<script>
    import authResource from './../../../authResource'
    import { log } from 'util'
    import { type } from 'os'
    import { notificationSystem } from '../../../globals'

    export default {
        name: 'InitDataV7',
        props : ['encounterTypes', 'postPayload'],
        methods: {
            getPatientCardStatusAtInitDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[1].encounterTypeID,
                    'consider-version' : false
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
            getPatientCardConfirmatoryDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[2].encounterTypeID,
                    'consider-version' : false
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
            processDataForPost: function ()
            {   

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

                if(this.evaluateDateBeforeARTStartDate(this.concepts.concept19, this.concepts.concept23)){
                    let finalPayload = [];
                    finalPayload.push(...payloadForStatus);
                    finalPayload.push(...payloadForConfirmatory);

                    this.handlePost(finalPayload);
                }
                else{
                    return this.$toast.error(`<strong>ART education date</strong> must not be after ART Regimen start`, 'Error', notificationSystem.options.error)
                }

                if(this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)){
                    let finalPayload = [];
                    finalPayload.push(...payloadForStatus);
                    finalPayload.push(...payloadForConfirmatory);

                    this.handlePost(finalPayload);
                }else{
                    return this.$toast.error(`<strong>ART start date</strong> must not be after ART test date`, 'Error', notificationSystem.options.error)
                }
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
                        this.patientCardData = [];
                        this.getPatientCardStatusAtInitDetails();
                        this.getPatientCardConfirmatoryDetails();
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            fillConceptObservations: function (patientCardData)
            {
                for (var i = 0; i < patientCardData.length; i++)
                {
                    this.concepts['concept'+patientCardData[i].concept.conceptID] = patientCardData[i].value
                }
                localStorage.setItem('startDate', this.concepts.concept23)
            },
            calculatedBirthDate(){
               const date = new Date(this.concepts.concept23)
               const age = this.concepts.concept8
               const birthYear = date.getFullYear() - age;
               const birthdate = new Date(birthYear.toString())
               return birthdate.toLocaleDateString()
            },
            evaluateDateBeforeARTStartDate(date, startDate){
                date = new Date(date)
                startDate = new Date(startDate)

                if (date <= startDate)
                    return true
                else
                    return false
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
                patientCardData : [

                ],
                masterCardWithDetails : {},
                concepts : {
                    concept1 : '',
                    concept2 : '',
                    concept3 : '',
                    concept4 : '',
                    concept5 : '',
                    concept6 : '',
                    concept7 : '',
                    concept8 : '',
                    concept9 : '',
                    concept10 : '',
                    concept11 : '',
                    concept12 : '',
                    concept13 : '',
                    concept14 : '',
                    concept15 : '',
                    concept16 : '',
                    concept17 : '',
                    concept18 : '',
                    concept19 : '',
                    concept20 : '',
                    concept21 : '',
                    concept22 : '',
                    concept23 : '',
                    concept24 : '',
                    concept25 : '',
                    concept26 : '',
                    concept27 : '',
                },
                eval:false,
                evalEduDate: false
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
            console.log(this.concepts)
            this.concepts = this.concepts
        },
        computed: {
        },
        watch : {
            postPayload : function ()
            {   
                this.processDataForPost();
                
                
            },
            encounterTypes : function (value) {
                if (value.length > 0)
                {
                    this.getPatientCardStatusAtInitDetails();
                    this.getPatientCardConfirmatoryDetails();
                }
            },
            patientCardData : function (value) {
                console.log('hello')
                this.fillConceptObservations(value);
            },
            'concepts.concept23': function(){
                this.evalEduDate = this.evaluateDateBeforeARTStartDate(this.concepts.concept19, this.concepts.concept23)
                
                if (this.patient.person.birthdate === '')
                    this.patient.person.birthdate = this.calculatedBirthDate()    

                this.eval = this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)
            },
            'concepts.concept16': function(){
                this.eval = this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)
            },
            'concepts.concept19': function(){
                this.evalEduDate = this.evaluateDateBeforeARTStartDate(this.concepts.concept19, this.concepts.concept23)
            }
        }
    }
</script>
