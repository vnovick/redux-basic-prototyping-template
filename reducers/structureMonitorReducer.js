import { Map } from 'immutable';
function setState(state = Map(), newState) {
    return state.merge(newState);
}


export default function(state, action) {
    return setState(state, action.state);
}
