import { ActionType } from "./action";

function spotsReducer(spots = [], action = {}){
    switch (action.type) {
        case ActionType.GET_SPOT_REGION:
            return action.payload.spots;
        default:
            return spots;
    }
}

export default spotsReducer;