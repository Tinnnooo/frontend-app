import { ActionType } from "./action";

function vaccinationsReducer(vaccinations = [], action = {}){
    switch (action.type){
        case ActionType.GET_VACCINATIONS:
            return action.payload.vaccinations;
        case ActionType.ADD_VACCINATIONS:
            return [action.payload.vaccination];
        default:
            return vaccinations;
    };
};

export default vaccinationsReducer;