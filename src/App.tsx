import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import SwitchDefault from './components/switchDefault';
import LoadingComponent from './components/loadingComponent';
import Header from './components/header/header';
import Notification from './components/notification';

import styles from './App.module.scss';

const Home = Loadable({
  loader: () => import('./page/home/home'),
  loading: LoadingComponent
});

const Enthusiasm = Loadable({
  loader: () => import('./page/enthusiasm/enthusiasm'),
  loading: LoadingComponent
});

const Saga = Loadable({
  loader: () => import('./page/saga/saga'),
  loading: LoadingComponent
});

const Decorator = Loadable({
  loader: () => import('./page/decorator/decorator'),
  loading: LoadingComponent
});

const Error = Loadable({
  loader: () => import('./page/error/error'),
  loading: LoadingComponent
});

class App extends Component {
  render() {
    return (
      <section className={styles['App']}>
        <Header/>

        <SwitchDefault>
          <Route exact={true} path='/' component={Home}/>
          <Route exact={true} path='/enthusiasm' component={Enthusiasm}/>
          <Route exact={true} path='/saga' component={Saga}/>
          <Route exact={true} path='/decorator' component={Decorator}/>
          <Route exact={true} path='/error' component={Error}/>
        </SwitchDefault>
        <Notification/>
      </section>
    );
  }
}

export default hot(module)(App);
