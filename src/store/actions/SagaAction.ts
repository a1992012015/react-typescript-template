import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { INCREMENT, DECREMENT } from '../action-type/SagaType';

interface IIncrement {
  type: INCREMENT;
}

interface IDecrement {
  type: DECREMENT;
}

export type SagaAction = IIncrement | IDecrement;

function increment(): IIncrement {
  return {
    type: INCREMENT
  };
}

function decrement(): IDecrement {
  return {
    type: DECREMENT
  };
}

// Our worker Saga: 将执行异步的 increment 任务
function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* helloSaga(): IterableIterator<any> {
  console.log('Hello Sagas!');
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default [
  helloSaga(),
  watchIncrementAsync()
];
