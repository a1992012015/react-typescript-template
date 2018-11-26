import * as React from 'react';
import { NavLink, withRouter, match } from 'react-router-dom';
import { History, Location } from 'history';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import UserState from './userState/userState';
import NavigationList from './navigationList/navigationList';
import { IAuthSore } from '../../interfaces/authApi';
import { IReducers } from '../../interfaces/global';

import styles from './header.module.scss';

interface IProps {
  location: Location;
  history: History;
  match: match;
  auth: IAuthSore;
}

class Header extends React.Component<IProps, object> {
  render() {
    const { history, auth } = this.props;
    return (
      <AppBar position="static">
        <Toolbar className={styles['header']}>
          <div className={styles['navigation']}>
            <NavLink to="/" className={styles['nav-link']} activeClassName={styles['nav-link-active']}>
              <Typography className={styles['logo']} variant="h6" color="inherit" noWrap>
                React-Typescript-Template
              </Typography>
            </NavLink>

            <NavigationList history={history}/>
          </div>

          <UserState auth={auth}/>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(connect(({ auth }: IReducers) => ({ auth }))(Header));
