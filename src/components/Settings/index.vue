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
                            selectable
                            :select-mode="selectMode"
                            @row-selected="rowSelected"
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
         

        <b-modal id="addNewRecord" title="Add New User" v-model="show" hide-footer>
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

        <b-modal id="updateUser" title="User Details" v-model="showUpdateModal" hide-footer>
            <form v-on:submit.prevent="processRecord">
            <div class="container">
                    <div class="form-row">
                        <div class="col-8">
                            <label>Username</label>
                            <input v-model="username" class="form-control"  type="text" required>
                        </div>
                        <div class="col-4">
                            <label style="color:#fff">Username</label>
                            <button class="btn btn-success form-control" @click="updateUsername($event)">Update</button>
                        </div>
                    </div>
                    <hr>
                    <div class="form-row">
                        <div class="col-8">
                            <label>User Role</label>
                            <select v-model="is_superuser" class="form-control"> 
                                <option value="1">Superuser</option>
                                <option value="0">Data Clerk</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label style="color:#fff">User Role</label>
                            <button class="btn btn-success form-control" @click="updateUserRole($event)">Update</button>
                        </div>
                    </div>
                    <hr>
                    <div class="form-row">
                        <div class="col-8">
                            <label>Activate User</label>
                            <select v-model="status" class="form-control"> 
                                <option value="1">Activate</option>
                                <option value="0">Deactivate</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label style="color:#fff">User Role</label>
                            <button class="btn btn-success form-control" @click="updateUserStatus($event)">Update</button>
                        </div>
                    </div>
                    <hr>
                    <div class="form-row">
                        <div class="col-12">
                            <label>Password</label>
                            <input v-model="password" class="form-control"  type="password" placeholder="Create User Password" required>
                            
                        </div>
                        <div class="col-12">
                            <label>Password Confirmation</label>
                            <input v-model="confirmPassword" class="form-control"  type="password" placeholder="Retype Password Entered above" required>
                        </div>
                        <div>
                            <button class="btn btn-success mt-3" @click="changePassword($event)">Update</button>
                        </div>
                    </div>
                    
            </div>
            
            </form>
        </b-modal>
    </div>
</template>

<script>
    import {authResource} from './../../authResource'
    import NavBar from '../../views/NavBar'
    import { notificationSystem } from '../../globals'

    export default {
        name: 'Settings',
        components: { NavBar},
        methods: {
            updateUsername(e){
                e.preventDefault();
                
                const payload = {
                    username: this.username
                }

                const url = `${this.APIHosts.art}/${this.BASE_URL}/${this.userID}`

                authResource().patch(url, payload)
                    .then((response) => {
                        this.$toast.success('Username Updated!', 'OK', notificationSystem.options.success)
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    })  
            },
            updateUserRole(e){
                e.preventDefault();
                
                const payload = {
                    is_superuser: this.is_superuser
                }

                const url = `${this.APIHosts.art}/${this.BASE_URL}/${this.userID}`

                authResource().patch(url, payload)
                    .then((response) => {
                        this.$toast.success('User Role Updated!', 'OK', notificationSystem.options.success)
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    })  
            },
            updateUserStatus(e){
                e.preventDefault();
                
                const payload = {}

                const url = `${this.APIHosts.art}/${this.BASE_URL}/${this.userID}/toggle`

                authResource().patch(url, payload)
                    .then((response) => {
                        this.$toast.success('User Status Updated!', 'OK', notificationSystem.options.success)
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    })  
            },
            changePassword(e){
                e.preventDefault();
                
                const payload = {
                    password: this.password,
                    password_confirmation: this.confirmPassword
                }

                if (this.password !== this.confirmPassword){
                    this.$toast.error(`Passwords do not match`, 'Error', notificationSystem.options.error)
                    this.confirmPassword = ''
                    this.password = ''
                }else{
                    const url = `${this.APIHosts.art}/${this.BASE_URL}/${this.userID}/change_password`

                authResource().patch(url, payload)
                    .then((response) => {
                        this.$toast.success('User Password Changed!', 'OK', notificationSystem.options.success)
                        this.confirmPassword = ''
                        this.password = ''
                    })
                    .catch(({response: {data: {errors}, data}}) => {
                        
                        return Object.values(errors).forEach(error => {
                            this.$toast.error(`${data.message}, ${error[0]}`, 'Error', notificationSystem.options.error)
                        });
                            
                    }) 
                } 
            },
            rowSelected(row){
                this.username = row[0].username || ''
                this.password = ''
                this.showUpdateModal = true
                this.userID = row[0].userID || ''
            },
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
                            console.log(user)
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
        },
        data: () => {
            return {
                notificationSystem,
                isBusy: true,
                show: false,
                showUpdateModal: false,
                BASE_URL : 'users',
                users: [],
                userID: '',
                postPayload : false,
                perPage: 8,
                currentPage: 1,
                username: '',
                confirmPassword: '',
                password: '',
                is_superuser: '',
                selectMode: 'single',
                status: ''
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
        }
    }
</script>
