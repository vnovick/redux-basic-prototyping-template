import { combineReducers } from 'redux';
import app from './appReducer';
import intro from './introReducer';

const rootReducer = combineReducers({
    app,
    intro
});
export default rootReducer;
