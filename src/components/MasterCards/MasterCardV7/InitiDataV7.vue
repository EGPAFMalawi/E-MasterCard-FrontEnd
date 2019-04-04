<template>
    <div class="row">
        <div class="col">
            <h3>Status at ART Initiation</h3>
            <br>
            <div>
                <div class="row mb-2">
                    <div class="col-4">HIV-related diseases</div>
                    <div class="col">
                        <input v-model="concepts.concept1" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text" >
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4">Urine LAM / CrAg Result</div>
                    <div class="col">
                        <input v-model="concepts.concept2" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text" >
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col row">
                        <div class="col-4">WHO Stage</div>
                        <div class="col">
                            <select v-model="concepts.concept3" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow" >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="PSHD">PSHD</option>
                            </select>
                        </div>
                    </div>
                    <div class="col row">
                        <div class="col-4">TB Status at Initiation</div>
                        <div class="col">
                            <select v-model="concepts.concept9" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow" >
                                <option value=""></option>
                                <option value="Never > 2yrs">Never > 2yrs</option>
                                <option value="Last 2yrs">Last 2yrs</option>
                                <option value="Curr">Curr</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col row">
                        <div class="col-4">
                            CD4
                        </div>
                        <div class="col row">
                            <div class="col">
                                <h5 style="color: transparent;">PlaceHolder</h5>
                                <input v-model="concepts.concept4" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col row">
                        <div class="col-4">
                            KS
                        </div>
                        <div class="col">
                            <select v-model="concepts.concept10" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow" >
                                <option value=""></option>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col row">
                        <div class="col-4">
                            CD4 Date
                        </div>
                        <div class="col">
                            <input v-model="concepts.concept5" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="date" >
                        </div>
                    </div>
                    <div class="col row">
                        <div class="col-4">Pregnant / Breast feeding</div>
                        <div class="col">
                            <select v-model="concepts.concept11" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow" >
                                <option value=""></option>
                                <option value="N">N</option>
                                <option value="Preg">Preg</option>
                                <option value="Bf">Bf</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col row">
                        <div class="col-4">
                            Height / Wgt
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col-6">
                                    <h5>cm</h5>
                                    <input v-model="concepts.concept6" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="number" >
                                </div>
                                <div class="col-6">
                                    <h5>kg</h5>
                                    <input v-model="concepts.concept7"  class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="number" >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col row">
                        <div class="col-4">
                            Ever taken ARVs
                        </div>
                        <div class="col">
                            <select v-model="concepts.concept12" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow" >
                                <option value=""></option>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col row">
                        <div class="col-4">
                            Age at Init
                        </div>
                        <div class="col">
                            <input v-model="concepts.concept8"  class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="number" >
                        </div>
                    </div>
                    <div class="col row">
                        <div class="col-4">
                            Last ARVs
                        </div>
                        <div class="col">
                            <div>
                                <h5>drug</h5>
                                <input v-model="concepts.concept13" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text" >
                            </div>
                            <div>
                                <h5>date</h5>
                                <input v-model="concepts.concept14" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="date" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <h3>Confirmatory HIV Test before ART Start</h3>
            <br>
            <div>
                <div class="row mb-2">
                    <div class="col-3">Site, HTC Serial No.</div>
                    <div class="col">
                        <input v-model="concepts.concept15" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text" >
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-3">Test Date</div>
                    <div class="col row">
                        <div class="col-6">
                            <input v-model="concepts.concept16" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="date" >
                        </div>
                        <div class="col-6">
                            <select v-model="concepts.concept17" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow" >
                                <option value=""></option>
                                <option value="Rapid">Rapid</option>
                                <option value="PCR">PCR</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-3">
                        <strong>ART</strong> educat. done
                    </div>
                    <div class="col row">
                        <div class="col-6">
                            <select v-model="concepts.concept18" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow" >
                                <option value=""></option>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <h5>
                                Date
                            </h5>
                            <div>
                                <input v-model="concepts.concept19" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="date" >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-3">
                        <strong>TB treatm.</strong>
                    </div>
                    <div class="col row">
                        <div class="col-6">
                            <h5>
                                Reg. No
                            </h5>
                            <div>
                                <input v-model="concepts.concept20" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="text" >
                            </div>
                        </div>
                        <div class="col-6">
                            <h5>
                                Start Date
                            </h5>
                            <div>
                                <input v-model="concepts.concept21" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="date" >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-3">
                        <strong>ART Regimens</strong>
                    </div>
                    <div class="col row">
                        <div class="col-6">
                            <h5>
                                Regimen
                            </h5>
                            <div>
                                <select v-model="concepts.concept22" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow">
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
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <h5>
                                Start Date
                            </h5>
                            <div>
                                <input v-model="concepts.concept23" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="date" >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-3">
                        <strong>Current Regimens</strong>
                    </div>
                    <div class="col row">
                        <div class="col-6">
                            <h5>
                                Regimen
                            </h5>
                            <div>
                                <select v-model="concepts.concept24" class="appearance-none w-full border-2 border-grey bg-white py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-yellow">
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
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <h5>
                                Start Date
                            </h5>
                            <div>
                                <input v-model="concepts.concept25" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="date" >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-6">
                        <strong>Annual BP Screening for 30+ yrs</strong>
                    </div>
                    <div class="col row">
                        <div class="col">
                            <h5>
                                sys
                            </h5>
                            <div>
                                <input v-model="concepts.concept26" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="number" >
                            </div>
                        </div>
                        <div class="col">
                            <h5>
                                dias
                            </h5>
                            <div>
                                <input v-model="concepts.concept27" class=" appearance-none border-2 border-grey rounded w-full py-2 px-2 -darker leading-tight focus:outline-none focus:bg-white focus:border-yellow"  type="number" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

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

                axios.post(dhisAPIEndpoint, payload)
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

                axios.post(dhisAPIEndpoint, payload)
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

                let finalPayload = [];
                finalPayload.push(...payloadForStatus);
                finalPayload.push(...payloadForConfirmatory);

                this.handlePost(finalPayload);
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

                axios.post(dhisAPIEndpoint, finalPayload)
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
                this.fillConceptObservations(value);
            }
        }
    }
</script>
