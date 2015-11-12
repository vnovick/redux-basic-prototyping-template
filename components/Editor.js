import React from 'react';
import {connect} from 'react-redux';
import editorActions from 'actions/editorActions';

export const Editor = class Editor extends React.Component {
    render() {
        return (
          <div className="editor" contentEditable onChange={editorActions.contentUpdate}>

          </div>
        )
    }
};

function mapStateToProps(state){
    return {
        actions: state.app.getIn(['editor', 'actions'])
    };
}

export const EditorContainer = connect(mapStateToProps)(Editor);
