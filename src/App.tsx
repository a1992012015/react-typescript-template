import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import SwitchDefault from './components/switchDefault';
import Home from './page/home/home';
import Enthusiasm from './page/enthusiasm/enthusiasm';
import Saga from './page/saga/saga';
import Error from './page/error/error';

import Header from './components/header/header';

import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <section className={styles['App']}>
        <Header/>

        <SwitchDefault>
          <Route exact={true} path='/' component={Home}/>
          <Route exact={true} path='/enthusiasm' component={Enthusiasm}/>
          <Route exact={true} path='/saga' component={Saga}/>
          <Route exact={true} path='/error' component={Error}/>
        </SwitchDefault>
      </section>
    );
  }
}

export default hot(module)(App);
