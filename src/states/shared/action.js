import { hideLoading, showLoading } from "react-redux-loading-bar"
import { getOwnConsultation, getOwnSociety, getOwnVaccination } from "../../utils/api";
import { getConsultationsActionCreator } from "../consultations/action";
import { getSocietyActionCreator } from "../societies/action";


function asyncPopulateSocietyAndConsultations(){
    return async (dispatch) => {
        dispatch(showLoading());

        try {
            const consultations = await getOwnConsultation();

            dispatch(getConsultationsActionCreator(consultations));
        } catch (error){
            console.error(error.message);
        }
        dispatch(hideLoading());
    }
}

function asyncPopulateVaccinations(){
    return async (dispatch) => {
        dispatch(showLoading());

        try {
            const vaccinations = await getOwnVaccination();

        } catch (error) {
            console.error(error.message);
        }
        dispatch(hideLoading());
    }
}

export {
    asyncPopulateSocietyAndConsultations,
    asyncPopulateVaccinations,
}