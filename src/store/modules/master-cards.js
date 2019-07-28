import {authResource}  from '../../authResource'
import { resolve } from 'any-promise';
import { async } from 'q';

const state = {
    patients: [],
    patient: [],
    patientCard: {},
    patientCardData: [],
    initiationData: {},
    visits: [],
    registrationData: {},
    steps: [],
    step: {},
    concepts: []
}

const getters = {
    patients: state => state.patients,
    patient: state => state.patient,
    patientCardData: state => state.patientCardData
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
    },
    async loadPatientCardData({commit}, {url, payload}) {
        return new Promise( async (resolve, reject) => {

            try {
                const {data: {data}} = await authResource().post(url, payload)
                commit('setPatientCardData', data)

            }
            catch(error){
                reject(error)
            }
        })
    },
    resetPatientCardData({commit}){
        commit('resetCardData', [])
    }
    // async createPatientCardData({commit}, {endpoint, payload}) {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const {data: {data}} = await authResource().post(endpoint, payload)
    //             commit('setPatients', data)
    //         }
    //         catch(error){
    //             console.error(error)
    //         }
    //     }
    // }
}

const mutations = {
    setPatients: (state, patients) => (state.patients = patients),
    setPatient: (state, patient) => (state.patient = patient),
    setPatientCardData: (state, patientCardData) => (
        state.patientCardData.push(...patientCardData)
        
    ),
    resetCardData: (state, patientCardData) => (
        state.patientCardData = patientCardData
    )
}

export default {
    state,
    getters,
    actions,
    mutations
}