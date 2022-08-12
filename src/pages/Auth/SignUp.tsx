import { useAuth } from "context/auth-context";
import { useUser } from "context/user-context";
import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signUpService } from "services";
import { EmailType } from "__types__/typeUtils/base.types";

export const SignUp = () => {
  type SignupDataType = {
    email: EmailType;
    username: string;
    password: string;
    confirmPassword: string;
  };
  const location = useLocation();
  const locationState = location.state as { from: Location };
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const initialState = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [signUpData, setSignUpData] = useState<SignupDataType>(initialState);
  const { setAuthData } = useAuth();
  const { userDispatch } = useUser();

  const signUpHandler: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    try {
      const { email, password, username } = signUpData;
      if (!email || !password || !username) {
        setStatus((prev) => ({ ...prev, error: "Some Fields are empty" }));
      }
      const response = await signUpService({ email, password, username });
      if (response.status === 201) {
        setSignUpData(initialState);
        setStatus((prev) => ({ ...prev, isLoading: false }));
        setAuthData({ token: response.data.encodedToken });
        const {
          playlists,
          watchlater,
          likes,
          dislikes,
          history,
          ...userData
        } = response.data.createdUser;
        userDispatch({
          type: "SET_USER",
          payload: {
            userData,
            userLists: {
              playlistsData: playlists,
              watchlater,
              likes,
              dislikes,
              history,
            },
          },
        });
      } else {
        setStatus((prev) => ({
          ...prev,
          isLoading: false,
          error: `${response.status}: ${response.statusText}`,
        }));
      }
    } catch (error) {
      setStatus((prev) => ({
        ...prev,
        error: `An error occurred`,
        isLoading: false,
      }));
      console.log(error);
    }
  };
  const confirmPasswordChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSignUpData((prev) => ({ ...prev, confirmPassword: event.target.value }));
    if (event.target.value !== signUpData.password && !confirmPasswordError) {
      setConfirmPasswordError(true);
    }
    if (event.target.value === signUpData.password && confirmPasswordError)
      setConfirmPasswordError(false);
  };
  const emailChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSignUpData((prev) => ({ ...prev, email: event.target.value.trim() }));
  };
  const usernameChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSignUpData((prev) => ({ ...prev, username: event.target.value.trim() }));
  };
  const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSignUpData((prev) => ({ ...prev, password: event.target.value.trim() }));
  };
  return (
    <article>
      {status.error && <p>{status.error}</p>}
      {status.isLoading && <p>Loading...</p>}
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="signup-email">Email: </label>
        <input
          type="email"
          name="signup"
          id="signup-email"
          value={signUpData.email}
          onChange={emailChangeHandler}
        />

        <label htmlFor="signup-username">Username: </label>
        <input
          type="text"
          name="signup"
          id="signup-username"
          value={signUpData.username}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="signup-password">Password: </label>
        <input
          type="password"
          name="signup"
          id="signup-password"
          value={signUpData.password}
          onChange={passwordChangeHandler}
        />

        <label htmlFor="signup-confirm-password">Password: </label>
        <input
          type="password"
          name="signup"
          id="signup-confirm-password"
          value={signUpData.confirmPassword}
          onChange={confirmPasswordChangeHandler}
        />
        {confirmPasswordError && <p>Passwords Don't Match</p>}

        <button onClick={signUpHandler}>Sign Up</button>
        <Link
          to="/auth/login"
          state={{ from: locationState?.from ?? {} }}
          replace={true}
        >
          Login
        </Link>
      </form>
    </article>
  );
};
