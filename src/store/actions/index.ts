import { all } from 'redux-saga/effects';

import saga from './SagaAction';
import auth from './AuthAction';

export default function* rootSaga() {
  yield all([
    ...saga,
    ...auth
  ]);
}
