import React from 'react';
import { HeaderContainer } from 'header';
import { PageContainer } from 'page';
import { NavbarContainer } from 'navbar';
import { FooterContainer } from 'footer';
import { Provider} from 'react-redux';

require('styles/app')
export default class App extends React.Component {

    render() {
        let { store } = this.props;
        return (
          <div className="app">
            <Provider store={ store }>
              <div className="app__container">
                <HeaderContainer className="header"/>
                <NavbarContainer className="navbar"/>
                <PageContainer className="page" />
                <FooterContainer className="footer"/>
              </div>
            </Provider>
          </div>

        );
    }
}
