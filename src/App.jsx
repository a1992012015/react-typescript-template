import React, { Component, } from 'react';
import Loadable from 'react-loadable';
import { Route, Redirect, } from 'react-router-dom';
import { Menu, Icon, } from 'antd';
import { hot, } from 'react-hot-loader/root';

import { homeMenu, } from './configs/homeMenuConfig';
import RouterLoading from './components/HOComponent/routerLoading';
import SwitchDefault from './components/HOComponent/switchDefault';

import styles from './App.module.scss';

const Home = Loadable({
  loader: () => import('./pages/Home/Home'),
  loading: RouterLoading,
});

class App extends Component {
  handleClick = (e) => {
    console.log('click', e);
  };

  render() {
    return (
      <div className={styles.App}>
        <Menu
          onClick={this.handleClick}
          className={styles.AppMenu}
          defaultSelectedKeys={homeMenu[0].key}
          mode='inline'
        >
          {this.renderHomeMenu()}
        </Menu>

        <div className={styles.AppContainer}>
          <SwitchDefault>
            <Route exact={true} path='/home' component={Home}/>
            <Redirect from='/' to='home'/>
          </SwitchDefault>
        </div>
      </div>
    );
  }

  renderHomeMenu = () => {
    return homeMenu.map((menu) => {
      return (
        <Menu.Item key={menu.key}>
          <Icon type={menu.icon}/>
          {menu.name}
        </Menu.Item>
      );
    });
  };
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
