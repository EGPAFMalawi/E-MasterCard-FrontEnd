import {authResource} from './../authResource'

export const countAll = (url, payload) => {
   let endpoint = `${url}/counts?code=${payload.code}&type=${payload.type}`
    return new Promise((resolve, reject) => {
        
        authResource().get(endpoint)
            .then(({data: {data: {counts}}})=>{
                resolve(JSON.parse(JSON.stringify({counts})))
            })
            .catch((error)=> reject(error))
    })
}

export const loadAll = (url, payload) => {
    let endpoint = `${url}/patients?code=${payload.code}&type=${payload.type}`

    return new Promise((resolve, reject) => {

        authResource().get(endpoint)
            .then(({data: {data: {patients}}})=>{
                resolve(JSON.parse(JSON.stringify(patients)))
            })
            .catch((error)=> reject(error))
    })
}