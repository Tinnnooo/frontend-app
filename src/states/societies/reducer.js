import { ActionType } from "./action";

function societyReducer(society = [], action = {}){
    switch (action.type) {
        case ActionType.GET_SOCIETY:
            return action.payload.society;
        default:
            return society;
    };
}

export default societyReducer;