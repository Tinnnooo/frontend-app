import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/v1";

const apiUrl = axios.create({
    baseURL: API_URL,
});

async function _fetchWithAuth(url, options = {}) {
    try{
        const token = getAccessToken();
        const response = await axios.get(url, {
            params: {
                token
            },
            headers : {
                ...options.header,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

function putAccessToken(token){
    localStorage.setItem('login_tokens', token);
}

function getAccessToken(){
    return localStorage.getItem('login_tokens');
}

async function logout(){
    const token = getAccessToken();
    
    const response = await axios.post(`${API_URL}/auth/logout?token=${token}`,{
        params: {
            token,
        }
    });

    return response;
}

async function login({id_card_number, password}){
    const response = await axios.post(`${API_URL}/auth/login`, {
            id_card_number,
            password,
    });

    const token = response.data.token;

    return token;
}

async function getOwnSociety(){
    const response = await _fetchWithAuth(`${API_URL}/society`);

    // const responseJson = await response.json(); 

    const {status, message} = response;

    if(status !== 'success'){
        throw new Error(message);
    }

    const {data: {society}} = response;

    return society;
}

async function getOwnConsultation(){
    const response = await _fetchWithAuth(`${API_URL}/consultations`);

    const {data} = response;

    return data;
}

async function getOwnVaccination(){
    const response = await _fetchWithAuth(`${API_URL}/vaccinations`);

    const {vaccinations} = response;

    return vaccinations;
}

export {
    getOwnSociety,
    apiUrl,
    login,
    putAccessToken,
    getAccessToken,
    logout,
    getOwnConsultation,
    getOwnVaccination,
};