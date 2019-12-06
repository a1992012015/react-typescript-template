import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { getUserInfoAction, signInAction, signOutActon } from '../../redux/actions/authAction';

import styles from './Home.module.scss';

class Home extends Component {
  userSignIn = () => {
    const { signInDispatch } = this.props;
    signInDispatch({
      password: '123456',
      username: '15982086412',
    });
  };

  getUserInfo = () => {
    const { getUserInfoDispatch } = this.props;
    getUserInfoDispatch();
  };

  userSignOut = () => {
    const { signOutDispatch } = this.props;
    signOutDispatch();
  };

  render() {
    console.log('auth', this.props.auth);
    return (
      <div className={styles.container}>
        <Button onClick={this.userSignIn}>登录</Button>
        <Button onClick={this.getUserInfo}>获取用户信息</Button>
        <Button onClick={this.userSignOut}>退出</Button>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
        <p>This is Home....</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  signInDispatch: signInAction,
  signOutDispatch: signOutActon,
  getUserInfoDispatch: getUserInfoAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
