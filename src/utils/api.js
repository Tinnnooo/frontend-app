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

async function login({id_card_number, password}){
    const response = await axios.post(`${API_URL}/login`, {
        body: JSON.stringify({
            id_card_number,
            password,
        }),
    });

    const token = response.token;

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

export {
    getOwnSociety,
    apiUrl,
    login,
    putAccessToken,
    getAccessToken,
};