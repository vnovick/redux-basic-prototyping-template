import { newBlock} from 'actions/editorActions';
import { Map } from 'immutable';

export default (store) => {
    return Map({
        'block:create:new': (trevorEvent) => {
            newBlock(store, trevorEvent);
        },
        'block:create:existing': (trevorEvent) => {
            console.log('block:create:existing', trevorEvent)
        },
        'block:remove': (trevorEvent) => {
            console.log('block:remove', trevorEvent)
        },
        'block:reorder:dropped': (trevorEvent) => {
            console.log('block:reorder:dropped', trevorEvent)
        },
        'formatter:hide': (trevorEvent) => {
            console.log('formatter:hide', trevorEvent)
        },
        'formatter:position': (trevorEvent) => {
            console.log('formatter:position', trevorEvent)
        },
        'onUploadStart': (trevorEvent) => {
            console.log('onUploadStart', trevorEvent)
        },
        'onUploadStop': (trevorEvent) => {
            console.log('onUploadStop', trevorEvent)
        },
        'onError': (trevorEvent) => {
            console.log('onError', trevorEvent)
        }
    });
};
