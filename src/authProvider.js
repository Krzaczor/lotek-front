import { login, verifyToken } from './utils/index';
import { setToken, removeToken } from './utils/token';

const authProvider = {
    login: (params) => {
        return login(params)
            .then(response => {
                setToken(response.data.token);
                return Promise.resolve();
            })
            .catch(error => {
                return Promise.reject(error);
            })
    },
    logout: () => {
        removeToken();
        return Promise.resolve();
    },
    checkAuth: () => {
        return verifyToken()
            .then(res => Promise.resolve())
            .catch(error => Promise.reject())
    },
    checkError: error => Promise.reject(),
    getPermissions: params => Promise.resolve(),
    getIdentity: () => Promise.resolve({id: 1, fullName: 'User'}),
};

export default authProvider;
