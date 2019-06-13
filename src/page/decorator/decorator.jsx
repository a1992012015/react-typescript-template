import React, { Component } from "react";
import { connect } from 'react-redux';

import styles from './decorator.module.scss';

class Decorator extends Component {
  render() {
    return (
      <div className={styles['decorator']}>This is content....</div>
    );
  }
}

export default Decorator;
