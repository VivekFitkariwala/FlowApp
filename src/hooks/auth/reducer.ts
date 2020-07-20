import { AUTH_STATE, AUTH_LOCAL_STORAGE } from "../../types/index";
import { AUTH_ACTIONS, AUTH_ACTION } from "./action";
import { clearLocalStorage, saveLocalStorage } from "../../utils/localStorage";

const AuthReducer = (state: AUTH_STATE, action: AUTH_ACTIONS): AUTH_STATE => {
  let payload: any;
  switch (action.type) {
    case AUTH_ACTION.LOGIN: {
      payload = action.payload;
      if (payload!.rememberMe) {
        saveLocalStorage(
          AUTH_LOCAL_STORAGE,
          JSON.stringify({ email: payload!.email, password: payload!.password })
        );
      }
      return {
        auth: { email: payload!.email, password: payload!.password },
      };
    }

    case AUTH_ACTION.LOGOUT: {
      payload = action.payload;
      clearLocalStorage(AUTH_LOCAL_STORAGE);
      return { auth: null };
    }

    default:
      return state;
  }
};

export default AuthReducer;
