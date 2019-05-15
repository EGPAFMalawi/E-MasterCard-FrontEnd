<template>
    <div>
        <button class="sticky-top btn btn-info" @click="goBack">Back</button>
        <div class="container-fluid py-4">
            <div class="row d-flex justify-content-center">
                <ul class="nav ">
                <li class="nav-item">
                    <h5 class="navbar-brand">
                        ART Patient Card ARV Formulations, 
                        <span class="badge badge-warning">Version 7</span>
                    </h5>
                        
                </li>
                <li class="nav-item">
                    <RegistrationDataV7 :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload"></RegistrationDataV7>
                </li>
            </ul>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <InitDataV7 :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload"></InitDataV7>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <h5 class="text-align-center">Visit Data</h5>
            </div>
            
        </div>
        <div class="container-fluid d-flex justify-content-center">
            <VisitDataV7 :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload"></VisitDataV7>
        </div>
        <section>
            <div class="container">
                    <form class="form-row " v-on:submit.prevent="initiatePost">
                        <div class="col-md-12 d-flex justify-content-center">
                                <button type="submit" class="btn btn-success btn-lg my-4">SAVE DATA<font-awesome-icon icon="save" class="ml-1"/></button>
                        </div>
                    </form>
            </div>
            
        </section>
    </div>
</template>

<script>
    import authResource from './../../../authResource'
    import InitDataV7 from "./InitiDataV7";
    import VisitDataV7 from "./VisitDataV7";
    import RegistrationDataV7 from "./RegistrationDataV7";

    export default {
        name: 'MasterCardV7',
        components: {RegistrationDataV7, VisitDataV7, InitDataV7},
        methods: {
            goBack(){
                 this.$router.go(-1)
            },

            getMasterCardDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/master-cards/${this.patientCard.masterCard.masterCardID}`;

                authResource().get(dhisAPIEndpoint)
                    .then((response)=>{
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
