<template>
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <section class="mt-5">
            <div class="container d-flex justify-content-center">
            <div class="row">
                <button type="button" class="btn btn-success btn-lg" v-b-modal.addNewRecord>Add New User</button>
               
            </div>
        </div>
        </section>
        
        <section class="mt-5">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="alert alert-warning" role="alert" v-if="users[0] === undefined">
                        No Records Available here
                    </div>
                        <b-table
                            id="my-table"
                            :items="users"
                            :per-page="perPage"
                            :current-page="currentPage"
                            striped hover responsive>
                        </b-table>
                        <b-pagination
                        v-if="users[0] !== undefined"
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
                        <div class="col-12">
                            <label>Username</label>
                            <input v-model="username" class="form-control"  type="text" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-12">
                            <label>User Role</label>
                            <select v-model="is_superuser" class="form-control"> 
                                <option value="1">Superuser</option>
                                <option value="0">Data Clerk</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-12">
                            <label>Password</label>
                            <input v-model="password" class="form-control"  type="password" placeholder="Create User Password" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-12">
                            <label>Password Confirmation</label>
                            <input v-model="confirmPassword" class="form-control"  type="password" placeholder="Retype Password Entered above" required>
                        </div>
                    </div>
                    <button class="btn btn-success mt-3" type="submit">Create User</button>
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
        name: 'Settings',
        components: { NavBar},
        methods: {
            processRecord(){
                const payload = {
                    username: this.username, 
                    password: this.password,
                    password_confirmation: this.confirmPassword

                }
                this.show = false
                return this.postUser(payload)
            }
            ,            
            getUsers(){
                const url = `${this.APIHosts.art}/${this.BASE_URL}`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.users = JSON.parse(JSON.stringify(data)).map((user) => {
                            const {object, ...rest} = user
                            return rest
                        })
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    }) 
            },
            getUser(id){
                const url = `${this.APIHosts.art}/${this.BASE_URL}/${id}`

                authResource().get(url)
                    .then(({data: {data}})=> {
                        this.user = data
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    }) 
            },
            postUser(payload){
                const url = `${this.APIHosts.art}/${this.BASE_URL}`

                authResource().post(url, payload)
                    .then((response) => {
                        this.$toast.success('Successfully added record!', 'OK', notificationSystem.options.success)
                        this.getUsers()
                        this.username = ''
                        this.confirmPassword = ''
                        this.password = ''
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    }) 
            },
            updateUser(payload){
                const url = `${this.APIHosts.art}/${this.BASE_URL}`

                authResource().post(url, payload)
                    .then((response) => {
                        this.$toast.success('Successfully added record!', 'OK', notificationSystem.options.success)
                        this.getUsers()
                        this.username = ''
                        this.confirmPassword = ''
                        this.password = ''
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    }) 
            },
            // setYears(){
            //     const today = new Date()
            //     let years = []
            //     for(let year = 0; year < 4; year++){
            //         let theYear = new Date(today.setFullYear(today.getFullYear() - 1))

            //         years.push( parseInt( theYear.getFullYear() + 1 ))
            //     }
            //     return this.years = years
            // }
        },
        data: () => {
            return {
                notificationSystem,
                isBusy: true,
                show: false,
                BASE_URL : 'users',
                users: [],
                postPayload : false,
                perPage: 8,
                currentPage: 1,
                username: '',
                confirmPassword: '',
                password: '',
                is_superuser: ''
            }
        },
        computed: {
            rows() {
                return this.users.length
            }
        },
        watch: {
            users: function(){
                this.isBusy = !this.isBusy
            }
        },
        created() {
            this.getUsers()
            // this.setYears()
        }
    }
</script>
