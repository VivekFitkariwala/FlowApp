export enum APP_ACTION {
  LOGIN = "login",
  LOGOUT = "logout",
}

interface APP_SIGN_IN {
  type: APP_ACTION;
  payload: {
    email: string;
    password: string;
    rememberMe: boolean;
  };
}

interface APP_LOGOUT {
  type: APP_ACTION;
  payload: null;
}

export type Action = APP_SIGN_IN | APP_LOGOUT;
