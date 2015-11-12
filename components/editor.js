import React from 'react';
import {connect} from 'react-redux';
import { contentUpdate } from 'actions/editorActions';
import sirTrevorFactory from 'core/sirTrevorFactory';

export const Editor = class Editor extends React.Component {

    contentUpdate(){
        contentUpdate(this.props.store, this.refs.wysiwyg.value);
    }

    componentDidMount(){
        sirTrevorFactory.getInstance(this.props.store, this.refs.wysiwyg);
    }
    render() {
        return (
          <form>
              <textarea ref="wysiwyg" className="js-st-instance" onChange={this.contentUpdate.bind(this)}></textarea>
          </form>
        )
    }
};

function mapStateToProps(state){
    return {
        actions: state.app.getIn(['editor', 'actions'])
    };
}

export const EditorContainer = connect(mapStateToProps)(Editor);
