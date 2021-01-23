import axios from 'axios';
import { getToken, removeToken } from './token';
import { apiUrl, appUrl } from '../config/vars';

export const getDraws = async (url) => {
    return await axios.get(`${apiUrl}${url}`);
}

export const verifyToken = async () => {
    return await axios(`${apiUrl}/auth/veryfication`, {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    });
}

export const login = async ({username = '', password = ''}) => {
    return await axios(`${apiUrl}/auth/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({username, password})
    });
}

export const logout = () => {
    removeToken();
}

export const redirect = (url, replace = true) => {
    if (replace) {
        window.location.replace(`${appUrl}${url}`);
    }

    window.location.href = `${appUrl}${url}`;
}
