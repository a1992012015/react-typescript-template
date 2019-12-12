import { Map } from 'immutable';

import {
  AUTH_CLEAN_INFO,
  AUTH_SAVE_INFO,
  AUTH_SAVE_LOADING,
  AUTH_SAVE_TOKEN,
} from '../actionTypes/authType';

const authInit = Map({
  loading: false,
  userInfo: null,
  tokens: null,
});

export function authReducer(state = authInit, action) {
  switch (action.type) {
  case AUTH_SAVE_INFO:
    return state.set('userInfo', action.userInfo).set('loading', false);
  case AUTH_SAVE_TOKEN:
    return state.set('tokens', action.token);
  case AUTH_CLEAN_INFO:
    return authInit;
  case AUTH_SAVE_LOADING:
    return state.set('loading', true);
  default:
    return state;
  }
}
