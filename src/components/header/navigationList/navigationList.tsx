import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { History } from 'history';

import styles from "./navigationList.module.scss";

interface IProps {
  history: History;
}

interface IState {
  value: string;
  navigation: {
    path: string;
    name: string;
    label: string;
  }[];
}

class NavigationList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '/',
      navigation: [
        {
          path: '/',
          name: '主页',
          label: '/'
        },
        {
          path: '/enthusiasm',
          name: 'Enthusiasm',
          label: '/enthusiasm'
        },
        {
          path: '/saga-test',
          name: 'SagaTest',
          label: '/saga-test'
        }
      ]
    };
  }

  componentDidMount() {
    const {
      history: {
        location: { pathname }
      }
    } = this.props;
    this.changeNavigationSelected(pathname);
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps !== this.props) {
      const {
        history: {
          location: { pathname }
        }
      } = this.props;
      this.changeNavigationSelected(pathname);
    }
  }

  handleChange = (event: any, value: any) => {
    this.props.history.push(value);
  };

  changeNavigationSelected = (pathname: string) => {
    const index =
      pathname.indexOf('/', 1) !== -1
        ? pathname.indexOf('/', 1)
        : pathname.length;
    const value = pathname.slice(0, index);
    this.setState({ value });
  };

  render() {
    const { value, navigation } = this.state;
    return (
      <BottomNavigation value={value} onChange={this.handleChange} showLabels className={styles['navigation-list']}>
        {navigation.map(item => {
          return (
            <BottomNavigationAction
              value={item.label}
              key={`navigationList${item.label}`}
              classes={{
                selected: styles['navigation-action-selected'],
                root: styles['navigation-action-root'],
              }}
              label={item.name}
            />
          );
        })}
      </BottomNavigation>
    );
  }
}

export default NavigationList;
