import { EmailType, TextType, TokenType } from "../typeUtils/base.types";

export type LoginType = {
  email: EmailType;
  password: TextType;
};

export type SignupType = {
  email: EmailType;
  password: TextType;
  username: TextType;
};

export type AuthStateType = {
  authData: {
    isAuth: boolean;
    token: string;
  };
  error: string;
  loadState: boolean;
};
export type AuthValueType =
  | {
      authData: {
        isAuth: boolean;
        token: string;
      };
      error: string;
      loadState: boolean;
      unAuthorize: () => void;
      setAuthData: ({ token }: { token: TokenType }) => void;
      setAuthError: ({ error }: { error: string }) => void;
      setAuthLoadingTrue: () => void;
    }
  | undefined;
