import React from 'react';
export default class App extends React.Component {

    getChildren(){
        return React.Children.map(this.props.children, element =>{
            return React.cloneElement(this.props.children, this.props);
        });
    }

    render() {
        return (
           <div className="Application">
             { this.getChildren() }
           </div>
        );
    }
}

App.PropTypes = {}
