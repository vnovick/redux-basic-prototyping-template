import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import ActionTypes from 'constants/ActionTypes';
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import { createReducer } from 'redux-create-reducer';
import appReducer from 'reducers/appReducer';
import App from 'components/App';
import { EditorContainer } from 'components/Editor';
const INITIAL_STATE = Map({
  editor: {
    actions: ['write', 'read']
  }
});

const rootReducer = createReducer(INITIAL_STATE, appReducer);

const createComposedStore = compose(
applyMiddleware(thunk),
applyMiddleware(createLogger())
)(createStore);
const store = createComposedStore(rootReducer);

store.dispatch({
    type: ActionTypes.SET_STATE,
    state: {
        editor: {
            actions: ['write', 'publish']
        }
    }
});


ReactDOM.render(
  <App store={store}>
     <EditorContainer/>
  </App>,
  document.getElementById('app')
);
