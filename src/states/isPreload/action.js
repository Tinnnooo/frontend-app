import { hideLoading,showLoading } from "react-redux-loading-bar";
import { getOwnSociety } from "../../utils/api";
import { setAuthSocietyActionCreator } from "../authSociety/action";

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload){
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload,
        },
    };
}

function asyncPreloadProcess(){
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const authSociety = await getOwnSociety();
            dispatch(setAuthSocietyActionCreator(authSociety));
        } catch (error){
            dispatch(setAuthSocietyActionCreator(null));
        } finally {
            dispatch(setIsPreloadActionCreator(false));
        }

        dispatch(hideLoading());
    };
}

export {
    ActionType,
    setAuthSocietyActionCreator,
    asyncPreloadProcess,
};
