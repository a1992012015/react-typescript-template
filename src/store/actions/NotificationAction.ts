import { take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from '../action-type/NotificationType';
import { INotification } from '../../interfaces/global';

interface IOpenNotification {
  type: OPEN_NOTIFICATION;
  payload: INotification;
}

interface ICloseNotification {
  type: CLOSE_NOTIFICATION;
}

export type notificationAction = IOpenNotification | ICloseNotification;

function openNotification(action: INotification): IOpenNotification {
  return {
    type: OPEN_NOTIFICATION,
    payload: action
  };
}

function closeNotification(): ICloseNotification {
  return {
    type: CLOSE_NOTIFICATION
  };
}

// 开始异步 - 消息提示任务开启到结束
function* notification() {
  try {
    while (true) {
      const action = yield take('START_NOTIFICATION');
      yield put(openNotification({ open: true, message: action.payload.message }));
      yield delay(action.payload.time);
      yield put(closeNotification());
    }
  } catch (e) {
    console.log(e);
    yield put(closeNotification());
  }

}

export default [
  notification()
];
