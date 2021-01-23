import { fetchUtils } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { getToken } from './utils/token';
import { apiUrl } from "./config/vars";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers();
    }
    
    options.headers.set('Authorization', `Bearer ${getToken()}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = restProvider(`${apiUrl}/admin`, httpClient)

export default dataProvider;
