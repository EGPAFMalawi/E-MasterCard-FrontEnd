<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <section class="mt-5">
            <div class="container d-flex justify-content-center">
            <div class="row">
                <button type="button" class="btn btn-success btn-lg" v-b-modal.addNewRecord>Add a New Record</button>
               
            </div>
        </div>
        </section>
        
        <section class="mt-5">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="alert alert-warning" role="alert" v-if="records[0] === undefined">
                        No Records Available here
                    </div>
                        <b-table
                            id="my-table"
                            :items="records"
                            :per-page="perPage"
                            :current-page="currentPage"
                            striped hover responsive>
                        </b-table>
                        <b-pagination
                        v-if="records[0] !== undefined"
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        ></b-pagination>
                    
                </div>
            </div>
        </section>
         

        <b-modal id="addNewRecord" title="Add New HTS Record" v-model="show" hide-footer>
            <form v-on:submit.prevent="processRecord">
            <div class="container">
                    <div class="form-row">
                        <div class="col-6">
                            <label>HTS Record Number</label>
                            <input v-model="inserted_hts_record_id" class="form-control"  type="text" required>
                        </div>
                        <div class="col-6">
                            <label>Sex</label>
                            <div class="input-group pt-1">
                                <select class="form-control" v-model="sex" required>
                                    <option :value="null" disabled>Select Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="FemalePregnant">Female Pregnant(FP)</option>
                                    <option value="FemaleNonPregnant">Female Non Pregnant(FNP)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label>Age</label>
                            <input v-model="age" class="form-control"  type="number" min="0" required>
                        </div>
                        <div class="col-6">
                            <label>Service Delivery Point(SDP)</label>
                            <select class="form-control" v-model="service_delivery_point" required>
                                <option :value="null" disabled>Select Status</option>
                                <option value="ANC">ANC</option>
                                <option value="VCT">VCT</option>
                                <option value="Maternity">Maternity</option>
                                <option value="TB">TB</option>
                                <option value="STI">STI</option>
                                <option value="NRU">NRU</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <label>Status</label>
                            <select class="form-control" v-model="status" required>
                                <option :value="null" disabled>Select Status</option>
                                <option value="New Positive">New Positive</option>
                                <option value="New Negative">New Negative</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <label>Modality</label>
                            <select class="form-control" v-model="modality" required>
                                <option :value="null" disabled>Select Modality</option>
                                <option value="PITC - Other">PITC - Other</option>
                                <option value="Index (FRS in HTS Register)">Index (FRS in HTS Register)</option>
                                <option value="VCT (Co-Located & Stand Alone)">VCT (Co-Located & Stand Alone)</option>
                                <option value="ANC">ANC</option>
                                <option value="Maternity">Maternity</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-3">
                            <label>Month</label>
                            <select class="form-control" v-model="month" required>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="col-3">
                            <label>Year</label>
                            <select class="form-control" v-model="year" required>
                                <option v-for="chaka in years" v-bind:key="chaka">{{chaka}}</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success mt-3" type="submit">Submit Record</button>
            </div>
            
            </form>
        </b-modal>
    </div>
</template>

<script>
    import authResource from './../../authResource'
    import NavBar from '../../views/NavBar'
    import { notificationSystem } from '../../globals'

    export default {
        name: 'HTS',
        components: { NavBar},
        methods: {
            processRecord(){
                const payload = {
                    age: this.age,
                    sex: this.sex,
                    status: this.status,
                    modality: this.modality,
                    year: parseInt(this.year),
                    month: this.month,
                    inserted_hts_record_id: this.inserted_hts_record_id,
                    service_delivery_point: this.service_delivery_point
                }
                this.show = false
                return this.postRecord(payload)
            }
            ,            
            getRecords(){
                const url = `${this.APIHosts.art}/${this.BASE_URL}`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.records = JSON.parse(JSON.stringify(data)).map((record) => {
                            const {object, ...rest} = record
                            return rest
                        })
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    }) 
            },
            postRecord(payload){
                const url = `${this.APIHosts.art}/${this.BASE_URL}`

                authResource().post(url, payload)
                    .then((response) => {
                        this.$toast.success('Successfully added record!', 'OK', notificationSystem.options.success)
                        this.getRecords()
                        this.age = 0
                        this.sex = ''
                        this.status = ''
                        this.modality = ''
                        this.inserted_hts_record_id = ''
                        this.service_delivery_point = ''
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    }) 
            },
            setYears(){
                const today = new Date()
                let years = []
                for(let year = 0; year < 4; year++){
                    let theYear = new Date(today.setFullYear(today.getFullYear() - 1))

                    years.push( parseInt( theYear.getFullYear() + 1 ))
                }
                return this.years = years
            }
        },
        data: () => {
            return {
                notificationSystem,
                isBusy: true,
                show: false,
                BASE_URL : 'hts-records',
                age: '',
                sex: '',
                status: '',
                modality: '',
                records: [],
                postPayload : false,
                perPage: 8,
                currentPage: 1,
                month: '',
                year: '',
                inserted_hts_record_id: '',
                service_delivery_point: '',
                years: []
            }
        },
        computed: {
            rows() {
                return this.records.length
            }
        },
        watch: {
            records: function(){
                this.isBusy = !this.isBusy
            }
        },
        created() {
            this.getRecords()
            this.setYears()
        }
    }
</script>
