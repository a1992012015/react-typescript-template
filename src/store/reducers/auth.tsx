import { IAuthSore } from '../../interfaces/authApi';
import { DELETE_INFO, SAVE_INFO } from '../action-type/Auth';
import { AuthAction } from '../actions/Auth';

const enthusiasmInit: IAuthSore = {
  isSignIn: false,
  userInfo: {},
  token: {
    access_token: '',
    token_type: '',
    refresh_token: '',
    expires_in: '',
    scope: '',
    jti: '',
  },
};

export default function Enthusiasm(state: IAuthSore = enthusiasmInit, action: AuthAction): IAuthSore {
  switch (action.type) {
    case SAVE_INFO:
      return { ...state, ...action.payload };
    case DELETE_INFO:
      return enthusiasmInit;
  }
  return state;
}
