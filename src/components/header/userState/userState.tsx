import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { IAuthSore } from '../../../interfaces/authApi';

import styles from './userState.module.scss';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';

interface IProps {
  auth: IAuthSore;
}

interface IState {
  mobileMoreAnchorEl: any;
  anchorEl: any;
}

class UserState extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null
    };
  }

  signIn = () => {};

  signUp = () => {};

  signOut = () => {};

  handleProfileMenuOpen = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  beforeSignIn = () => {
    return (
      <div className={styles['before-landing']}>
        <NavLink to="/auth/signIn" className={styles['nav-link']} activeClassName={styles['nav-link-active']}>
          <Button onClick={this.signIn} color="inherit">
            Sign in
          </Button>
        </NavLink>

        <p className={styles['or']}>or</p>

        <NavLink to="/auth" className={styles['nav-link']} activeClassName={styles['nav-link-active']}>
          <Button onClick={this.signUp} color="inherit">
            Sign up
          </Button>
        </NavLink>
      </div>
    );
  };

  afterSignIn = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <IconButton aria-owns={isMenuOpen ? 'material-appbar' : undefined} aria-haspopup="true" onClick={this.handleProfileMenuOpen} color="inherit">
        <Avatar>G</Avatar>
      </IconButton>
    );
  };

  public render() {
    const {
      auth: { isSignIn }
    } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <div>
        {isSignIn ? this.afterSignIn() : this.beforeSignIn()}
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={this.signOut}>Log Out</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default UserState;
