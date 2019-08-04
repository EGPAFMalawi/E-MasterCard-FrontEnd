import { authResource } from '../../../authResource'
import { start } from 'pretty-error';

const state = {
    concepts: {},
    encounters:[],
    observations: {},
}

const getters = {
    concepts: ({concepts}) => concepts,
    startDate: ({startDate}) => startDate
}

const mutations = {
    setConcepts: (state, concepts) => (
        state.concepts = concepts
    ),
    setStartDate: (state, startDate) => (
        state.startDate = startDate
    )
}
 
const actions = {
    loadConcepts({commit}, data){
        commit('setConcepts', data)
    },
    loadARTstartDate({commit}, data){
        commit('setStartDate', data)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}

// observations['concept32Encounter'+encounter.encounterID].value