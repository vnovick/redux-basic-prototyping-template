import { editorActionTypes } from 'constants/actionTypes';
import { Map } from 'immutable';
export const contentUpdate = (store, content, blockId) => {
    store.dispatch({
        type: editorActionTypes.CONTENT_CHANGE,
        state: Map({
            content: Map({
                text: content
            })
        }),
        blockId: blockId
    });
};

function attachCustomListenes(store, trevorEvent){
    trevorEvent.text_block.bind('blur keyup paste copy cut mouseup', (e) => {
        if (e.keyCode === 13) {

        }
        contentUpdate(store, e.target.innerHTML, trevorEvent.blockID)
    });
}

export const newBlock = (store, trevorEvent) => {
    attachCustomListenes(store, trevorEvent);
    console.log(trevorEvent)
    store.dispatch({
        type: editorActionTypes.NEW_BLOCK,
        state: Map({
            content: Map(trevorEvent.blockContent)
        }),
        blockId: trevorEvent.blockID
    });
};
