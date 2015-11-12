import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import appStore from 'appStore';
import { setState } from 'actions/appActions';

setState(appStore);

ReactDOM.render(
    <App store={ appStore }/>,
  document.getElementById('app')
);
