import axios from 'axios'

const authResource = () => {

    let basicAuthToken = sessionStorage.getItem('basicAuthToken');

    const defaultOptions = {
        headers: {
            "Authorization" : `Basic ${basicAuthToken}`
        },
    };

    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    };
};

export default authResource;
