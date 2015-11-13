import jquery from 'jquery';
import sirTrevor from 'sir-trevor-js/sir-trevor';
import sirTrevorCss from 'sir-trevor-js/sir-trevor.css';
import trevorEvents from './sirTrevorEventsProxy';

export default {
    getInstance: (store, element)=>{
        let SirTrevor = new sirTrevor.Editor({ el: jquery(element) });
        trevorEvents(store).map((action, key)=>{
            sirTrevor.EventBus.on(key, action);
        });
    }
};
