import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import './assets/css/other.css'
import 'bootstrap-4-grid/css/grid.min.css'
import VeeValidate from 'vee-validate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faLock, faCheck, faSearch, faPlus, faSave} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faLock, faCheck, faSearch, faPlus, faSave)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VeeValidate, {
    classes:true
});

Vue.config.productionTip = false

Vue.mixin({
    data : function()
    {
        return {
            APIHosts : {
                art : 'http://localhost:8000/api',
                dhis : 'http://196.216.12.28:81/api'
            }
        }
    }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
