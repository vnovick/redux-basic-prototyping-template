import React from 'react';
import {connect} from 'react-redux';
import header from 'html!pages/partials/header.html';
import 'styles/partials/header';

export const Header = class Footer extends React.Component {
    render() {
        return (
          <header className={this.props.className} dangerouslySetInnerHTML={{__html: header }}>
          </header>
        )
    }
};

function mapStateToProps(state){
    return {};
}

export const HeaderContainer = connect(mapStateToProps)(Header);
