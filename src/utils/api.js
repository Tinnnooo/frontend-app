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
        throw new Error(error.response.data.message);
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

    try {
        const response = await axios.post(`${API_URL}/auth/logout?token=${token}`,{
            params: {
                token,
            }
        });
    
        return response;
    } catch (error){
        throw new Error(error.response.data.message);
    }
    
}

async function login({id_card_number, password}){
    try{
        const response = await axios.post(`${API_URL}/auth/login`, {
            id_card_number,
            password,
        });

        const token = response.data.token;

        return token;
    } catch (error){
        throw new Error(error.response.data.message);
    }
    
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

    try{
        const response = await _fetchWithAuth(`${API_URL}/consultations`);

        const {data} = response;
    
        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
    

}

async function getOwnVaccination(){
    try{
        const response = await _fetchWithAuth(`${API_URL}/vaccinations`);

        const {vaccinations} = response;
    
        return vaccinations;
    } catch (error){
        throw new Error(error.response.data.message);
    }
}

async function addConsultation({disease_history, current_symptoms}){
    const token = getAccessToken();

    try {
        const response = await axios.post(`${API_URL}/consultations`, {
            disease_history,
            current_symptoms,
        },{
            params: {
                token,
            },
        });
        return response.data;
    } catch (error){
        throw new Error(error.response.data.message) 
    }
}

async function getSpotByRegion(){
    const token = getAccessToken();

    try {
        const response = await axios.get(`${API_URL}/spots`, {
            params:{
                token,
            },
        });

        const {data: {spots}} = response;

        return spots;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

async function getSpotDetailWithDate(id, date){
    const token = getAccessToken();
    try{
        const response = await axios.get(`${API_URL}/spots/${id}`, {
            params: {
                token,
                date
            }
        });
        const {data} = response;

        return data;
    } catch (error){
        throw new Error(error.response.data.message);
    }
}

async function addRegisterVaccination({date, spot_id} = {}){
    const token = getAccessToken();
    try {
        const response = await axios.post(`${API_URL}/vaccinations`, {
            date,
            spot_id,
        },{
            params: {
                token,
            },
        });
        return response;
    } catch (error){
       throw new Error(error.response.data.message);
    }
}



export {
    getOwnSociety,
    login,
    putAccessToken,
    getAccessToken,
    logout,
    getOwnConsultation,
    getOwnVaccination,
    addConsultation,
    getSpotByRegion,
    getSpotDetailWithDate,
    addRegisterVaccination
};