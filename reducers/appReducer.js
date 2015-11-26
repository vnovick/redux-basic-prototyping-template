import {Map, List} from 'immutable';
import { appActionTypes } from 'constants/actionTypes';

const INITIAL_STATE = Map({
    introduction: Map({
        title: 'Hello React Redux Starter',
        paragraph: 'This is the basic React starter'
    })
});

function setState(state, newState) {
    return state.merge(newState);
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case appActionTypes.SET_STATE:
        return setState(state, action.state);
    }
    return state;
};
