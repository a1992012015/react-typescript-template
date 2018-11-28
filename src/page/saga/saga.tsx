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
    const { dispatch } = this.props;
    dispatch({ type: 'INCREMENT' });
  };

  onDecrement = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'DECREMENT' });
  };

  onIncrementAsync = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'INCREMENT_ASYNC' });
  };

  openNotification = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'START_NOTIFICATION',
      payload: {
        time: 3000,
        message: 'Hello World!!!!!!!'
      }
    });
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
          <Button variant="contained" color="primary" onClick={this.openNotification}>
            openNotification
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
