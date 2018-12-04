import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from '../action-type/NotificationType';
import { notificationAction } from '../actions/NotificationAction';
import { INotification } from '@interfaces/global';

const notificationInit: INotification = {
  open: false,
  message: ''
};

export default function NotificationReducer(state: INotification = notificationInit, action: notificationAction): INotification {
  switch (action.type) {
    case OPEN_NOTIFICATION:
      return { ...action.payload };
    case CLOSE_NOTIFICATION:
      return { ...state, open: false };
    default:
      return state;
  }
}

