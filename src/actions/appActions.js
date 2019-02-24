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