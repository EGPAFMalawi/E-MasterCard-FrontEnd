<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>

        </div>
        <div class="container-fluid py-4">
            <MasterCardV7 v-if="patientCard.masterCard.version == '7 Adults'" 
                :patientCard="patientCard" 
                :patient='patient'
                :autofill='autofill'>
            </MasterCardV7>
            <MasterCardV7Paeds v-else-if="patientCard.masterCard.version == '7 Peds'" 
                :patientCard="patientCard"
                :patient='patient'
                :autofill='autofill'>
            </MasterCardV7Paeds>
            <div v-else>MasterCard Version not yet Supported</div>
        </div>
    </div>
</template>

<script>
    import MasterCardV7 from "./MasterCardV7/MasterCardV7"
    import MasterCardV7Paeds from "./MasterCardV7/MasterCardV7Paeds"
    import NavBar from "../../views/NavBar";
    import { mapGetters, mapActions } from 'vuex' 

    export default {
        name: 'MasterCardsHome',
        components: {
            NavBar,
            MasterCardV7, MasterCardV7Paeds
        },
        data: () => {
            return {
                BASE_URL : 'patients',
                autofill: {}
            }
        },
        methods: {
            ...mapActions([
                'setDateOfFirstStartingART', 
                'setFormDoB',
                'setAgeAtARTInit',
                'setRegistrationData'
                ])
        },
        created() {
            if (!this.patient || !this.patientCard){
                this.$router.push('/')
            }

            Object.assign(
                this.autofill, 
                this.dateOfFirstStartingART !== null ? {
                    dateOfFirstStartingART: this.dateOfFirstStartingART
                } : {},
                this.ageAtARTInit !== null ? {
                    ageAtARTInit: this.ageAtARTInit
                } : {},
                this.registrationData !== null ? 
                this.registrationData : {}
                )
            
            this.setDateOfFirstStartingART(null)
            this.setAgeAtARTInit(null)

        },
        computed: { 
             ...mapGetters([
                'patient', 
                'patientCard', 
                'dateOfFirstStartingART', 
                'formDoB', 
                'ageAtARTInit',
                'registrationData'
            ])
        },
        destroyed() {
            this.setRegistrationData(null)
        }
    }
</script>
