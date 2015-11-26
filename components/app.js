import React from 'react';
import { Provider} from 'react-redux';
import { IntroContainer } from 'components/intro';
require('styles/app')
export default class App extends React.Component {
    render() {
        let props, { store } = this.props;
        return (
          <div className="app">
            <Provider store={ store }>
              <div className="app__container">
                <IntroContainer className="card card--z1 card--intro"/>
              </div>
            </Provider>
          </div>

        );
    }
}
