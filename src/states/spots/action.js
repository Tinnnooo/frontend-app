const ActionType = {
    GET_SPOT_REGION: "GET_SPOT_REGION",
};

function getSpotRegionActionCreator(spots){
    return {
        type: ActionType.GET_SPOT_REGION,
        payload: {
            spots
        }
    }
}

export {
    ActionType,
    getSpotRegionActionCreator,
}