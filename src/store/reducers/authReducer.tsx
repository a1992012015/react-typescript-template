import { IAuthSore } from '../../interfaces/authApi';
import { DELETE_INFO, SAVE_INFO, SAVE_TOKEN } from '../action-type/AuthType';
import { AuthAction } from '../actions/AuthAction';

const enthusiasmInit: IAuthSore = {
  isSignIn: false,
  userInfo: {
    id: 0,
    phone: '',
    roles: [],
    status: '',
    username: '',
  },
  token: {
    access_token: '',
    token_type: '',
    refresh_token: '',
    expires_in: '',
    scope: '',
    jti: ''
  }
};

export default function Enthusiasm(state: IAuthSore = enthusiasmInit, action: AuthAction): IAuthSore {
  switch (action.type) {
    case SAVE_INFO:
      Object.assign(state, action.payload);
      localStorage.setItem('authToken', JSON.stringify(state.token));
      return { ...state };
    case SAVE_TOKEN:
      state['token'] = action.payload.token;
      return { ...state };
    case DELETE_INFO:
      localStorage.removeItem('authToken');
      return enthusiasmInit;
    default:
      return state;
  }
}
