<template>
    <div>
        <button class="sticky-top btn btn-info" @click="goBack">Back</button>
        <div class="container py-4">
            <div class="row d-flex justify-content-center">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <h5 class="navbar-brand">
                            ART Patient Card ARV Formulations, 
                            <span class="badge badge-info">Version 7 Paeds</span>
                        </h5>  
                    </li>
                </ul>
                <RegistrationDataV7Paeds 
                    :encounterTypes="masterCardDetails.encounterTypes" 
                    :postPayload="postPayload"
                    :patient='patient'
                    :patientCard='patientCard'>
                </RegistrationDataV7Paeds>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <InitDataV7Paeds 
                :encounterTypes="masterCardDetails.encounterTypes" 
                :postPayload="postPayload"
                :patient='patient'
                :patientCard='patientCard'>
            </InitDataV7Paeds>
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <h5 class="text-align-center">Visit Data</h5>
            </div>
        </div>

        <div class="container-fluid d-flex justify-content-center pt-4" style="background: #fff">
            <VisitDataV7Paeds 
                :encounterTypes="masterCardDetails.encounterTypes" 
                :postPayload="postPayload"
                :patient='patient'
                :patientCard='patientCard'>
            </VisitDataV7Paeds>
        </div>
    </div>
</template>

<script>
    import authResource from './../../../authResource'
    import InitDataV7Paeds from "./InitiDataV7Paeds";
    import VisitDataV7Paeds from "./VisitDataV7Paeds";
    import RegistrationDataV7Paeds from "./RegistrationDataV7Paeds";
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'MasterCardV7Paeds',
        props: ['patient', 'patientCard'],
        components: {RegistrationDataV7Paeds, VisitDataV7Paeds, InitDataV7Paeds},
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
            initiatePost : function ()
            {
                this.postPayload++;
            }
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
