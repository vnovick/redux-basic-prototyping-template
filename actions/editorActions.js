import { editorActionTypes } from 'constants/actionTypes';
import { Map } from 'immutable';
export const contentUpdate = (store, content) => {
    store.dispatch({
        type: editorActionTypes.CONTENT_CHANGE,
        state: Map({
            content: Map({
                text: content
            })
        })
    });
};

export const newBlock = (store, content) => {
    store.dispatch({
        type: editorActionTypes.NEW_BLOCK,
        state: Map({
            content: Map(content)
        })
    });
};
