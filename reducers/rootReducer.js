import { combineReducers } from 'redux';
import app from './appReducer';
import monitor from './structureMonitorReducer';
import editor from './editorReducer';

const rootReducer = combineReducers({
    app,
    editor,
    monitor
});
export default rootReducer;
