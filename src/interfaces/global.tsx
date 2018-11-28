import { PersistPartial } from 'redux-persist';

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
  enthusiasm: IEnthusiasm;
  auth: IAuthSore & PersistPartial;
  saga: number;
  notification: INotification;
}
