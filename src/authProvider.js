import { login, verifyToken, token } from './utils/index';

const authProvider = {
    login: (params) => {
        return login(params)
            .then(response => {
                token.set(response.data.token);
                return Promise.resolve();
            })
            .catch(error => {
                return Promise.reject();
            })
    },
    logout: () => {
        token.remove();
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
