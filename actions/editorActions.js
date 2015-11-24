import { editorActionTypes } from 'constants/actionTypes';
import { Map } from 'immutable';

export const newTextBlock = (store) => {
    window.SirTrevor.block_controls.$el.children('a.st-block-control').first().click();
}


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
    trevorEvent.text_block.bind('blur keyup paste copy cut', (e) => {
        if (e.keyCode === 13) {
            newTextBlock();
        }
        contentUpdate(store, e.target.innerHTML.replace(/(<\/p>|<p>|<br>)/g, ''), trevorEvent.blockID)
    });
    trevorEvent.text_block.keyup(function (e){
        if(+e.target.dataset.prevCarretPosition === 0 && e.keyCode === 8){
            console.log("delete block", e.target.dataset.prevCarretPosition);
            trevorEvent.$ui.children('.st-block-ui-btn--delete').click();
            trevorEvent.$inner.children('.st-block__ui-delete-controls').children('.st-block-ui-btn--confirm-delete').click();
        }
    })
    trevorEvent.text_block.keydown(function (e){
        let carretPosition = window.getSelection().anchorOffset;
        e.target.dataset.prevCarretPosition = e.target.dataset.prevCarretPosition !== carretPosition ? carretPosition : e.target.dataset.prevCarretPosition;
    })
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
