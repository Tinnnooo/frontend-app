import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/";

const api = axios.create({
    baseURL: API_URL,
});

export const loginSociety = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        const { token } = response.data;

        localStorage.setItem('token', token);
        return response.data;
    } catch (error) {
        throw error;
    }
}