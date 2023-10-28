import axios from 'axios';
export const fetchWrapper = async (url: string, options: any) => {
    const response = await axios.get(`https://nenas-kitchen-api.onrender.com${url}`, options);
    // const response = await axios.get(`http://localhost:3333${url}`, options);
    const data = await response.data;
    return data;
};