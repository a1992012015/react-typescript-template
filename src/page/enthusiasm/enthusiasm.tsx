import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';

import { decrementEnthusiasm, incrementEnthusiasm } from '../../store/actions/EnthusiasmAction';
import { IReducers, IEnthusiasm } from '../../interfaces/global';

import styles from './enthusiasm.module.scss';

interface IProps {
  enthusiasm: IEnthusiasm;
  dispatch: Dispatch;
}

class Enthusiasm extends Component<IProps, object> {

  getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
  };

  add = () => {
    const { dispatch } = this.props;
    dispatch(incrementEnthusiasm());
  };

  remove = () => {
    const { dispatch } = this.props;
    dispatch(decrementEnthusiasm());
  };

  render() {
    const { enthusiasm: { enthusiasmLevel, name } } = this.props;
    return (
      <div className={styles['enthusiasm']}>
        <Typography variant="h3" gutterBottom classes={{
          h3: styles['enthusiasm-h3']
        }}>
          Hello {`${name}${this.getExclamationMarks(enthusiasmLevel)}`}
        </Typography>

        <div className={styles['enthusiasm-click']}>
          <Button className={styles['enthusiasm-button']} variant="contained" color="primary" onClick={this.add}>
            添加
          </Button>
          <Button className={styles['enthusiasm-button']} variant="contained" color="secondary" onClick={this.remove}>
            减少
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(({ enthusiasm }: IReducers) => ({ enthusiasm }))(Enthusiasm);
