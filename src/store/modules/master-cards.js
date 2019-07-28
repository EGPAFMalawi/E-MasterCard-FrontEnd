import {authResource}  from '../../authResource'
import { resolve } from 'any-promise';

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
        commit('setPatient', patient)
    },
    patchPatient({commit}, {endpoint, payload}){
        return new Promise(async (resolve, reject) => {
            try {
                const {data: {data}} = await authResource().patch(endpoint, payload)
                commit('setPatient', data)
                resolve('Patient details updated!')
            }
            catch(error){
                reject(error)
            }
        })
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