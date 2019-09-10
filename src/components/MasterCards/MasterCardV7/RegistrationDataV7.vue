<template>
        <div class="row">
            <div class="col-2">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text reg-details">ART Reg no</span>
                    </div>
                    <input type="text" class="form-control tb-form" v-model="patient.fullArtNumber" @click="editARTNumber" @focus="editARTNumber" @change="restoreARTNumber" @blur="updateARTNumber">
                </div>
            </div>
            <div class="col-2" v-if="isAdults">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text reg-details">Child HCC no</span>
                    </div>
                    <input type="text" class="form-control tb-form" v-model="concepts.concept30" @change="updateRegData($event, 'concept30')">
                </div>
            </div>
            <div class="col-1">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text reg-details">Year</span>
                    </div>
                    <input type="number" class="form-control tb-form" v-model="concepts.concept31" @change="updateRegData($event, 'concept31')">
                </div>
            </div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text reg-details">Registration Type</span>
                    </div>
                    <select class="form-control tb-form" v-model="concepts.concept55" @change="updateRegData($event, 'concept55')">
                        <option :value="null" disabled>Select Status</option>
                        <option value="First Time Initiation">First Time Initiation</option>
                        <option value="Reinitiation">Reinitiation</option>
                        <option value="Transfer In">Transfer In</option>
                    </select>
                </div>
            </div>
            <div :class="{'col-2': isAdults, 'col-3': !isAdults}" >
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text reg-details">Registration Date</span>
                    </div>
                    <input type="date" class="form-control tb-form" v-model="concepts.concept56" @change="updateRegData($event, 'concept56')">
                </div>
            </div>
            <div :class="{'col-2': isAdults, 'col-3': !isAdults}">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text reg-details">ART Initiation Date</span>
                    </div>
                    <input type="date" class="form-control tb-form" v-model="concepts.concept57" @change="updateRegData($event, 'concept56')">
                </div>
            </div>
        </div>

</template>

<script>
    import {authResource} from './../../../authResource'
    import { notificationSystem, matchString, addDays, compareDates, validateDate } from '../../../globals'
    import { mapGetters, mapActions } from 'vuex' 

    export default {
        name: 'RegistrationDataV7',
        props : ['encounterTypes', 'postPayload', 'patient', 'patientCard', 'isPeads', 'isAdults'],
        methods: {
            ...mapActions(["reloadPatient"]),
            updateARTNumber(e){
                const payload = {
                    identifier: parseInt(e.target.value)
                }
                const url = `${this.APIHosts.art}/patient-identifiers/${this.patient.patientIdentifierID}`
                authResource().patch(url, payload)
                .then(response => {
                        this.$toast.success(
                            `Saved!!`, 
                            'OK', 
                            notificationSystem.options.success
                        )
                        this.reloadPatient(`${this.APIHosts.art}/patients/${this.patient.patientID}`)
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(
                                `${data.message}, 
                                ${error[0]}`, 
                                'Error', 
                                notificationSystem.options.error
                            )
                        });
                    })
            }, 
            editARTNumber(e){
                e.preventDefault();
                this.tempFullART = e.target.value
                const patt1 = /[0-9]/g;
                const result =  e.target.value.match(patt1);
                e.target.value = result.join('')
            },
            restoreARTNumber(e){
                e.preventDefault()

                e.target.value = this.patient.fullArtNumber
            },
            updateRegData(e, concept){
                
                const payload = this.encounterTypes[0].concepts.map((item)=>{
                    if (concept === 'concept'+item.conceptID){

                        return {
                            'concept' : item.conceptID,
                            'encounter-type' : 1,
                            'value' : null,
                            'observation' : null
                        }
                    }
                }).filter(item => item !== undefined);

                const finalPayload = [...payload]
                Object.entries(this.concepts).forEach(([key, concept]) => {
                    finalPayload.push({
                        'concept' : key.match(/\d+/)[0],
                        'encounter-type' : 1,
                        'value' : concept,
                        'observation' : null
                    })
                })
                this.handlePost(finalPayload)
            },
            getPatientCardDetails : function ()
            {
                let url = `${this.APIHosts.art}/patient-cards/${this.patientCard.patientCardID}/data`;
                let payload = {
                    'encounter-type' : this.encounterTypes[0].encounterTypeID,
                    'consider-version' : false
                };

                authResource().post(url, payload)
                    .then((response)=>{
                        this.patientCardData.push(...response.data.data)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
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
                console.log(finalPayload)

                authResource().post(dhisAPIEndpoint, finalPayload)
                    .then((response)=>{
                        this.patientCardData = [];
                        this.getPatientCardDetails()
                        this.$toast.success(`Saved!`, 'OK', notificationSystem.options.success)
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
                notificationSystem,
                BASE_URL : 'patients',
                patientCardData : [],
                masterCardWithDetails : {},
                concepts : {
                    concept28 : '',
                    concept29 : '',
                    concept30 : '',
                    concept31 : '',
                    concept55 : '',
                    concept56 : '',
                    concept57 : '',
                    concept58 : '',
                },

            }
        },
        watch : {
            encounterTypes : function (value) {
                if (value.length > 0)
                {
                    this.getPatientCardDetails();
                }
            },
            patientCardData : function (value) {
                this.fillConceptObservations(value);
            }
        }
    }
</script>
