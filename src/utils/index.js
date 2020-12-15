import axios from 'axios';
import { apiUrl, appUrl } from '../config/vars';

const tokenName = 'token';

export const token = {
    set: (value) => sessionStorage.setItem(tokenName, value),
    get: () => sessionStorage.getItem(tokenName) || '',
    remove: () => sessionStorage.removeItem(tokenName),
}

export const getDraws = async (url, { success, fail }) => {
    try {
        const result = await axios.get(`${apiUrl}${url}`);

        if (result.statusText === 'OK') {
            success(result);
        }

    } catch (error) {
        fail(error);
    }
}

export const addDraw = async ({ data, success, fail }) => {
    try {
        const result = await axios(`${apiUrl}/draws`, {
            method: 'post',
            responseType: 'json',
            headers: {
                'Authorization': `Bearer ${token.get()}`,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
        });

        if (result.statusText === 'Created') {
            console.log(result)
            success(result);
        }

    } catch (error) {
        fail(error);
    }
}

export const verifyToken = () => {
    return axios(`${apiUrl}/auth/veryfication`, {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token.get()}`
        }
    });
}

export const login = ({username, password}) => {
    return axios(`${apiUrl}/auth/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({username, password})
    });
}

export const logout = () => {
    // sessionStorage.removeItem
}

export const requestAction = async (url, { before, success = null, fail = null }) => {
    try {
        if (typeof before === 'function') {
            before();
        }

        let result = null;

        if (url.search('http') !== -1 || url.search('https') !== -1) {
            result = await axios.get(url);
        } else {
            result = await axios.get(`${apiUrl}${url}`);
        }

        if (success) {
            success(result);
        }

    } catch (error) {
        if (fail) {
            fail(error);
        }
    }
}

export const redirect = (url, replace = true) => {
    if (replace) {
        window.location.replace(`${appUrl}${url}`);
    }

    window.location.href = `${appUrl}${url}`;
}
