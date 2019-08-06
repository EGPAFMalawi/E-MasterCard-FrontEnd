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
            if(error.response.data.message === "Unauthenticated."){
                sessionStorage.removeItem('auth')
                localStorage.removeItem('vuex')
                window.location.assign("/login")
                Vue.prototype.$toast.error(`Session Expired, Login again`, 'Error', notificationSystem.options.error)
            }
            return Promise.reject(error)
        }
    )
 }