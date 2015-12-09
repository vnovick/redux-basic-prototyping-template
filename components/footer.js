import React from 'react';
import {connect} from 'react-redux';
import footer from 'html!pages/partials/footer.html';
import 'styles/partials/footer';

export const Footer = class Footer extends React.Component {
    render() {
        return (
          <footer className={this.props.className} dangerouslySetInnerHTML={{__html: footer}}>
          </footer>
        )
    }
};

function mapStateToProps(state){
    return {};
}

export const FooterContainer = connect(mapStateToProps)(Footer);
