<template>
    <div>
        <div class="container-fluid py-4">
            <div class="row mb-3">
                <div class="col-5">
                    <h2>ART Patient Card ARV Formulations</h2>
                    Version 5
                    <br>
                    <div class="py-2 my-1 px-4 pl-10 shadow rounded bg-yellow-darker text-white font-bold" style="display: inline-block;margin-left:-30px">
                        Yellow Card
                    </div>
                </div>
                <div class="col">
                    <RegistrationDataV5 :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload"></RegistrationDataV5>
                </div>
            </div>
            <div class="my-4"></div>
            <div class="row shadow-8 border-2 border-yellow rounded p-2 m-4">
                <div class="col-3">
                    <h3>Patient / Guardian Details</h3>
                    <br>
                    <div>
                        <div class="row mb-2">
                            <div class="col-3 font-bold">Patient Name</div>
                            <div class="col">
                                {{ patient.person.personName.given+' '+patient.person.personName.middle+' '+patient.person.personName.family}}
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-3 font-bold">Sex, Birth Date</div>
                            <div class="col">
                                <div class="row">
                                    <div class="col-3">
                                        {{ patient.person.gender }}
                                    </div>
                                    <div class="col">
                                        <h5>
                                            DOB
                                        </h5>
                                        <div>
                                            {{ patient.person.birthdate }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-3 font-bold">
                                Physical Address
                            </div>
                            <div class="col">
                                {{ patient.person.personAddress.cityVillage}}
                                <br>
                                {{ patient.person.personAddress.townshipDivision}}
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-3 font-bold">
                                Guardian Name
                            </div>
                            <div class="col">
                                {{ patient.guardianName}}
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-3 font-bold">Phone</div>
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <h5>
                                            Patient
                                        </h5>
                                        <div>
                                            {{ patient.patientPhone}}
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h5>
                                            Guardian
                                        </h5>
                                        <div>
                                            {{ patient.guardianPhone}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-3 font-bold">Agrees to FUP</div>
                            <div class="col">
                                <div class="row">
                                    <div class="col-3">
                                        {{ patient.followUp}}
                                    </div>
                                    <div class="col">
                                        <h5>
                                            Guardian Relation
                                        </h5>
                                        <div>
                                            {{ patient.guardianRelation}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <InitDataV5 :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload">

                    </InitDataV5>
                </div>
            </div>
            <div class="my-4">

            </div>
            <div>
                <VisitDataV5 :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload"></VisitDataV5>
            </div>
            <div class="my-4">
                <form v-on:submit.prevent="initiatePost">
                    <div class="row">
                        <div class="offset-4 col-4">
                            <div class="w-full">
                                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    Master Card Version
                                </label>
                                <div class="relative">
                                    <button type="submit" class="bg-yellow-darker px-5 py-3 text-white rounded flex mx-auto">Save <font-awesome-icon icon="save" class="ml-1"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="shadow-8 border-2 border-yellow rounded p-2 m-4">
                <div>
                    <strong>Ever taken ARVs</strong> Has the patient ever taken any ARVs? (e.g. single dose nevirapine for PMTCT, PEP or triple therapy) If yes, specify drug and approximate date when last taken
                </div>
                <div class="row">
                    <div class="col">
                        <h3>Routine TB Screening Checklist</h3>
                        <p>
                            1).Cough of any duration
                            <br>
                            2).Fever
                            <br>
                            3).Night Sweats
                            <br>
                            4).Weight Loss / Failure to Thrive
                        </p>
                    </div>
                    <div class="col">
                        <h3>TB Status Current (Any TB form, smear pos/neg)</h3>
                        <p>
                            N  TB Not suspected
                            <br>
                            Y  TB Suspected
                            <br>
                            C  TB Confirmed not (yet) on TB treatment
                            <br>
                            Rx TB Confirmed & Currently taking TB Treatment
                        </p>
                    </div>
                    <div class="col">
                        <h3>ARVs Given</h3>
                        <p>
                            P to patient
                            <br>
                            G to guardian
                        </p>
                    </div>
                    <div class="col-4">
                        <h3>Adverse Outcomes</h3>
                        <div>
                            <div class="row">
                                <div class="col-2">
                                    D
                                </div>
                                <div class="col">
                                    Died
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">
                                    Def Defaulted:
                                </div>
                                <div class="col">
                                    More than 2 months overdue after expected to have run out of tables, unknown survival and ART status
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">
                                    Stop
                                </div>
                                <div class="col">
                                    Patient stopped taking ARVs (clinician’s or patient’s own decision)
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">
                                    TO
                                </div>
                                <div class="col">
                                    Transferred to other ART clinic (including ‘unofficial’ transfers)
                                </div>
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
    import InitDataV5 from "./InitiDataV5";
    import VisitDataV5 from "./VisitDataV5";
    import RegistrationDataV5 from "./RegistrationDataV5";

    export default {
        name: 'MasterCardV5',
        components: {RegistrationDataV5, VisitDataV5, InitDataV5},
        methods: {
            getMasterCardDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/master-cards/${this.patientCard.masterCard.masterCardID}`;

                axios.get(dhisAPIEndpoint)
                    .then((response)=>{
                        console.log(response)
                        this.masterCardWithDetails = response.data.data
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },
            initiatePost : function ()
            {
                this.postPayload++;
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
                masterCardWithDetails : {
                    encounterTypes : []
                },
                postPayload : false
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

            this.getMasterCardDetails();
        }
    }
</script>
