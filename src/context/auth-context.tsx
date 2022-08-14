import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { authReducer } from "reducers/auth/authReducer";
import { AuthValueType } from "__types__/context/authContext.types";
import { ProviderParamType, TokenType } from "__types__/typeUtils/base.types";

const AuthContext = createContext<AuthValueType>(undefined);
const AuthProvider = ({ children }: ProviderParamType) => {
  const [isAuth, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const [authState, authDispatch] = useReducer(authReducer, {
    error: "",
    loadState: false,
    authData: { isAuth: false, token: "" },
  });

  const setAuthLoadingTrue = () => authDispatch({ type: "SET_LOADING_TRUE" });
  const setAuthError = ({ error }: { error: string }) =>
    authDispatch({ type: "SET_ERROR", payload: { error } });

  const setAuthData = ({ token }: { token: TokenType }) =>
    authDispatch({ type: "SET_AUTH_DATA", payload: { token } });

  const unAuthorize = () => authDispatch({ type: "UNAUTHORIZE" });
  const providerValue = {
    ...authState,
    setAuthError,
    setAuthData,
    unAuthorize,
    setAuthLoadingTrue,
  };
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
