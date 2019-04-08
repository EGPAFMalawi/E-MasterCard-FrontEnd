import axios from 'axios'

const authResource = () => {

    let auth = JSON.parse(sessionStorage.getItem('auth'));


    const defaultOptions = {
        headers: {
            "Authorization" : `Bearer ${auth.accessToken}`
        },
    };

    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    };
};

export default authResource;
