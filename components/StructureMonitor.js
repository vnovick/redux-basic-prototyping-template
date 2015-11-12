import React from 'react';
import {connect} from 'react-redux';

export const StructureMonitor = class Editor extends React.Component {
    render() {
        return (
          <div className="StructureMonitor">
            {JSON.stringify(this.props.content, null, 2) }
          </div>
        )
    }
};

function mapStateToProps(state){
    return {
        content: state.editor.get('content').toJS()
    };
}

export const StructureMonitorContainer = connect(mapStateToProps)(StructureMonitor);
