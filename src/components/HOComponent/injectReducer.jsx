import React, { Component } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { injectReducer } from '../../redux';

/**
 * Dynamically injects a reducer
 *
 * @param {function} reducer A reducer that will be injected
 *
 */
export const injectReducerWrap = (reducer) => {
  return WrappedComponent => {
    class ReducerInjector extends Component {
      static WrappedComponent = WrappedComponent;

      constructor(props) {
        super(props);
        injectReducer(reducer);
      }

      render() {
        return <WrappedComponent {...this.props}/>;
      }
    }

    return hoistNonReactStatics(ReducerInjector, WrappedComponent);
  };
};
