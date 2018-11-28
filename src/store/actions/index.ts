import { all } from 'redux-saga/effects';

import sagaAction from './SagaAction';
import authAction from './AuthAction';
import notificationAction from './NotificationAction';

export default function* rootSaga() {
  yield all([
    ...sagaAction,
    ...authAction,
    ...notificationAction
  ]);
}
