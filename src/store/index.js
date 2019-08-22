import Vuex from 'vuex'
import Vue from 'vue'
import masterCards from './modules/master-cards'
import settings from './modules/settings'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: { masterCards, settings },
    plugins: [createPersistedState()]
})

