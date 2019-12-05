import React, { Component } from 'react';

import { RouterLoading } from './routerLoading';

/**
 * 按需加载异步路由
 * @param getComponent
 * @returns {LoadableComponent}
 */
export const loadable = (getComponent) => {
  class LoadableComponent extends Component {
    static component = null;

    constructor(props) {
      super(props);
      this.state = {
        component: LoadableComponent.component,
        error: null,
      };
    }

    componentDidMount() {
      if (!this.state.component) {
        getComponent().then(component => {
          LoadableComponent.component = component;
          this.setState({ component });
        }).catch(error => {
          this.setState({ error });
        });
      }
    }

    resolve = (obj) => {
      return obj && obj.__esModule ? obj.default : obj;
    };

    render() {
      const { component, error } = this.state;
      if (component) {
        return React.createElement(this.resolve(component), this.props);
      } else {
        return <RouterLoading isLoading={!!component} error={error}/>;
      }
    }
  }

  return LoadableComponent;
};
