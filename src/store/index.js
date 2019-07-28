import Vuex from 'vuex'
import Vue from 'vue'
import masterCards from './modules/master-cards'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: { masterCards },
    plugins: [createPersistedState()],
})