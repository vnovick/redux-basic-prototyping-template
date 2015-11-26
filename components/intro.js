import React from 'react';
import {connect} from 'react-redux';
import 'styles/intro';

export const Intro = class Intro extends React.Component {
    render() {
        return (
          <div className={this.props.className}>
            <h1>{this.props.title}</h1>
            <p>{this.props.paragraph}</p>
          </div>
        )
    }
};

function mapStateToProps(state){
    return {
        title: state.intro.getIn(['content', 'title']),
        paragraph: state.intro.getIn(['content', 'paragraph'])
    };
}

export const IntroContainer = connect(mapStateToProps)(Intro);
