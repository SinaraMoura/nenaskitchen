import axios from 'axios';
import FormData from 'form-data';

const api = axios.create({
    baseURL: 'https://nenas-kitchen-api.onrender.com',
    // baseURL: 'http://localhost:3333',
    timeout: 10000,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
})

// api.interceptors.request.use(config => {
//     if (config.data instanceof FormData) {
//         Object.assign(config.headers, config.data.getHeaders());
//     }
//     return config;
// });
export { api }