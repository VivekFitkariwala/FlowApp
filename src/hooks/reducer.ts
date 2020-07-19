import { APP_STATE, AUTH_LOCAL_STORAGE } from "../types/index";
import { Action, APP_ACTION } from "./actions";
import { clearLocalStorage, saveLocalStorage } from "../utils/localStorage";

const AppReducer = (state: APP_STATE, action: Action) => {
  let payload;
  switch (action.type) {
    case APP_ACTION.LOGIN:
      payload = action.payload;

      // store inside the local storage
      // TODO side effect can be shifter to useEffect
      if (payload!.rememberMe) {
        saveLocalStorage(
          AUTH_LOCAL_STORAGE,
          JSON.stringify({ email: payload!.email, password: payload!.password })
        );
      }

      return {
        ...state,
        auth: { email: payload!.email, password: payload!.password },
      };

    case APP_ACTION.LOGOUT:
      payload = action.payload;
      // TODO side effect can be shifter to useEffect
      clearLocalStorage(AUTH_LOCAL_STORAGE);
      return { ...state, auth: null };
    default:
      return state;
  }
};

export default AppReducer;
