import { hideLoading, showLoading } from "react-redux-loading-bar"
import { getOwnConsultation, getOwnVaccination, getSpotByRegion } from "../../utils/api";
import { getConsultationsActionCreator } from "../consultations/action";
import { getSpotRegionActionCreator } from "../spots/action";
import { getVaccinationsActionCreator } from "../vaccinations/action";


function asyncPopulateSocietyAndConsultations(){
    return async (dispatch) => {
        dispatch(showLoading());

        try {
            const consultations = await getOwnConsultation();

            dispatch(getConsultationsActionCreator(consultations));
        } catch (error){
            alert(error.message);
        }
        dispatch(hideLoading());
    }
}

function asyncPopulateVaccinations(){
    return async (dispatch) => {
        dispatch(showLoading());

        try {
            const vaccinations = await getOwnVaccination();

            dispatch(getVaccinationsActionCreator(vaccinations));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    }
}

function asyncPopulateSpots(){
    return async (dispatch) => {
        dispatch(showLoading());

        try{
            const spots = await getSpotByRegion();

            dispatch(getSpotRegionActionCreator(spots));
        } catch (error) {
            alert(error.message);
        }
        
        dispatch(hideLoading());
    }
}

export {
    asyncPopulateSocietyAndConsultations,
    asyncPopulateVaccinations,
    asyncPopulateSpots,
}