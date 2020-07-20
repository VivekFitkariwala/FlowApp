import React, { useReducer } from "react";
import AuthReducer from "../hooks/auth/reducer";
import { initialAuthState } from "../hooks/auth/store";
import { AuthContext } from "../hooks/auth/context";

function AuthContextProvider(props: any) {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
