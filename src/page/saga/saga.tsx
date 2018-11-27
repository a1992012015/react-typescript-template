import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { IReducers } from '../../interfaces/global';
import styles from './saga.module.scss';

interface IProps {
  saga: number;
  dispatch: Dispatch<any>;
}

class Saga extends Component<IProps> {
  onIncrement = () => {
    // this.props.getAges(3);           // 发起action，传入参数
    const { dispatch } = this.props;
    console.log('onIncrement');
    dispatch({ type: 'INCREMENT' });
  };

  onDecrement = () => {
    const { dispatch } = this.props;
    console.log('onDecrement');
    dispatch({ type: 'DECREMENT' });
  };

  onIncrementAsync = () => {
    const { dispatch } = this.props;
    console.log('onIncrementAsync');
    dispatch({ type: 'INCREMENT_ASYNC' });
  };

  render() {
    const { saga } = this.props;
    return (
      <div className={styles['saga']}>
        <div className={styles['saga-action']}>
          <Button variant="contained" color="primary" onClick={this.onIncrementAsync}>
            Increment after 1 second
          </Button>
          <Button variant="contained" color="primary" onClick={this.onIncrement}>
            Increment
          </Button>
          <Button variant="contained" color="primary" onClick={this.onDecrement}>
            Decrement
          </Button>
        </div>
        <div className={styles['saga-text']}>
          Clicked: {saga} times
        </div>
      </div>
    );
  }
}

export default connect(({ saga }: IReducers) => ({ saga }))(Saga);
