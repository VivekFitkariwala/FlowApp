import React, { useReducer } from "react";
import { AppContext } from "./hooks/context";
import { initialState } from "./hooks/store";
import AppReducer from "./hooks/reducer";

function AppContextProvider(props: any) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
