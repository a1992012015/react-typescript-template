import { AUTH_CLEAN_INFO, AUTH_SAVE_INFO, } from '../actionTypes/authType';

const authInit = {
  userInfo: null,
  tokens: null,
};

export function authReducer(state = authInit, action) {
  switch (action.type) {
    case AUTH_SAVE_INFO:
      return { ...state, ...action.payload, };
    case AUTH_CLEAN_INFO:
      return { ...authInit, };
    default:
      return state;
  }
}
