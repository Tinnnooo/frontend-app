import { ActionType } from "./action";

function consultationsReducer(consultations = [], action = {}){
    switch (action.type){
        case ActionType.GET_CONSULTATION:
            return action.payload.consultations;
        default:
            return consultations;
    };
}

export default consultationsReducer;