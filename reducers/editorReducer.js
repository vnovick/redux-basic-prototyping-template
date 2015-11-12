import { Map } from 'immutable';
import { editorActionTypes } from 'constants/actionTypes';

const INITIAL_STATE = Map({
    content: Map()
});


function setState(state, newState) {
    return state.merge(newState);
}

function addBlockToState(state, newState) {
    return state.merge(newState);
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case editorActionTypes.CONTENT_CHANGE:
        return setState(state, action.state);
    case editorActionTypes.NEW_BLOCK:
        return addBlockToState(state, action.state);
    }
    return state;
}
