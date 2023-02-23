import { ActionType } from "./action";

function consultationsReducer(consultations = [], action = {}){
    switch (action.type){
        case ActionType.GET_CONSULTATION:
            return action.payload.consultations;
        case ActionType.ADD_CONSULTATION:
            return [...consultations, action.payload.consultation];
        default:
            return consultations;
    };
}

export default consultationsReducer;