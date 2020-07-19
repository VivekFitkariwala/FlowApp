import { APP_STATE, AUTH_LOCAL_STORAGE } from "../types/index";
import { getFromLocalStorage } from "../utils/localStorage";

export const initialState: APP_STATE = {
  auth: getFromLocalStorage(AUTH_LOCAL_STORAGE) || null,
  workflowState: [],
};
