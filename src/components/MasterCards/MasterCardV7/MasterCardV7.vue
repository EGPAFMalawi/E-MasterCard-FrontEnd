<template>
    <div>
        <button class="sticky-top btn btn-info" @click.prevent="goBack">Back</button>
        <div class="container  d-flex justify-content-center py-2">
            <div class="row">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <h5 class="navbar-brand">
                            ART Patient Card ARV Formulations, 
                            <span class="badge badge-warning">Version 7</span>
                        </h5>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center">
            <RegistrationDataV7 
                :encounterTypes="masterCardDetails.encounterTypes" 
                :postPayload="postPayload"
                :patient='patient'
                :patientCard='patientCard'
                :isAdults="true">
            </RegistrationDataV7>
        </div>
        <div class="container-fluid d-flex justify-content-center">
            <InitDataV7 
                :encounterTypes="masterCardDetails.encounterTypes" 
                :postPayload="postPayload"
                :patient='patient'
                :patientCard='patientCard'
                :autofill="autofill">
            </InitDataV7>
        </div>
        
        <div class="container">
            <div class="row justify-content-center">
                <h5 class="text-align-center">Visit / Outcomes Data</h5>
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center pt-4" style="background: #fff">
            <VisitDataV7 
                :encounterTypes="masterCardDetails.encounterTypes" 
                :postPayload="postPayload"
                :patient='patient'
                :patientCard='patientCard'
                :autofill="autofill">
            </VisitDataV7>
        </div>
    </div>
</template>

<script>
    import InitDataV7 from "./InitiDataV7";
    import VisitDataV7 from "./VisitDataV7";
    import RegistrationDataV7 from "./RegistrationDataV7"
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'MasterCardV7',
        props: ['autofill', 'patient', 'patientCard'],
        components: {RegistrationDataV7, VisitDataV7, InitDataV7},
        methods: {
            ...mapActions(['loadMasterCardDetails']),
            goBack(){
                 this.$router.go(-1)
            },

            getMasterCardDetails(){
                const url = `${this.APIHosts.art}/master-cards/${this.patientCard.masterCard.masterCardID}`;
                this.loadMasterCardDetails({url})
                    .then( message => console.info(message) )
                    .catch(err => console.error(err))
            },
            initiatePost(){
                this.postPayload++;
            },
        },
        data: () => {
            return {
                BASE_URL : 'patients',
                postPayload : 0
            }
        },
        created() {
            this.getMasterCardDetails();
        },
        computed: {
            ...mapGetters(['masterCardDetails'])
        }
    }
</script>
