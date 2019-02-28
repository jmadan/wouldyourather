import {
    getInitialData,
} from '../utils/api';

export function loadInitialData() {
    return (dispatch) => {
        return getInitialData().then(response => {
            return dispatch({
                type: 'LOAD_INITIAL_DATA_SUCCESS',
                payload: response
            });
        });
    }

}

export function userSignIn(user) {
    return (dispatch) => {
        return dispatch({
            type: 'SIGNIN_USER',
            payload: user
        });
    }
}

export function userSignOut() {
    return (dispatch) => {
        return dispatch({
            type: 'SIGNOUT_USER'
        });
    }
}