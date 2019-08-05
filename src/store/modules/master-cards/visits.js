import { authResource } from '../../../authResource'
import { start } from 'pretty-error';

const state = {
    // concepts: {
    //     concept32 : '',
    //     concept33 : '',
    //     concept34 : '',
    //     concept35 : '',
    //     concept36 : '',
    //     concept37 : '',
    //     concept38 : '0',
    //     concept39 : '',
    //     concept40 : '',
    //     concept41 : '',
    //     concept42 : '',
    //     concept43 : '',
    //     concept44 : '',
    //     concept45 : '',
    //     concept46 : '',
    //     concept47 : '',
    //     concept48 : '',
    //     concept49 : '',
    //     concept50 : '',
    //     concept51 : '',
    //     concept52: '',
    //     concept53 : '',
    // },
    encounters:[],
    observations: {},
    visitData: [],
}

const getters = {
    concepts: ({concepts}) => concepts,
    startDate: ({startDate}) => startDate,
    visitData: ({visitData}) => visitData,
}

const mutations = {
    setConcepts: (state, concepts) => (
        state.concepts = concepts
    ),
    setStartDate: (state, startDate) => (
        state.startDate = startDate
    ),
    setVisitData: (state, visitData) => (
        state.visitData.push(...visitData)
    ),
    resetCardData: (state, visitData) => (
        state.visitData = visitData
    ),
}
 
const actions = {
    loadConcepts({commit}, data){
        commit('setConcepts', data)
    },
    loadARTstartDate({commit}, data){
        commit('setStartDate', data)
    },
    loadVisitData({commit}, {url, payload}) {
        return new Promise( async (resolve, reject) => {
            try {
                const {data: {data}} = await authResource().post(url, payload)
                console.log(state)
                commit('setVisitData', data)

                resolve(data)
            }
            catch(error){
                reject(error)
            }
        })
    },
    resetVisitData({commit}){
        commit('resetCardData', [])
    },
}

export default {
    state,
    mutations,
    getters,
    actions
}

// observations['concept32Encounter'+encounter.encounterID].value