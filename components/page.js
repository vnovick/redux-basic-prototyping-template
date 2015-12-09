import React from 'react';
import {connect} from 'react-redux';
import { changeHash } from 'actions/pageActions';
import 'styles/layout.scss';
// Page Styles:
import 'styles/pages/home.scss';

export const Page = class Footer extends React.Component {
    componentDidMount(){
        const { dispatch } = this.props;
        if (!location.hash) {
            location.hash = "home";
        }
        else {
            dispatch(changeHash(location.hash.slice(1)));
        }
        window.onhashchange = ()=>{
            dispatch(changeHash(location.hash.slice(1)));
        }
    }

    render() {
        return (
          <section className={this.props.className} dangerouslySetInnerHTML={{__html: this.props.currentPage}}>
          </section>
        )
    }
};

function mapStateToProps(state){
    return { currentPage: state.page.currentPage };
}

export const PageContainer = connect(mapStateToProps)(Page);
