import { IAuthSore } from './authApi'

export interface IEnthusiasm {
  name: string;
  enthusiasmLevel: number;
}

export interface IReducers {
  enthusiasm: IEnthusiasm;
  auth: IAuthSore;
  sagaTest: number;
}
