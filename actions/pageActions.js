import { pageActionTypes } from 'constants/actionTypes';

export const changeHash = currentPage => (dispatch, getState) => {
    dispatch({
        type: pageActionTypes.CHANGE_HASH,
        state: currentPage
    })
}
