 import axios from 'axios'
 import { notificationSystem } from '../globals'

 export default () => {

    // apply interceptor on response
    axios.interceptors.response.use(
        (response) => {
            
            
            return response
        },
        (error) => {
            if(error.response.data.message === "Unauthenticated."){
                sessionStorage.removeItem('patient')
                sessionStorage.removeItem('auth')
                window.location.href = "login"
            }
            return Promise.reject(error)
        }
    )
 }