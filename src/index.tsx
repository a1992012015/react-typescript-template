import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import { store, persist, history } from '@store';
import * as serviceWorker from './serviceWorker';

import './index.scss';

// 迁移版本
window['__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__'] = true;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <ConnectedRouter history={history}>
        <Route component={App}/>
      </ConnectedRouter>
    </PersistGate>
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