import { hideLoading, showLoading } from "react-redux-loading-bar";
import { addRegisterVaccination } from "../../utils/api";

const ActionType = {
    GET_VACCINATIONS: 'GET_VACCINATIONS',
    ADD_VACCINATIONS: 'ADD_VACCINATIONS',
};

function getVaccinationsActionCreator(vaccinations){
    return {
        type: ActionType.GET_VACCINATIONS,
        payload: {
            vaccinations,
        },
    };
}

function addRegisterVaccinationActionCreator(vaccination){
    return {
        type: ActionType.ADD_VACCINATIONS,
        payload: {
            vaccination,
        },
    };
}

function asyncAddRegisterVaccination({date, spot_id} = {}){
    return async (dispatch ) => {
        dispatch(showLoading());
        
        try {
            const vaccination = await addRegisterVaccination({date, spot_id});
            alert(vaccination.data.message);
            dispatch(addRegisterVaccinationActionCreator(vaccination));
        } catch (error){
            alert(error.message);
        };

        dispatch(hideLoading());
    }
}


export {
    ActionType,
    getVaccinationsActionCreator,
    addRegisterVaccinationActionCreator,
    asyncAddRegisterVaccination,
}