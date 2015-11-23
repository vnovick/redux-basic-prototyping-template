import { newBlock} from 'actions/editorActions';
import { Map } from 'immutable';

export default (store) => {
    return Map({
        'block:create:new': (trevorEvent) => {
            newBlock(store, trevorEvent);
        }
    });
};
