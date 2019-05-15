<template>
    <div>
        <button class="sticky-top btn btn-info" @click="goBack">Back</button>
        <div class="container-fluid py-4">
            <div class="row d-flex justify-content-center">
                <ul class="nav ">
                <li class="nav-item">
                    <h5 class="navbar-brand">
                        ART Patient Card ARV Formulations, 
                        <span class="badge badge-info">Version 7 Paeds</span>
                    </h5>
                        
                </li>
                <li class="nav-item">
                    <RegistrationDataV7Paeds :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload"></RegistrationDataV7Paeds>
                </li>
            </ul>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <InitDataV7Paeds :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload"></InitDataV7Paeds>
        </div>
        <div class="container d-flex justify-content-center">
            <VisitDataV7Paeds :encounterTypes="masterCardWithDetails.encounterTypes" :postPayload="postPayload"></VisitDataV7Paeds>
        </div>
        <section>
            <div class="container">
                    <form class="form-row " v-on:submit.prevent="initiatePost">
                        <div class="col-md-12 d-flex justify-content-center">
                                <button type="submit" class="btn btn-success btn-lg my-4">SAVE DATA <font-awesome-icon icon="save" class="ml-1"/></button>
                        </div>
                    </form>
            </div>
            
        </section>
    </div>
</template>

<script>
    import authResource from './../../../authResource'
    import InitDataV7Paeds from "./InitiDataV7Paeds";
    import VisitDataV7Paeds from "./VisitDataV7Paeds";
    import RegistrationDataV7Paeds from "./RegistrationDataV7Paeds";

    export default {
        name: 'MasterCardV7Paeds',
        components: {RegistrationDataV7Paeds, VisitDataV7Paeds, InitDataV7Paeds},
        methods: {
            goBack(){
                 this.$router.go(-1)
            },
            
            getMasterCardDetails : function ()
            {
                let dhisAPIEndpoint = `${this.APIHosts.art}/master-cards/${this.patientCard.masterCard.masterCardID}`;

                authResource().get(dhisAPIEndpoint)
                    .then((response)=>{
                        console.log(JSON.parse(JSON.stringify(response.data.data)))
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
