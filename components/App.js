import React from 'react';
import { EditorContainer } from 'components/Editor';
import { Provider} from 'react-redux';
export default class App extends React.Component {
    render() {
        let props, { store } = this.props;
        return (
          <div>
            <Provider store={ store } className="Application">
              <EditorContainer {...props} />
            </Provider>
          </div>

        );
    }
}
