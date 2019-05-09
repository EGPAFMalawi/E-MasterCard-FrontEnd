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
                            <label>Age</label>
                            <input v-model="age" class="form-control"  type="number" required>
                        </div>
                        <div class="col-6">
                            <label>Sex</label>
                            <div class="input-group pt-1">
                                <b-form-radio v-model="sex" name="sex" value="Female">Female</b-form-radio>
                                <span style="margin: 0 0.5em"></span>
                                <b-form-radio v-model="sex" name="sex" value="Male">Male</b-form-radio>
                                
                            </div>
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
                                <option :value="null" disabled>Select Status</option>
                                <option value="PITC - Other">PITC - Other</option>
                                <option value="Index (FRS in HTS Register)">Index (FRS in HTS Register)</option>
                                <option value="VCT (Co-Located & Stand Alone)">VCT (Co-Located & Stand Alone)</option>
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
                    modality: this.modality
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
                    .then(({data: {data}}) => {
                        this.$toast.success('Successfully added record!', 'OK', notificationSystem.options.success)
                        const {object, ...rest} = data
                        this.records.push(...rest)
                        this.age = 0
                        this.sex = ''
                        this.status = ''
                        this.modality = ''
                    })
                    .catch(({response: {data: {errors}, data}}) => {

                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    }) 
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
        }
    }
</script>
