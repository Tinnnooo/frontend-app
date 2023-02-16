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


export {
    ActionType,
    getConsultationsActionCreator,
};
