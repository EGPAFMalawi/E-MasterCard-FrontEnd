import {authResource} from '../../../authResource'

const state = {
    site: {
        code: null,
        facilityID: null,
        text: null,
        value: null
    },
    isMDF: false
}

const getters = {
    site: ({site}) => site,
    isMDF: ({isMDF}) => isMDF
}

const mutations = {
    setSite: (state, site) => (
        state.site = site
    ),
    setMDF: (state, isMDF) => (
        state.isMDF = isMDF
    )
}

const actions = {
    setSite({commit}, params){
        commit('setSite', params)
    },
    setMDF({commit}, params){
        commit('setMDF', params)
    },
    async loadSettings({commit}, url){
        try {
            const {data: {data}} = await authResource().get(url)
            const site = data[0].options
            commit('setSite', site)

            const mdf = data[1].options.active
            commit('setMDF', mdf)
        }
        catch(error){
            console.error(error)
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

