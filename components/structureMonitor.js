import React from 'react';
import {connect} from 'react-redux';

export const StructureMonitor = class Editor extends React.Component {
    render() {
        return (
          <textarea style={{width: "100%", height:"100vh", fontSize: "1rem" }} className={this.props.className} value= {JSON.stringify(this.props.content, null, 2) } />
        )
    }
};

function mapStateToProps(state){
    return {
        content: state.editor.get('content').toJS()
    };
}

export const StructureMonitorContainer = connect(mapStateToProps)(StructureMonitor);
