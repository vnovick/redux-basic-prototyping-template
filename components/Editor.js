import React from 'react';
import {connect} from 'react-redux';

export const Editor = class Editor extends React.Component {
    render() {
        return (
          <div>Welcome to Editor {this.props.actions}</div>
        )
    }
};

function mapStateToProps(state){
    return {
        actions: state.get('editor').actions
    };
}

export const EditorContainer = connect(mapStateToProps)(Editor);
