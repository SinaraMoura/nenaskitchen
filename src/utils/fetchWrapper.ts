import axios from 'axios';
export const fetchWrapper = async (url: string) => {
    const response = await axios.get(`http://localhost:3333${url}`);
    const data = await response.data;
    return data;
};