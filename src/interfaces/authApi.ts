
export interface ISignInApi {
  username: string;
  password: string;
}

export interface IAuthSore {
  token: {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: string;
    scope: string;
    jti: string;
  };
  isSignIn: boolean;
  userInfo: any;
}
