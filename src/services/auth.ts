import qs from 'qs';
import { request, authRequest } from '../utils/request';
import { ISignInApi } from '../interfaces/authApi';
import config from '../config';

export const getAuthTokenApi = (data: ISignInApi) => request.post(`${config.Oauth}/oauth/token`, qs.stringify(data), {
  headers: {
    'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
    'Content-type': 'application/x-www-form-urlencoded'
  }
});

export const getUserInfoApi = () => authRequest.get(`${config.Mall}/users`);
