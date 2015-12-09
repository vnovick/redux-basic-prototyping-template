import { combineReducers } from 'redux';
import app from './appReducer';
import page from './pageReducer';

const rootReducer = combineReducers({
    app,
    page
});
export default rootReducer;
