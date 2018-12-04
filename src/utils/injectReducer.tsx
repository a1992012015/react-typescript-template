import React, { Component } from 'react';
import { ReducersMapObject } from 'redux';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { injectReducer } from '@store';

/**
 * Dynamically injects a reducer
 *
 * @param {function} reducer A reducer that will be injected
 *
 */
export default function <S>(reducer: Partial<ReducersMapObject<S>>) {
  return (WrappedComponent: any) => {

    class ReducerInjector extends Component {
      static WrappedComponent = WrappedComponent;

      constructor(props: object) {
        super(props);
        injectReducer(reducer);
      }

      render() {
        return <WrappedComponent {...this.props}/>;
      }
    }

    return hoistNonReactStatics(ReducerInjector, WrappedComponent);
  };
}

