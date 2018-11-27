import { put, call, takeEvery } from 'redux-saga/effects';

import { SAVE_INFO, DELETE_INFO, SIGN_IN, SAVE_TOKEN } from '../action-type/AuthType';
import { getAuthTokenApi, getUserInfoApi } from '../../services/auth';
import { ISignInApi, IToken, IInfo } from '../../interfaces/authApi';

// 提交用户token
interface ISaveToken {
  type: SAVE_TOKEN;
  payload: {
    token: IToken
  }
}

// 提交用户信息
interface ISaveInfo {
  type: SAVE_INFO;
  payload: {
    userInfo: IInfo,
    isSignIn: boolean,
  }
}

// 删除用户信息
interface IDeleteInfo {
  type: DELETE_INFO;
}

// 登陆
interface ISignIn {
  type: SIGN_IN,
  payload: ISignInApi,
}

// action的可能值
export type AuthAction = ISaveToken | ISaveInfo | IDeleteInfo;

// 提交用户token
function saveToken(option: IToken): ISaveToken {
  return {
    type: SAVE_TOKEN,
    payload: {
      token: option
    }
  };
}

// 提交用户信息
function saveInfo(option: IInfo): ISaveInfo {
  return {
    type: SAVE_INFO,
    payload: {
      userInfo: option,
      isSignIn: true
    }
  };
}

// 异步任务 - 获取用户信息
function* getUserInfo() {
  console.log('getUserInfo');
  const data = yield call(getUserInfoApi);
  yield put(saveInfo(data));
}

// 异步任务 - 获取用户token并且保存到store
function* getAuthToken(action: ISignIn) {
  console.log('getAuthToken');
  const data = yield call(getAuthTokenApi, action.payload);
  yield put(saveToken(data));
  yield call(getUserInfo);
}

// 开始异步 - 登陆任务
function* signIn() {
  yield takeEvery('SIGN_IN', getAuthToken);
}

// 开始异步 - 登陆任务
function* getInfo() {
  yield takeEvery('GET_INFO', getUserInfo);
}

export default [
  signIn(),
  getInfo(),
];
