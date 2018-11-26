import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { IReducers } from '../../interfaces/global';

interface IProps {
  sagaTest: number;
  dispatch: Dispatch<any>;
}

class SagaTest extends Component<IProps> {
  componentDidMount() {
    console.log(this.props);
  }

  onIncrement = () => {
    // this.props.getAges(3);           // 发起action，传入参数
    const {dispatch} = this.props;
    console.log('onIncrement');
    dispatch({type: 'INCREMENT'});
  };

  onDecrement = () => {
    const {dispatch} = this.props;
    console.log('onDecrement');
    dispatch({type: 'DECREMENT'});
  };

  onIncrementAsync = () => {
    const {dispatch} = this.props;
    console.log('onIncrementAsync');
    dispatch({type: 'INCREMENT_ASYNC'});
  };

  render() {
    const {sagaTest} = this.props;
    return (
      <div style={{
        margin: '50px auto'
      }}>
        <Button variant="contained" color="primary"  onClick={this.onIncrementAsync}>
          Increment after 1 second
        </Button>
        {' '}
        <Button variant="contained" color="primary" onClick={this.onIncrement}>
          Increment
        </Button>
        {' '}
        <Button variant="contained" color="primary" onClick={this.onDecrement}>
          Decrement
        </Button>
        <hr />
        <div style={{
          color: '#ffffff'
        }}>
          Clicked: {sagaTest} times
        </div>
      </div>
    );
  }
}

export default connect(({ sagaTest }: IReducers) => ({ sagaTest }))(SagaTest);
