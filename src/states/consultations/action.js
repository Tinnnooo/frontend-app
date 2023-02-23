import { hideLoading, showLoading } from "react-redux-loading-bar";
import { addConsultation } from "../../utils/api";

const ActionType = {
    GET_CONSULTATION: 'GET_CONSULTATION',
    ADD_CONSULTATION: 'ADD_CONSULTATION',
};

function getConsultationsActionCreator(consultations){
    return {
        type: ActionType.GET_CONSULTATION,
        payload: {
            consultations,
        },
    };
}

function addConsultationActionCreator(consultation){
    return {
        type: ActionType.ADD_CONSULTATION,
        payload: {
            consultation,
        },
    };
}

function asyncAddConultation({disease_history, current_symptoms}) {
    return async (dispatch) => {
        dispatch(showLoading());

        try {
            const consultation = await addConsultation({disease_history, current_symptoms})
            alert(consultation.message);
            dispatch(addConsultationActionCreator(consultation));
        } catch (error){
            alert(error.message);
        }

        dispatch(hideLoading());

    };
}

export {
    ActionType,
    getConsultationsActionCreator,
    addConsultationActionCreator,
    asyncAddConultation,
};
