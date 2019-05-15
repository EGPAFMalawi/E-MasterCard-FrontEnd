<template>
    <div class="card w-50">
        <div class="card-header">
            <h5 class="text-center">Login</h5>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="authenticate">
            <div class="form-row mb-4">
                <div class="col-md-12">
                    <label for="username">Username</label>
                    <input v-model="authCredentials.username" id="username" class="form-control" type="text" required/>
                </div>
            </div>
            <div class="form-row mb-4">
                <div class="col-md-12">
                    <label for="password">Password</label>
                    <input v-model="authCredentials.password" id="password" class="form-control" type="password" required/>
                </div>
            </div>
            

            <div class="mb-4">
                <button type="submit" class="btn btn-primary">Login <font-awesome-icon icon="lock" class="ml-1"/></button>
                <p v-if="isLoading" class="my-4 text-center">Authenticating ...</p>
                <p v-if="authResponse.isAuthenticated" class="text-green my-4 text-center"><span class="font-bold">Login Successful!</span><br>Redirecting to Home...</p>
                <p v-if="authResponse.hasFailedAuthentication" class="text-redmy-4 text-center">
                    Authentication Failed!<br>Check Auth Credentials
                </p>
            </div>
        </form>
        </div>
    </div>
    
</template>

<script>
    import  axios from 'axios'

    export default {
        name: 'LoginForm',
        methods: {
            authenticate : function ()
            {
                this.isLoading = true;
                this.authResponse.isAuthenticated = false;
                this.authResponse.hasFailedAuthentication = false;


                let requestConfig = this.prepareAuthRequestData();

                let dhisAPIEndpoint = `${this.APIHosts.art}/${this.BASE_URL}`;

                axios.post(dhisAPIEndpoint, requestConfig)
                    .then((response)=>{
                        this.isLoading = false;
                        this.authResponse.isAuthenticated = true;

                        sessionStorage.setItem('auth', JSON.stringify(response.data));

                        setTimeout(()=>{this.$router.push('/')},2000);
                    })
                    .catch(()=>{
                        this.isLoading = false;
                        this.authResponse.hasFailedAuthentication = true;

                        this.authCredentials.password = "";
                    })

            },

            prepareAuthRequestData : function()
            {
                return {
                        username: this.authCredentials.username,
                        password: this.authCredentials.password
                }
            }
        },
        data: () => {
            return {
                BASE_URL : 'auth/login',

                isLoading : false,

                authCredentials: {
                    username: "",
                    password: ""
                },

                authResponse : {
                    isAuthenticated: false,
                    hasFailedAuthentication : false
                }
            }
        }
    }
</script>
