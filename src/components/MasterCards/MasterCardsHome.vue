<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>

        </div>
        <div class="container-fluid py-4">
            <MasterCardV5 v-if="patientCard.masterCard.version == '5'" :patientCard="patientCard"></MasterCardV5>
            <MasterCardV6 v-else-if="patientCard.masterCard.version == '6'" :patientCard="patientCard"></MasterCardV6>
            <MasterCardV7 v-else-if="patientCard.masterCard.version == '7'" :patientCard="patientCard"></MasterCardV7>
            <MasterCardV7Paeds v-else-if="patientCard.masterCard.version == '7 Paeds'" :patientCard="patientCard"></MasterCardV7Paeds>
            <div v-else>MasterCard Version not yet Supported</div>
        </div>
    </div>
</template>

<script>
    import MasterCardV5 from "./MasterCardV5/MasterCardV5";
    import MasterCardV6 from "./MasterCardV6/MasterCardV6";
    import MasterCardV7 from "./MasterCardV7/MasterCardV7";
    import MasterCardV7Paeds from "./MasterCardV7/MasterCardV7Paeds";
    import NavBar from "../../views/NavBar";

    export default {
        name: 'MasterCardsHome',
        components: {
            NavBar,
            MasterCardV7, MasterCardV6, MasterCardV5, MasterCardV7Paeds},
        data: () => {
            return {
                BASE_URL : 'patients',
                patient : {
                    person : {
                        personName : {},
                        personAddress : {}
                    }
                },
                patientCard : {
                    masterCard : {}
                }
            }
        },
        created() {

            let patient = JSON.parse(sessionStorage.getItem('patient'))
            let patientCard = JSON.parse(sessionStorage.getItem('patientCard'))

            if (!patient || !patientCard){
                this.$router.push('/')
            }

            this.patient = patient
            this.patientCard = patientCard
        }
    }
</script>
