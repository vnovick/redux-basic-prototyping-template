import { appActionTypes } from 'constants/actionTypes';

export const setState = (store) => {
    store.dispatch({
        type: appActionTypes.SET_STATE
    });
};
