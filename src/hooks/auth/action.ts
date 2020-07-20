import React from "react";

export enum AUTH_ACTION {
  LOGIN = "[AUTH] login",
  LOGOUT = "[AUTH] logout",
}

interface SIGN_IN {
  type: AUTH_ACTION;
  payload: {
    email: string;
    password: string;
    rememberMe: boolean;
  };
}

interface LOGOUT {
  type: AUTH_ACTION;
  payload: null;
}

export function dispatchSignIn(
  dispatch: React.Dispatch<AUTH_ACTIONS>,
  email: string,
  password: string,
  rememberMe: boolean
) {
  dispatch({
    type: AUTH_ACTION.LOGIN,
    payload: {
      email,
      password,
      rememberMe,
    },
  });
}

export function dispatchLogout(dispatch: React.Dispatch<AUTH_ACTIONS>) {
  dispatch({
    type: AUTH_ACTION.LOGOUT,
    payload: null,
  });
}

export type AUTH_ACTIONS = SIGN_IN | LOGOUT;
