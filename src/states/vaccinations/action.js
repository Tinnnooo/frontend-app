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

export {
    ActionType,
    getVaccinationsActionCreator,
}