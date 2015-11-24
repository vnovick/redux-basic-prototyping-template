import React from 'react';
import { EditorContainer } from 'components/editor';
import { StructureMonitorContainer } from 'components/structureMonitor';
import { Provider} from 'react-redux';
require('styles/app')
export default class App extends React.Component {
    render() {
        let props, { store } = this.props;
        return (
          <div className="app">
            <Provider store={ store }>
              <div className="app__container">
                <EditorContainer className="card card--z1" store={store} {...props} />
                <StructureMonitorContainer className="card card--z3" {...props} />
              </div>
            </Provider>
          </div>

        );
    }
}
