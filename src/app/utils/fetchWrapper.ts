import axios from 'axios';
export const fetchWrapper = async (url: string, options: any) => {
    // https://nenas-kitchen-api.onrender.com${url}
    const response = await axios.get(`https://nenas-kitchen-api.onrender.com${url}`, options);
    const data = await response.data;
    return data;
};