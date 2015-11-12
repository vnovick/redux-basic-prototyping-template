import {Map, List} from 'immutable';
import ActionTypes from 'constants/ActionTypes';


const INITIAL_STATE = Map({
    editor: Map({
        actions: List.of('write', 'read')
    })
});

function setState(state, newState) {
    return state.merge(newState);
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case ActionTypes.SET_STATE:
        return setState(state, action.state);
    }
    return state;
};
