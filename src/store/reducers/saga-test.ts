import { call, put, takeEvery } from 'redux-saga/effects';     // 引入相关函数
import { INCREMENT, INCREMENT_IF_ODD, DECREMENT } from '../action-type/Saga-test';

export default function counter(state = 0, action: any) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case INCREMENT_IF_ODD:
      return (state % 2 !== 0) ? state + 1 : state;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

