import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Snackbar } from '@material-ui/core';

import { INotification, IReducers } from '../interfaces/global';

interface IProps {
  notification: INotification;
}

class Notification extends Component<IProps, object> {
  render() {
    const { notification } = this.props;
    return (
      // 全局消息提示
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={notification.open}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">{notification.message}</span>}
      />
    )
  }
}

export default connect(({ notification }: IReducers) => ({ notification }))(Notification);
