import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import RouterLoading from './routerLoading';

const Error = Loadable({
  loader: () => import('../../pages/Error/Error'),
  loading: RouterLoading
});

export default class extends Component {
  render() {
    return (
      <Switch>
        {this.props.children}
        <Route path='*' component={Error} />
      </Switch>
    );
  }
}
