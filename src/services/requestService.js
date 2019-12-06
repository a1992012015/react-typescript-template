import axios from 'axios';
import qs from 'qs';

import { environment } from '../environments';
import { authErrorAction, saveTokenAction } from '../redux/actions/authAction';

let isRefreshing = false;
let refreshSubscribers = [];

const defaultRequest = axios.create({
  baseURL: environment.mallApi,
  timeout: 60000,
});

const authRequest = axios.create({
  baseURL: environment.authApi,
  timeout: 60000,
});

/**
 * 刷新用户token
 * @param refreshToken
 * @returns {Promise<AxiosResponse<T>>}
 */
const refreshTokenApi = (refreshToken) => {
  return authRequest.post('/oauth/token', qs.stringify({
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  }), {
    headers: {
      'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
      'Content-type': 'application/x-www-form-urlencoded',
    },
  },
  );
};

const errorHandleRefreshToken = (getState, dispatch, errors) => {
  const { response: { config } } = errors;
  const { tokens } = getState().auth;
  if (!isRefreshing && tokens && tokens.refresh_token) {
    isRefreshing = true;
    refreshTokenApi(tokens.refresh_token).then((response) => {
      isRefreshing = false;
      dispatch(saveTokenAction(response));
      const subscribers = [...refreshSubscribers];
      subscribers.map(cb => cb(response.access_token));
      refreshSubscribers = [];
    })
      .catch(() => {
        dispatch(authErrorAction());
        refreshSubscribers = [];
      });
  } else {
    return Promise.reject(errors);
  }

  return new Promise((resolve, reject) => {
    refreshSubscribers.push(token => {
      // replace the expired token and retry
      config.headers['Authorization'] = `Bearer ${token}`;
      return defaultRequest(config).then(
        (response) => resolve(response),
        (error) => reject(error),
      );
    });
  });
};

const middlewareOptions = [
  {
    client: defaultRequest,
    interceptors: {
      request: [
        {
          success: ({ getState, dispatch, getSourceAction }, request) => {
            console.log('%c================defaultRequest success================', 'color: red');
            console.log('request', request);
            const { auth: { tokens } } = getState();
            if (tokens && tokens.access_token) {
              return {
                ...request,
                headers: {
                  ...(request.headers || {}),
                  Authorization: `${tokens.token_type} ${tokens.access_token}`,
                },
              };
            }
            return request;
          },
          error: ({ getState, dispatch, getSourceAction }, error) => {
            return Promise.reject(error);
          },
        },
      ],
      response: [
        {
          success: function({ getState, dispatch, getSourceAction }, response) {
            console.log('%c================defaultRequest success================', 'color: lime');
            console.log(response); //contains information about request object
            return Promise.resolve(response.data);
          },
          error: function({ getState, dispatch, getSourceAction }, error) {
            const { response } = error;
            if (response && response.status === 401) {
              return errorHandleRefreshToken(getState, dispatch, error);
            }
            return Promise.reject(error);
          },
        },
      ],
    },
  },
  {
    client: authRequest,
    interceptors: {
      request: [
        {
          success: ({ getState, dispatch }, request) => {
            console.log('%c================authRequest success================', 'color: red');
            console.log('request', request);
            return request;
          },
          error: ({ getState, dispatch, getSourceAction }, error) => {
            return Promise.reject(error);
          },
        },
      ],
      response: [
        {
          success: function({ getState, dispatch, getSourceAction }, response) {
            console.log('%c================defaultRequest success================', 'color: lime');
            console.log(response); //contains information about request object
            return Promise.resolve(response.data);
          },
          error: function({ getState, dispatch, getSourceAction }, error) {
            return Promise.reject(error);
          },
        },
      ],
    },
  },
];

export {
  defaultRequest,
  authRequest,
  middlewareOptions,
};
