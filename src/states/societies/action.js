const ActionType = {
    GET_SOCIETY: 'GET_SOCIETY',
};

function getSocietyActionCreator(society){
    return {
        type: ActionType.GET_SOCIETY,
        payload: {
            society,
        },
    };
}

export {
    ActionType,
    getSocietyActionCreator,
}