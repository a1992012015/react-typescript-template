import axios from 'axios';
import { fromJS } from 'immutable';
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
  const { auth } = getState();
  const refreshToken = auth.getIn(['tokens', 'refresh_token']);
  if (!isRefreshing && refreshToken) {
    isRefreshing = true;
    refreshTokenApi(refreshToken).then((response) => {
      isRefreshing = false;
      dispatch(saveTokenAction(response));
      const subscribers = [...refreshSubscribers];
      subscribers.map(cb => cb());
      refreshSubscribers = [];
    })
      .catch(() => {
        dispatch(authErrorAction());
        refreshSubscribers = [];
      });
  } else {
    return Promise.reject(fromJS(errors || {}));
  }

  return new Promise((resolve, reject) => {
    refreshSubscribers.push(() => {
      // replace the expired token and retry
      return defaultRequest(config).then(
        (response) => resolve(fromJS(response || {})),
        (error) => reject(fromJS(error || {})),
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
            const { auth } = getState();
            const accessToken = auth.getIn(['tokens', 'access_token']);
            const tokenType = auth.getIn(['tokens', 'token_type']);
            console.log('tokens', accessToken);
            console.log('tokenType', tokenType);
            if (accessToken) {
              return {
                ...request,
                headers: {
                  ...(request.headers || {}),
                  Authorization: `${tokenType} ${accessToken}`,
                },
              };
            }
            return request;
          },
          error: ({ getState, dispatch, getSourceAction }, error) => {
            return Promise.reject(fromJS(error || {}));
          },
        },
      ],
      response: [
        {
          success: function({ getState, dispatch, getSourceAction }, response) {
            console.log('%c================defaultRequest success================', 'color: lime');
            console.log(response); //contains information about request object
            return Promise.resolve(fromJS(response.data || {}));
          },
          error: function({ getState, dispatch, getSourceAction }, error) {
            const { response } = error;
            console.log('response', response);
            if (response && response.status === 401) {
              return errorHandleRefreshToken(getState, dispatch, error);
            }
            return Promise.reject(fromJS(error || {}));
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
            return Promise.reject(fromJS(error || {}));
          },
        },
      ],
      response: [
        {
          success: function({ getState, dispatch, getSourceAction }, response) {
            console.log('%c================defaultRequest success================', 'color: lime');
            console.log(response); //contains information about request object
            return Promise.resolve(fromJS(response.data || {}));
          },
          error: function({ getState, dispatch, getSourceAction }, error) {
            return Promise.reject(fromJS(error || {}));
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
