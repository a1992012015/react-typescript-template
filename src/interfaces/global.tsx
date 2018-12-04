import { Store } from 'redux';
import { PersistPartial } from 'redux-persist';
import { RouterState } from 'connected-react-router';

import { IAuthSore } from './authApi';

export interface IEnthusiasm {
  name: string;
  enthusiasmLevel: number;
}

export interface INotification {
  open: boolean;
  message: string;
}

export interface IReducers {
  enthusiasm?: IEnthusiasm & PersistPartial;
  auth: IAuthSore & PersistPartial;
  saga: number;
  notification: INotification & PersistPartial;
  router: RouterState;
}

export interface IStore extends Store {
  injectedReducers?: object;
}
