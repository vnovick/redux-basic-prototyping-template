import { Map } from 'immutable';


const INITIAL_STATE = Map({
    content: Map()
});


function setState(state, newState) {
    return state.merge(newState);
}

export default function(state = INITIAL_STATE, action) {
    return setState(state, action.state);
}
