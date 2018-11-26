import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router';

interface IProps {
  children: React.ReactNode;
}

export default class extends Component<IProps, object> {
  render() {
    return (
      <Switch>
        {this.props.children}
        <Redirect to='/error' />
      </Switch>
    );
  }
}
