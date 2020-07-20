import { getFromLocalStorage } from "../../utils/localStorage";
import { AUTH_LOCAL_STORAGE, AUTH_STATE } from "../../types/index";

export const initialAuthState: AUTH_STATE = {
  auth: getFromLocalStorage(AUTH_LOCAL_STORAGE) || null,
};
