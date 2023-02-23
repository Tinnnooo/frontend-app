import { ActionType } from "./action";

function spotDetailReducer(spotDetail = [], action = {}){
    switch (action.type) {
        case ActionType.GET_SPOT_DETAIL:
            return action.payload.spotDetail;
        default:
            return spotDetail;
    }
}

export default spotDetailReducer;