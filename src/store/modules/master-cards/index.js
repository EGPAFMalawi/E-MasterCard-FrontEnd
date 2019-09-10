import {authResource}  from '../../../authResource'
import initiationConfirmatory from './initiation-confirmatory'

const state = {
    searchParam: '',
    dateOfFirstStartingART: null, //maps to ART StartDate concept
    ageAtARTInit: null, //maps to ageAtInit concept
    period: null, // map to age at init period concept

    patients: [],
    patient: [],
    regPatientId: null,
    patientCard: {},
    patientCardData: [],
    initiationData: {},
    registrationData: null,
    masterCardDetails: {},
    testDate: null,
    startDate: null,
    regStartDate: null,
    regimens: [
        {
            title: '0A (ABC 600 / 3TC 300 + NVP 200)',
            value: '0A'
        },
        {
            title: '1A (d4T 30/3TC 150 / NVP 200)',
            value: '1A'
        },
        {
            title: '2A (AZT 300 / 3TC 150/ NVP 200)',
            value: '2A'
        },
        {
            title: '3A (d4T 30/3TC 150 + EFV 600)',
            value: '3A'
        },
        {
            title: '4A (AZT 300 / 3TC 150 + EFV 600)',
            value: '4A'
        },
        {
            title: '5A (TDF 300 / 3TC 300 /EFV 600)',
            value: '5A'
        },
        {
            title: '6A (TDF 300 / 3TC 300 + NVP 200)',
            value: '6A'
        },
        {
            title: '7A (TDF 300 / 3TC 300 + ATV/r 300/100)',
            value: '7A'
        },
        {
            title: '8A (AZT 300 / 3TC 150 + ATV/r 300/100)',
            value: '8A'
        },
        {
            title: '9A (ABC 600 / 3TC 300 + LPV/r 200/50)',
            value: '9A'
        },
        {
            title: '10A (TDF 300 / 3TC 300 + LPV/r 200/50)',
            value: '10A'
        },
        {
            title: '11A (AZT 300 / 3TC 150 + LPV/r 200/50)',
            value: '11A'
        },
        {
            title: '12A (DRV 600 + r 100+ DTG 50 [+-NRTIs])',
            value: '12A'
        },
        {
            title: '13A (TDF 300 / 3TC 300 / DTG 50)',
            value: '13A'
        },
        {
            title: '14A  (AZT 300 / 3TC 300 + DTG 50)',
            value: '14A'
        },
        {
            title: '15A (ABC 600 / 3TC 300 + DTG 50)',
            value: '15A'
        },
        {
            title: 'Other',
            value: 'Other'
        },
    ],
    regimensPeads: [
        {
            title: '0P (ABC 60 / 3TC 30 + NVP 50)',
            value: '0P'
        },
        {
            title: '1P (d4T 6 / 3TC 30 / NVP 50)',
            value: '1P'
        },
        {
            title: '2P (AZT 60 / 3TC 30/ NVP 50)',
            value: '2P'
        },
        {
            title: '3P (d4T 6 / 3TC 30 + EFV 200)',
            value: '3P'
        },
        {
            title: '4P (AZT 60 / 3TC 30 + EFV 200)',
            value: '4P'
        },
        {
            title: '9P (ABC 60 / 3TC 30 + LPV/r 100/25)',
            value: '9P'
        },
        {
            title: '11P (AZT 60 / 3TC 30 + LPV/r 100/50)',
            value: '11P'
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
    regimensPeads: ({regimensPeads}) => regimensPeads,
    masterCardDetails: state => state.masterCardDetails,
    dateOfFirstStartingART: ({dateOfFirstStartingART}) => dateOfFirstStartingART, //maps to ART StartDate concept
    ageAtARTInit: ({ageAtARTInit}) => ageAtARTInit, //maps to ageAtInit concept
    period: ({period}) => period, //maps to ageAtInit period concept 
    testDate: ({testDate}) => testDate,
    startDate: ({startDate}) => startDate,
    regStartDate: ({regStartDate}) => regStartDate,
    registrationData: ({registrationData}) => registrationData
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
    setAgePeriod({commit}, param){
        commit('setAgePeriod', param)
    },
    setDateOfFirstStartingART({commit}, param){
        commit('setDOFSA', param)
    },
    setSearchParam({commit}, param){
        commit('setParam', param)
        return Promise.resolve(param)
    },
    clearPatients({commit}){
        commit('setPatients', [])
    },
    searchPatients({commit}, data) {
        // try {
            //const {data: {data}} = await authResource().post(endpoint, payload)
            commit('setPatients', data)
        // }
        // catch(error){
        //     console.error(error)
        // }
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
    },
    async reloadPatient({commit}, url){
        try {
            const {data: {data}} = await authResource().get(url)
            commit('setPatient', data)
        }
        catch(error){
           // eslint-disable-next-line no-console
           console.error(error)
        }
    },
    setRegistrationData({commit}, param){
        commit('setRegistrationData', param)
    }
}

const mutations = {
    setParam: (state, searchParam) => (
        state.searchParam = searchParam
    ),
    setRegistrationData: (state, registrationData) => (
        state.registrationData = registrationData
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
    setAgePeriod: (state, period) => {
        state.period = period
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