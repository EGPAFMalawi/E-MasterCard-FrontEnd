import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
 

import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/main.css'
import VeeValidate from 'vee-validate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faLock, faCheck, faSearch, faPlus, faSave} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueIziToast from "vue-izitoast";
import handleErrors from './helpers/handleErrors'


import "izitoast/dist/css/iziToast.css";

Vue.use(VueIziToast);

Vue.config.silent = true // show : hide erros in console
handleErrors()
library.add(faSpinner, faLock, faCheck, faSearch, faPlus, faSave)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {
    classes:true
});



Vue.use(require('vue-moment'))

//Vue.config.productionTip = false

Vue.mixin({
    data : function()
    {
        return {
            APIHosts : {
                art : 'http://localhost:8000/api/v1',
                dhis : 'http://196.216.12.28:81/api'
            },
            messageStr: 'Hello'
        }
    },
    methods: {
        logout(){   
                sessionStorage.removeItem('patient')
                sessionStorage.removeItem('auth')
                this.$router.push('/login')
        },
        openFullscreen(elem) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen().catch(err => {})
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        }
              
    },
    created(){
        const elem = document.documentElement
        this.openFullscreen(elem)
    }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
