import { fetchUtils } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { token } from './utils/index';
import { apiUrl } from "./config/vars";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json text/plain' });
    }
    
    options.headers.set('Authorization', `Bearer ${token.get()}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = restProvider(apiUrl, httpClient)

export default dataProvider;
