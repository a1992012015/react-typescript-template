import axios from 'axios';
import { store } from '../store';
import { DELETE_INFO } from '../store/action-type/Auth';
import { openNotificationWithIcon } from './common'

const errorHandle = (error: any) => {
  const { response } = error;
  let msg;
  let statusCode;
  if (response && response instanceof Object) {
    const { data, statusText } = response;
    statusCode = response.status;

    if (statusCode === 401) {
      localStorage.removeItem('authToken');
      store.dispatch({
        type: DELETE_INFO
      });
      openNotificationWithIcon(true);
    }

    if (data instanceof Object) {
      msg = data.message || statusText;
    } else {
      msg = data;
    }
  } else {
    localStorage.removeItem('authToken');
    store.dispatch({
      type: DELETE_INFO
    });

    statusCode = 600;
    msg = error.message || 'Network Error';
  }

  return Promise.reject({ success: false, statusCode, message: msg, error });
};

axios.interceptors.response.use(response => response.data, errorHandle);

axios.interceptors.request.use(config => {
  return config;
});

const authRequest = axios.create();

authRequest.interceptors.response.use(response => response.data, errorHandle);

authRequest.interceptors.request.use(config => {
  const { auth } = store.getState();

  if (auth.token.access_token) {
    return {
      ...config,
      headers: {
        ...(config.headers || {}),
        Authorization: `Bearer ${auth.token.access_token}`
      }
    };
  }

  return config;
});

const request = axios;

export { request, authRequest };
