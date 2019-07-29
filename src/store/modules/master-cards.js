import {authResource}  from '../../authResource'

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
    concepts: [],
    masterCardDetails: {}
}

const getters = {
    patients: state => state.patients,
    patient: state => state.patient,
    patientCardData: state => state.patientCardData,
    patientCard: state => state.patientCard,

    masterCardDetails: state => state.masterCardDetails
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
    },
    async createPatientCard({commit}, {url, payload}) {
        return new Promise(async (resolve, reject) => {
            try {
                const {data: {data}} = await authResource().post(url, payload)
                commit('setPatientCard', data)
                resolve('Successfully created new card!')
            }
            catch(error){
               reject(error)
            }
        })
    },
    mutatePatientCard ({commit}, data){
        commit('setPatientCard', data)
    },

    loadMasterCardDetails({commit}, {url}){
        return new Promise(async (resolve, reject) => {
            try {
                const {data: {data}} = await authResource().get(url)
                commit('setMasterCardDetails', data)
                resolve('MasterCard Details Loaded!')
            }
            catch(error){
               reject(error)
            }
        })
    }
}

const mutations = {
    setPatients: (state, patients) => (state.patients = patients),
    setPatient: (state, patient) => (state.patient = patient),
    setPatientCardData: (state, patientCardData) => (
        state.patientCardData.push(...patientCardData)
        
    ),
    resetCardData: (state, patientCardData) => (
        state.patientCardData = patientCardData
    ),
    setPatientCard: (state, patientCard) => (
        state.patientCard = patientCard
    ),
    setMasterCardDetails: (state, masterCardDetails) => (
        state.masterCardDetails = masterCardDetails
    )
}

export default {
    state,
    getters,
    actions,
    mutations
}