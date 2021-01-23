const tokenName = 'token';

export const setToken = (value) => sessionStorage.setItem(tokenName, value);
export const getToken = () => sessionStorage.getItem(tokenName) || '';
export const removeToken = () => sessionStorage.removeItem(tokenName);

