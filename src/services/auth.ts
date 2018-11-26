import qs from 'qs';
import { request, authRequest } from '../utils/request';
import { ISignInApi } from '../interfaces/authApi'
import config from '../config';

/*export const sendCode = data => request.get(`${config.Mall}/sms/send`, { params: data });

export const register = data => request.post(`${config.Mall}/users`, data);*/

export const signInApi = (data: ISignInApi) =>
  request.post(`${config.Oauth}/oauth/token`, qs.stringify(data), {
    headers: {
      Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
      'Content-type': 'application/x-www-form-urlencoded'
    }
  });

export const getUserInfoApi = () => authRequest.get(`${config.Mall}/users`);

/*
export const resetPassword = data => request.put(`${config.Mall}/users/reset_password`, data);

export const uploadUserIdCard = data => authRequest.put(`${config.Mall}/users/upload_idcard`, data);
*/
