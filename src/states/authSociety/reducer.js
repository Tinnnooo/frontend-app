import { ActionType } from "./action";

function authSocietyReducer(authSociety = null, action = {}){
    switch (action.type){
        case ActionType.SET_AUTH_SOCIETY:
            return action.payload.authSociety;
        case ActionType.UNSET_AUTH_SOCIETY:
            return null;
        default:
            return authSociety;
    }
}

export default authSocietyReducer;