export interface ISignInApi {
  username: number;
  password: string;
  grant_type: string;
}

export interface IToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: string;
  scope: string;
  jti: string;
}

export interface IInfo {
  id: number;
  phone: string;
  roles: string[];
  status: string;
  username: string;
}

export interface IAuthSore {
  token: IToken;
  isSignIn: boolean;
  userInfo: IInfo;
}
