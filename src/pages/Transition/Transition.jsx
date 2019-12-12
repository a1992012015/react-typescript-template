import React from 'react';
import { Button } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { BaseComponent } from '../../components/HOComponent/shouldComponentUpdate';

import styles from './Transition.module.scss';

export default class extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  onToggle = () => {
    this.setState({
      num: (this.state.num + 1) % 2,
    });
  };

  render() {
    const { num } = this.state;
    return (
      <div className={styles.container}>
        <TransitionGroup className={styles.squareWrapper}>
          <CSSTransition
            key={num}
            timeout={500}
            classNames={'forward-from-right'}
            appear={true}
          >
            <div className={styles.square}>{num}</div>
          </CSSTransition>
        </TransitionGroup>
        <Button onClick={this.onToggle}>toggle</Button>
      </div>
    );
  }
}
