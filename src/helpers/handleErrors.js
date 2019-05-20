 import axios from 'axios'
 import { notificationSystem } from '../globals'

 export default () => {

    // apply interceptor on response
    axios.interceptors.response.use(
        (response) => {
            
            
            return response
        },
        (error) => {
            console.log('hello', error.response.data.me)
            if(error.response.data.message === "Unauthenticated."){
                console.log('hie')
                sessionStorage.removeItem('patient')
                sessionStorage.removeItem('auth')
                window.location.href = "login"
            }
            return Promise.reject(error)
        }
    )
 }