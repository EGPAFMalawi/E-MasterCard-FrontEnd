import {authResource}  from '../../../authResource'
import initiationConfirmatory from './initiation-confirmatory'

const state = {
    searchParam: '',
    dateOfFirstStartingART: null, //maps to ART StartDate concept
    ageAtARTInit: null, //maps to ageAtInit concept
    patients: [],
    patient: [],
    regPatientId: null,
    patientCard: {},
    patientCardData: [],
    initiationData: {},
    registrationData: {},
    masterCardDetails: {},
    testDate: null,
    startDate: null,
    regStartDate: null,
    regimens: [
        {
            title: '0A (ABC600 / 3TC300 + NVP200)',
            value: '0A'
        },
        {
            title: '1A',
            value: '1A'
        },
        {
            title: '2A (AZT300 / 3TC150 + NVP200)',
            value: '2A'
        },
        {
            title: '3A',
            value: '3A'
        },
        {
            title: '4A (AZT300 / 3TC150 + EFV600)',
            value: '4A'
        },
        {
            title: '5A (TDF300 / 3TC300 + EFV600)',
            value: '5A'
        },
        {
            title: '6A (TDF300 / 3TC300 + NVP200)',
            value: '6A'
        },
        {
            title: '7A (TDF300 / 3TC300 + ATV/r300/100)',
            value: '7A'
        },
        {
            title: '8A (AZT300 / 3TC150 + ATV/r300/100)',
            value: '8A'
        },
        {
            title: '9A (ABC600 / 3TC300 + LPV/r200/50)',
            value: '9A'
        },
        {
            title: '10A (TDF300 / 3TC300 + LPV/r200/50)',
            value: '10A'
        },
        {
            title: '11A (AZT300 / 3TC150 + LPV/r200/50)',
            value: '11A'
        },
        {
            title: '12A (DRV600 + r100 + DTG50(+-NRTIs)',
            value: '12A'
        },
        {
            title: '13A (TDF300 / 3TC300 / DTG50',
            value: '13A'
        },
        {
            title: '14A (AZT 300 / 3TC300 + DTG50)',
            value: '14A'
        },
        {
            title: '15A (ABC600 / 3TC300 + DTG50',
            value: '15A'
        },
        {
            title: 'Other',
            value: 'Other'
        },
    ]
}

const getters = {
    regPatientId: ({regPatientId}) => regPatientId,
    searchParam: ({searchParam}) => searchParam,
    patients: state => state.patients,
    patient: state => state.patient,
    patientCardData: state => state.patientCardData,
    patientCard: state => state.patientCard,
    regimens: ({regimens}) => regimens,
    masterCardDetails: state => state.masterCardDetails,
    dateOfFirstStartingART: ({dateOfFirstStartingART}) => dateOfFirstStartingART, //maps to ART StartDate concept
    ageAtARTInit: ({ageAtARTInit}) => ageAtARTInit, //maps to ageAtInit concept
    testDate: ({testDate}) => testDate,
    startDate: ({startDate}) => startDate,
    regStartDate: ({regStartDate}) => regStartDate,
}

const actions = {
    setTestDate({commit}, param){
        commit('setTestDate', param)
    },
    setRegPatientId({commit}, param){
        commit('setRegPatientId', param)
    },
    setStartDate({commit}, param){
        commit('setStartDate', param)
    },
    setRegStartDate({commit}, param){
        commit('setRegStartDate', param)
    },
    setAgeAtARTInit({commit}, param){
        commit('setARTInitAge', param)
    },
    setDateOfFirstStartingART({commit}, param){
        commit('setDOFSA', param)
    },
    setSearchParam({commit}, param){
        commit('setParam', param)
    },
    clearPatients({commit}){
        commit('setPatients', [])
    },
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
    loadPatientCardData({commit}, {url, payload}) {
        return new Promise( async (resolve, reject) => {
            try {
                const {data: {data}} = await authResource().post(url, payload)
                commit('setPatientCardData', data)
                resolve('Patient Data loaded')
            }
            catch(error){
                reject(error)
            }
        })
    },
    resetPatientCardData({commit}){
        commit('resetCardData', [])
    },
    createPatientCard({commit}, {url, payload}) {
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
    setParam: (state, searchParam) => (
        state.searchParam = searchParam
    ),
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
    ),
    setDOFSA: (state, dateOfFirstStartingART) => {
        state.dateOfFirstStartingART = dateOfFirstStartingART
    },
    setARTInitAge: (state, ageAtARTInit) => {
        state.ageAtARTInit = ageAtARTInit
    },
    setTestDate: (state, testDate) => {
        state.testDate = testDate
    },
    setStartDate: (state, startDate) => {
        state.startDate = startDate
    },
    setRegStartDate: (state, regStartDate) => {
        state.regStartDate = regStartDate
    },
    setRegPatientId: (state, regPatientId) => {
        state.regPatientId = regPatientId
    }
}

const modules = {
    initiationConfirmatory
}
export default {
    state,
    getters,
    actions,
    mutations,
    modules
}