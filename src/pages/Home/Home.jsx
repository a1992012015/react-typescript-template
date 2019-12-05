import React, { Component } from 'react';
import { connect } from 'react-redux';

import { environment } from '../../environments';
import styles from './Home.module.scss';

class Home extends Component {
  render() {
    console.log('environment', environment);
    console.log('auth', this.props.auth);
    return (
      <div className={styles.container}>
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
