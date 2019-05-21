 import axios from 'axios'
 import { notificationSystem } from '../globals'
import Vue from 'vue'

 export default () => {

    // apply interceptor on response
    axios.interceptors.response.use(
        (response) => {
            
            
            return response
        },
        (error) => {
            console.log('hellosaj')
            if(error.response.data.message === "Unauthenticated."){
                console.log('hellosaj')
                sessionStorage.removeItem('patient')
                sessionStorage.removeItem('auth')
                Vue.prototype.$router.push("/login")
                Vue.prototype.$toast.error(`Session Expired, Login again`, 'Error', notificationSystem.options.error)
                this.$router.push('/login')
            }
            return Promise.reject(error)
        }
    )
 }