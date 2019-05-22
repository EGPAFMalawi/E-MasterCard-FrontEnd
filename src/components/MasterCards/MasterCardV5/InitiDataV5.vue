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
                            <label>Sex*</label>
                            <div class="col-sm-10">
                                <b-form-radio v-model="patient.person.gender" name="sex" value="F">Female</b-form-radio>
                                <b-form-radio v-model="patient.person.gender" name="sex" value="M">Male</b-form-radio>
                            </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label >Date of Birth</label>
                        <input type="date" ref="regimenStartDate" class="form-control" v-model="patient.person.birthdate">
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                            <label >Guardian Name</label>
                            <input type="text" class="form-control" placeholder="Name of guardian" v-model="patient.guardianName">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label >Guardian Relation</label>
                        <input type="text" class="form-control" placeholder="Guardian Relation" v-model="patient.guardianRelation">
                    </div>
                    
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label >Patient Phone Number</label>
                        <input type="text" class="form-control" placeholder="Patient" v-model="patient.patientPhone">
                        
                    </div>
                    <div class="col-md-6 mb-3">
                        <label >Guardian Phone Number</label>
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
                            <input type="text" class="form-control" placeholder="Physical Address" v-model="patient.person.personAddress.cityVillage">
                        </div>
                </div>  
                <button class="btn btn-success" @click="updatePatient">UPDATE</button>
                
            </div>
                    </div>

                    <!-- STtus at ARRT Initiation section  -->
                    <div class="card my-4">
                        <div class="card-header">
                            <h5 class="text-align-center">Status at ART Initiation</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-row">
                                        <div class="col-md-12 mb-2">
                                            <label>WHO Clinical Conditions</label>
                                            <select v-model="concepts.concept1" class="form-control">
                                                <option :value="null" disabled>Reasons for ART Start</option>
                                                <option value=""></option>
                                                <option v-for="(condition) in conditions" v-bind:key="condition">{{condition}}</option>
                                            </select>
                                        </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-2">
                                        <label>Cin Stage</label>
                                        <select v-model="concepts.concept3" class="form-control">
                                            <option value=""></option>
                                            <option v-for="(stage) in stages" v-bind:key="stage.name">{{stage.name}}</option>
                                            <option value="PSHD">PSHD</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 mb-2">
                                        <label>TB Status at Initiation</label>
                                        <select class="form-control" v-model="concepts.concept9">
                                            <option :value="null" disabled>Select Status</option>
                                            <option value=""></option>
                                            <option value="Never > 2yrs">Never > 2yrs</option>
                                            <option value="Last 2yrs">Last 2yrs</option>
                                            <option value="Curr">Curr</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-2">
                                        <label >CD4</label>
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
                                                    <label >Pregnant/Breastfeeding</label>
                                                    <select class="form-control" v-model="concepts.concept11">
                                                        <option v-if="patient.person.gender === 'M'" :value="null" disabled>Not Allowed</option>
                                                        <option value=""></option>
                                                        <option v-if="patient.person.gender !== 'M'" value="N">N</option>
                                                        <option v-if="patient.person.gender !== 'M'" value="Preg">Preg</option>
                                                        <option v-if="patient.person.gender !== 'M'" value="Bf">Bf</option>
                                                    </select>
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="col-md-6 mb-2">
                                                <label >Height / Wgt</label>
                                                <div class="form-inline fit-2-input-fields">
                                                        <input v-model="concepts.concept6" type="number" min="0" step="1" oninput="validity.valid||(value='');" class="form-control" placeholder="CM" required>
                                                        <input v-model="concepts.concept7" type="number" step="1" oninput="validity.valid||(value='');" min="0" class="form-control" placeholder="KG" required>
                                                </div>  
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                    <label >Ever taken ARVs</label>
                                                    <select class="form-control" v-model="concepts.concept12">
                                                        <option :value="null" disabled>Y for yes, N for no</option>
                                                        <option value=""></option>
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
                                                            <select class="form-control" v-model="ageType">
                                                                <option value="Months">Months</option>
                                                                <option value="Years">Years</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                <div v-if="concepts.concept12 === 'Y'" class="col-md-6 mb-2">
                                                        <label >Last ARVs (type/date)</label>
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
                                                                <option value="15A">15A</option>
                                                            </select>
                                                            <input ref="regimenStartDate" v-model="concepts.concept14" type="date" class="form-control" required>
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
                                    <label >Test Date</label>
                                    <div class="form-inline fit-2-input-fields">
                                            <input ref="regimenStartDate" v-model="concepts.concept16" type="date" class="form-control">
                                            <select v-model="concepts.concept17" class="form-control" >
                                                <option :value="null" disabled>Rapid or PCR</option>
                                                <option value=""></option>
                                                <option value="Rapid">Rapid</option>
                                                <option value="PCR">PCR</option>
                                            </select>
                                    </div>
                                    <b-form-invalid-feedback v-if="concepts.concept16 !== ''" :state="eval">
                                        Please make sure that the Test date is before the ART regimen start date 
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="eval">
                                        Looks Good. Looks Good. (Coming before ART Regimen start date)
                                    </b-form-valid-feedback>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-12 mb-2">
                                    <label >ART education done</label>
                                    <div class="form-inline fit-2-input-fields">
                                            <select v-model="concepts.concept18" class="form-control" >
                                                <option :value="null" disabled>Y for yes, N for no</option>
                                                <option value=""></option>
                                                <option value="N">N</option>
                                                <option value="Y">Y</option>
                                            </select>
                                            <input ref="regimenStartDate" v-if="concepts.concept18 === 'Y'" v-model="concepts.concept19" type="date" class="form-control" required>
                                    </div>
                                    <b-form-invalid-feedback v-if="concepts.concept19 !== ''" :state="evalEduDate">
                                        Please make sure that the education is before the ART regimen start date 
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="evalEduDate">
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
                                                <option :value="null" disabled>Regimen</option>
                                                <option value=""></option>
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
                                            <input v-model="concepts.concept23" ref="regimenStartDate" type="date" class="form-control" required>
                                    </div>
                                    <b-form-invalid-feedback v-if="concepts.concept16 !== ''" :state="eval">
                                        Please make sure that the Test date is before the ART regimen start date 
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="eval">
                                        Looks Good. (Coming after test date)
                                    </b-form-valid-feedback>
                                    <b-form-invalid-feedback v-if="concepts.concept19 !== ''" :state="evalEduDate">
                                        Please make sure that the education is before the ART regimen start date 
                                    </b-form-invalid-feedback>
                                    <b-form-valid-feedback :state="evalEduDate">
                                        Looks Good. (Coming after ART education date)
                                    </b-form-valid-feedback>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-12 mb-2">
                                    <label >Current Regimens</label>
                                    <div class="form-inline fit-2-input-fields">
                                            <select v-model="concepts.concept24" class="form-control">
                                                <option :value="null" disabled>Regimen</option>
                                                <option value=""></option>
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
                                            <input v-model="concepts.concept25" ref="regimenStartDate" type="date" class="form-control" required>
                                    </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-12 mb-2">
                                    <label >Annual BP Screening for 30+ yrs (sys / dias)</label>
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
    import { notificationSystem } from '../../../globals'

    export default {
        name: 'InitDataV5',
        props : ['encounterTypes', 'postPayload'],
        methods: {
            updatePatient : function ()
            {
                if (this.patient.person.gender === ''){
                    this.$toast.error(`Missing information, sex is required`, 'Error', notificationSystem.options.error)
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
                    };
                    
                    let dhisAPIEndpoint = `${this.APIHosts.art}/patients/${this.patient.patientID}`;

                    authResource().patch(dhisAPIEndpoint, payload)
                        .then(({data: {data}})=>{
                            this.isLoading = false
                            sessionStorage.setItem('patient', JSON.stringify(this.patient))
                            this.$toast.success('Patient details updated!', 'OK', notificationSystem.options.success)
                            
                        })
                        .catch(({response: {data: {errors}, data}}) => {

                            return Object.values(errors).forEach(error => {
                                this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                            });
                                
                        }) 
                }

            },
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
                        this.patientCardData = response.data.data
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
                        this.patientCardData = response.data.data
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            processDataForPost: function (message)
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

                 if(!this.evaluateDateBeforeARTStartDate(this.concepts.concept19, this.concepts.concept23)){
                    return this.$toast.error(`<strong>ART education date</strong> must not be after ART Regimen start`, 'Error', notificationSystem.options.error)
                }
                else if(!this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)){
                    return this.$toast.error(`<strong>ART start date</strong> must not be after ART test date`, 'Error', notificationSystem.options.error)
                }else{
                    let finalPayload = [];
                    finalPayload.push(...payloadForStatus);
                    finalPayload.push(...payloadForConfirmatory);

                    this.handlePost(finalPayload, message);
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
            handlePost: function (payload, message)
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
                for (var i = 0; i < patientCardData.length; i++)
                {
                    this.concepts['concept'+patientCardData[i].concept.conceptID] = patientCardData[i].value
                }
                localStorage.setItem('startDate', this.concepts.concept23)
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
            evaluateDateBeforeARTStartDate(testDate, startDate){
                testDate = new Date(testDate)
                startDate = new Date(startDate)

                if (testDate <= startDate)
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
                return this.stages.filter(({name}) => name === stageName)[0].conditions
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
                patientCardData : [

                ],
                masterCardWithDetails : {},
                conditions:[],
                stages: [
                    {
                        name: 'Clinical stage 1',
                        conditions: ['Asymptomatic', 'Persistent generalized lymphadenopathy']
                    },
                    {
                        name: 'Clinical stage 2',
                        conditions: [ 
                            'Moderate unexplained weight loss (<10% ofpresumed or measured body weight)',
                            'Recurrent respiratory tract infections (sinusitis tonsillitis, otitis media, pharyngitis)', 
                            'Herpes zoster',
                            'Angular cheilitis',
                            'Recurrent oral ulceration',
                            'Papular pruritic eruption',
                            'Fungal nail infections',
                            'Seborrhoeic dermatitis'
                        ]
                    },
                    {
                        name: 'Clinical stage 3',
                        conditions: [
                            'Unexplained severe weight loss (>10% of presumed or measured body weight)',
                            'Unexplained chronic diarrhoea for longer than 1 month',
                            'Unexplained persistent fever (intermittent or constant for longer than 1 month)',
                            'Persistent oral candidiasis',
                            'Oral hairy leukoplakia',
                            'Pulmonary tuberculosis',
                            'Severe bacterial infections (such as pneumonia, empyema, pyomyositis, bone or joint infection, meningitis, bacteraemia)',
                            'Acute necrotizing ulcerative stomatitis, gingivitis or periodontitis',
                            'Unexplained anaemia (<8 g/dl)',
                            'neutropaenia (<0.5 x 109/l) and/or chronic thrombocytopaenia (<50 x 109/l)'
                        ]
                    },
                    {
                        name: 'Clinical stage 4',
                        conditions: [
                            'HIV wasting syndrome',
                            'Pneumocystis (jirovecii) pneumonia',
                            'Recurrent severe bacterial pneumonia',
                            'Chronic herpes simplex infection (orolabial, genital or anorectal of more than 1 month’s duration or visceral at any site)',
                            'Oesophageal candidiasis (or candidiasis of trachea, bronchi or lungs)',
                            'Extrapulmonary tuberculosis',
                            'Kaposi sarcoma',
                            'Cytomegalovirus infection (retinitis or infection of other organs)',
                            'Central nervous system toxoplasmosis',
                            'HIV encephalopathy',
                            'Extrapulmonary cryptococcosis, including meningitis',
                            'Disseminated nontuberculous mycobacterial infection',
                            'Progressive multifocal leukoencephalopathy',
                            'Chronic cryptosporidiosis',
                            'Chronic isosporiasis',
                            'Disseminated mycosis (extrapulmonary histoplasmosis, coccidioidomycosis',
                            'Lymphoma (cerebral or B-cell non-Hodgkin)',
                            'Symptomatic HIV-associated nephropathy or cardiomyopathy',
                            'Recurrent septicaemia (including nontyphoidal Salmonella)',
                            'Invasive cervical carcinoma',
                            'Atypical disseminated leishmaniasis'
                        ]
                    },
                ],
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
                evalEduDate: false,
                ageType: ''
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
                this.processDataForPost('Initiation and Confirmatory Data Saved');
            },
            encounterTypes : function (value) {
                if (value.length > 0)
                {
                    this.getPatientCardStatusAtInitDetails();
                    this.getPatientCardConfirmatoryDetails();
                }
            },
            patientCardData : function (value) {
                this.fillConceptObservations(value);

                this.setMinMax()
            },
            'concepts.concept23': function(){
                this.evalEduDate = this.evaluateDateBeforeARTStartDate(this.concepts.concept19, this.concepts.concept23)

                if (this.patient.person.birthdate === ''){
                    this.patient.person.birthdate = this.calculatedBirthDate() 
                    this.setMinMax()
                }

                this.eval = this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)
            },
            'concepts.concept16': function(){
                this.eval = this.evaluateDateBeforeARTStartDate(this.concepts.concept16, this.concepts.concept23)
            },
            ageType: function(){
                if(this.concepts.concept8 === ''){
                    this.patient.person.birthdate = JSON.parse(sessionStorage.getItem('patient')).person.birthdate;
                }else{
                    this.patient.person.birthdate = this.calculatedBirthDate(this.ageType) 
                }
            },
            'concepts.concept8': function(){
                if(this.concepts.concept8 === ''){
                    this.patient.person.birthdate = JSON.parse(sessionStorage.getItem('patient')).person.birthdate;
                }else{
                    this.patient.person.birthdate = this.calculatedBirthDate(this.ageType) 
                }
            },
            'concepts.concept3': function(){
                this.conditions = this.getConditions(this.concepts.concept3)
            }
        }
    }
</script>
