import React from 'react';
import { EditorContainer } from 'components/editor';
import { StructureMonitorContainer } from 'components/structureMonitor';
import { Provider} from 'react-redux';
export default class App extends React.Component {
    render() {
        let props, { store } = this.props;
        return (
          <div className="app">
            <Provider store={ store }>
              <div className="app__container">
                <EditorContainer className="editor" store={store} {...props} />
                <StructureMonitorContainer className="monitor" {...props} />
              </div>
            </Provider>
          </div>

        );
    }
}
