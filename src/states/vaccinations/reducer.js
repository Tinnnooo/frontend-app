import { ActionType } from "./action";

function vaccinationsReducer(vaccinations = [], action = {}){
    switch (action.type){
        case ActionType.GET_VACCINATIONS:
            return action.payload.vaccinations;
        default:
            return vaccinations;
    };
};

export default vaccinationsReducer;