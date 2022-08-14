import { AuthStateType } from "__types__/context/authContext.types";
import { AuthActionType } from "__types__/reducer/authReducerActions.types";

export const authReducer = (state: AuthStateType, action: AuthActionType) => {
  switch (action.type) {
    case "SET_AUTH_DATA":
      return {
        ...state,
        authData: {
          ...state.authData,
          token: action.payload.token,
          isAuth: true,
        },
        loadState: false,
      };
    case "UNAUTHORIZE":
      return {
        ...state,
        authData: {
          ...state.authData,
          token: "",
          isAuth: false,
        },
      };
    case "SET_LOADING_TRUE":
      return {
        ...state,
        loadState: true,
        error: "",
      };
    case "SET_ERROR":
      return {
        ...state,
        loadState: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
