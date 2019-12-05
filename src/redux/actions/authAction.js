import { AUTH_CLEAN_INFO, AUTH_SAVE_INFO } from '../actionTypes/authType';

function cleanAuthAction() {
  return {
    type: AUTH_CLEAN_INFO,
  };
}

function saveAuthAction(userInfo, tokens) {
  return {
    type: AUTH_SAVE_INFO,
    payload: {
      userInfo: userInfo,
      tokens: tokens,
    },
  };
}

export {
  cleanAuthAction,
  saveAuthAction,
};
