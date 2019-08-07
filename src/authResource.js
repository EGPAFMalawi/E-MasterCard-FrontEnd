import axios from 'axios'
import { async } from 'q';

export const authResource = () => {
    const auth = JSON.parse(sessionStorage.getItem('auth'));

    const defaultOptions = {
        headers: {
            "Authorization" : `Bearer ${auth.accessToken}`
        },
    };

    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        patch: (url, data, options = {}) => axios.patch(url, data, {...defaultOptions, ...options })
    };
}
