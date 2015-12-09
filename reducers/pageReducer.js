import { pageActionTypes } from 'constants/actionTypes';
//page templates
import home from 'html!pages/home.html';

const INITIAL_STATE = {
    availablePages: { home }
};

function setCurrentState(state, page) {
    return { ...state, ...{ currentPage: state.availablePages[page]}}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case pageActionTypes.CHANGE_HASH:
        return setCurrentState(state, action.state);
    }
    return state;
};
