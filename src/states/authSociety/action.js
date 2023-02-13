import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getOwnSociety, login, putAccessToken } from '../../utils/api';

const ActionType = {
    SET_AUTH_SOCIETY: 'SET_AUTH_SOCIETY',
    UNSET_AUTH_SOCIETY: 'UNSET_AUTH_SOCIETY',
};

function setAuthSocietyActionCreator(authSociety){
    return {
        type: ActionType.SET_AUTH_SOCIETY,
        payload:{
            authSociety,
        },
    };
}

function unsetAuthSocietyActionCreator(){
    return {
        type: ActionType.UNSET_AUTH_SOCIETY,
        payload: {
            authSociety: null,
        },
    };
}

function asyncSetAuthSociety({id_card_number, password}) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const token = await login({id_card_number, password})
            putAccessToken(token);
            const authSociety = await getOwnSociety();

            dispatch(setAuthSocietyActionCreator(authSociety));
        } catch (error){
            alert(error.message);
        }
        dispatch(hideLoading());
    }
}

function asyncUnsetAuthSociety(){
    return (dispatch) => {
        dispatch(unsetAuthSocietyActionCreator);
        putAccessToken('');
    };
}

export {
    ActionType,
    setAuthSocietyActionCreator,
    unsetAuthSocietyActionCreator,
    asyncSetAuthSociety,
    asyncUnsetAuthSociety,
};
