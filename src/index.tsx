import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import { store } from './store';
import * as serviceWorker from './serviceWorker';

import './index.scss';

// 迁移版本
window['__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__'] = true;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  prefix: 'react-typescript-template',
  suffix: 'circle-of-truth'
});
