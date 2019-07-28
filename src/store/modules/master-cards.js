import {authResource}  from '../../authResource'

const state = {
    patients: [],
    patient: [],
    initiationData: {},
    visits: [],
    registrationData: {},
    steps: [],
    step: {}
}

const getters = {
    patients: state => state.patients,
    patient: state => state.patient
}

const actions = {
    async searchPatients({commit}, {endpoint, payload}) {
        try {
            const {data: {data}} = await authResource().post(endpoint, payload)
            commit('setPatients', data)
        }
        catch(error){
            console.error(error)
        }
    },
    async selectPatient({commit}, patient){
        console.log(patient)
        commit('setPatient', patient)
    }
}

const mutations = {
    setPatients: (state, patients) => (state.patients = patients),
    setPatient: (state, patient) => (state.patient = patient)
}

export default {
    state,
    getters,
    actions,
    mutations
}