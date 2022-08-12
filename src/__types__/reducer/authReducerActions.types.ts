import { type } from "os";
import { TokenType } from "__types__/typeUtils/base.types";

export type SetErrorType = {
  type: "SET_ERROR";
  payload: {
    error: string;
  };
};
export type SetLoadingTrueType = {
  type: "SET_LOADING_TRUE";
};

export type SetAuthData = {
  type: "SET_AUTH_DATA";
  payload: {
    token: TokenType;
  };
};

export type UnAuthType = {
  type: "UNAUTHORIZE";
};

export type AuthActionType =
  | SetErrorType
  | SetLoadingTrueType
  | SetAuthData
  | UnAuthType;
