import Vuex from 'vuex'
import Vue from 'vue'
import masterCards from './modules/master-cards'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { masterCards }
})