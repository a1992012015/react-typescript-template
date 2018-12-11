import React, { Component } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { persistReducer } from 'redux-persist';
import { Typography, Button } from '@material-ui/core';
import storage from 'redux-persist/es/storage';

import { decrementEnthusiasm, incrementEnthusiasm } from '@store/actions/EnthusiasmAction';
import { IReducers, IEnthusiasm } from '@interfaces/global';
import { postList } from '@services/auth';

import injectReducer from '@utils/injectReducer';
import enthusiasm from '@store/reducers/enthusiasmReducer';

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

  testApi = () => {
    postList().then(res => {
      console.log(res);
    })
  };

  render() {
    const { enthusiasm: { enthusiasmLevel, name } } = this.props;
    return (
      <div className={styles['enthusiasm']}>
        <Typography variant="h3" gutterBottom classes={{ h3: styles['enthusiasm-h3'] }}>
          {`Hello ${name}${this.getExclamationMarks(enthusiasmLevel)}`}
        </Typography>

        <div className={styles['enthusiasm-click']}>
          <Button className={styles['enthusiasm-button']} variant="contained" color="primary" onClick={this.add}>
            添加
          </Button>
          <Button className={styles['enthusiasm-button']} variant="contained" color="secondary" onClick={this.remove}>
            减少
          </Button>
          <Button className={styles['enthusiasm-button']} variant="contained" color="secondary" onClick={this.testApi}>
            API
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IReducers) => ({ enthusiasm: state.enthusiasm });

const withConnect = connect(
  mapStateToProps
);

const persistEnthusiasmConfig = {
  key: 'enthusiasm',
  storage,
  version: 10
};

const reducer = {
  enthusiasm: persistReducer(persistEnthusiasmConfig, enthusiasm)
};

const withReducer = injectReducer<IReducers>(reducer);

export default compose(
  withReducer,
  withConnect
)(Enthusiasm);
