import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, } from 'redux';
import createLogger from 'redux-logger';
import { Map, Iterable } from 'immutable';
import rootReducer from 'reducers/rootReducer';

const createComposedStore = compose(
applyMiddleware(thunk, createLogger({
    collapsed: true,
    duration: true,
    timestamp: true,
    stateTransformer: (state = Map())=>{
        return Object.assign(Map(state).toJS(), { [Symbol("Immutable State")]: state });
    }
}))
)(createStore);

export default createComposedStore(rootReducer);
