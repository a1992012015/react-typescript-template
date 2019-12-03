import React, { Component } from 'react';
import { connect } from 'react-redux';

import { environment } from '../../environments';

class Home extends Component {
  render() {
    console.log('props', this.props);
    console.log('environment', environment);
    return (
      <div>This is Home....</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
