import React from 'react';
import ReactDom from 'react-dom';
import App from './screens';

ReactDom.render(<App />, document.getElementById('reactra'));

// noinspection JSUnresolvedVariable
if (module.hot) {
  module.hot.accept();
}
