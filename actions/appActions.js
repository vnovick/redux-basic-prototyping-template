import ActionTypes from 'constants/ActionTypes';

export const setState = (store) => {
    store.dispatch({
        type: ActionTypes.SET_STATE
    });
};
