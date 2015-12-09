import React from 'react';
import {connect} from 'react-redux';
import navbar from 'html!pages/partials/navbar.html';
import 'styles/partials/navbar';

export const Navbar = class Footer extends React.Component {
    render() {
        return (
          <nav className={this.props.className} dangerouslySetInnerHTML={{__html: navbar }}>
          </nav>
        )
    }
};

function mapStateToProps(state){
    return {};
}

export const NavbarContainer = connect(mapStateToProps)(Navbar);
