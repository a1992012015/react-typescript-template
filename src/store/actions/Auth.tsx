import { Dispatch } from 'redux';

import { SAVE_INFO, DELETE_INFO } from '../action-type/Auth';
import { signInApi, getUserInfoApi } from '../../services/auth';
import { IAuthSore } from '../../interfaces/authApi';

export interface ISaveInfo {
  type: SAVE_INFO;
  payload: IAuthSore
}

export interface IDeleteInfo {
  type: DELETE_INFO;
}

export type AuthAction = ISaveInfo | IDeleteInfo;

const saveInfo = (option: any): ISaveInfo => {
  return {
    type: SAVE_INFO,
    payload: option,
  };
};

export const signOut = (): IDeleteInfo => {
  localStorage.removeItem('authToken');
  return {
    type: DELETE_INFO
  };
};

/*export const signIn = ({ username, password }, setLoading) => {
  return async (dispatch: Dispatch) => {
    const request = await signInApi({ username, password, grant_type: 'password' });
    setLoading();
    dispatch(saveInfo({ ...request }));

    localStorage.setItem('authToken', JSON.stringify(request));
    // 获取user info
    dispatch(getUserInfo());
  };
};*/

/*export const getUserInfo = () => {
  return async (dispatch: Dispatch) => {
    const request = await getUserInfoApi();
    dispatch(saveInfo({ isLogin: true, userInfo: request }));
  };
};*/
