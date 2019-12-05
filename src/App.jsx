import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import { homeMenu } from './configs/homeMenuConfig';
import { loadable } from './components/HOComponent/loadable';
import { wrap } from './components/HOComponent/wrap';
import { SwitchDefault } from './components/HOComponent/switchDefault';

import styles from './App.module.scss';

const Home = loadable(() => import('./pages/Home/Home'));

const Test = loadable(() => import('./pages/Test/Test'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPath: this.getRouterPath(),
    };
  }

  handleClick = (path) => {
    const { history } = this.props;
    history.push({ pathname: path.key });
  };

  getRouterPath = () => {
    const { location } = this.props;
    const path = homeMenu.filter(i => location.pathname.includes(i.key));
    return path.length ? path[0].key : homeMenu[0].key;
  };

  render() {
    const { defaultPath } = this.state;
    const { history } = this.props;
    return (
      <div className={styles.App}>
        <Menu
          onClick={this.handleClick}
          className={styles.AppMenu}
          defaultSelectedKeys={defaultPath}
          mode='inline'
        >
          {this.renderHomeMenu()}
        </Menu>

        <SwitchDefault history={history}>
          <Route exact={true} path='/home' component={wrap(Home)}/>
          <Route exact={true} path='/test' component={wrap(Test)}/>
          <Redirect from='/' to='home'/>
        </SwitchDefault>
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

export default App;
