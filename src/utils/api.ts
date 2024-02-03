import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://nenas-kitchen-api.onrender.com',
    baseURL: 'http://localhost:3333',
    timeout: 10000,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
})

export { api }