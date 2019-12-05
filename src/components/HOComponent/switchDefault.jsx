import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { loadable } from './loadable';
import { wrap } from './wrap';
import { routerTransition } from '../../configs/routerTransitionConfig';

const Error = loadable(() => import('../../pages/Error/Error'));

/**
 * 默认路由跳转，添加路由跳转动画
 */
export class SwitchDefault extends Component {
  DEFAULT_SCENE_CONFIG = {
    enter: 'from-right',
    exit: 'to-exit',
  };
  oldLocation = null;

  getSceneConfig = (location) => {
    return routerTransition[location.pathname] || this.DEFAULT_SCENE_CONFIG;
  };

  getClassName = () => {
    const { history } = this.props;

    // 转场动画应该都是采用当前页面的routerTransition，所以：
    // push操作时，用新location匹配的路由
    // pop操作时，用旧location匹配的路由
    let classNames = '';
    if (history.action === 'PUSH') {
      classNames = `forward-${this.getSceneConfig(history.location).enter}`;
    } else if (history.action === 'POP' && this.oldLocation) {
      classNames = `back-${this.getSceneConfig(this.oldLocation).exit}`;
    }

    // 更新旧location
    this.oldLocation = history.location;

    return classNames;
  };

  render() {
    const { history: { location }, children } = this.props;
    const classNames = this.getClassName();
    return (
      <TransitionGroup
        className='wrap-transition'
        childFactory={child => React.cloneElement(child, { classNames })}
      >
        <CSSTransition
          key={location.pathname}
          timeout={500}
          appear={true}
          unmountOnExit={true}
          mountOnEnter={true}
        >
          <Switch location={location}>
            {children}
            <Route path='*' component={wrap(Error)}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
