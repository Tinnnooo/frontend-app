import { hideLoading, showLoading } from "react-redux-loading-bar";
import { addRegisterVaccination, addVaccination, getSpotDetailWithDate } from "../../utils/api";

const ActionType = {
    GET_SPOT_DETAIL: "GET_SPOT_DETAIL",
    ADD_VACCINATION: "ADD_VACCINATION",
};

function getSpotDetailActionCretor(spotDetail){
    return {
        type: ActionType.GET_SPOT_DETAIL,
        payload: {
        spotDetail,
        },
    };
};

function asyncGetSpotDetail(id, date){
    return async (dispatch) => {
        dispatch(showLoading());

        try{
            const spotDetail = await getSpotDetailWithDate(id, date);
            dispatch(getSpotDetailActionCretor(spotDetail));
        } catch (error){
            alert(error.message);
        }

        dispatch(hideLoading());
    }
}

export {
    ActionType,
    getSpotDetailActionCretor,
    asyncGetSpotDetail,
}