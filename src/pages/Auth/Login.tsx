import { useAuth } from "context/auth-context";
import { useUser } from "context/user-context";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { Link, Location, useLocation, useNavigate } from "react-router-dom";
import { loginService } from "services";
import { EmailType, TextType } from "__types__/typeUtils/base.types";

export const Login = () => {
  type LoginDataType = {
    email: EmailType;
    password: TextType;
  };
  const location = useLocation();
  const locationState = location.state as { from: Location };

  const testCreds = {
    email: "guest@xyz.com",
    password: "abc123hh",
  };
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const { setAuthError, setAuthLoadingTrue, setAuthData } = useAuth();
  const initialState = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState<LoginDataType>(initialState);

  const { userDispatch } = useUser();
  const loginHandler = async () => {
    try {
      if (!loginData.email.trim() || !loginData.password.trim()) {
        setStatus((prev) => ({ ...prev, error: "Missing Credentials" }));
      }
      const { email, password } = loginData;
      setStatus((prev) => ({ ...prev, isLoading: true, error: "" }));
      setAuthLoadingTrue();
      userDispatch({ type: "SET_LOADING_TRUE" });
      const response = await loginService({ email, password });
      if (response.status === 200) {
        setLoginData(initialState);
        setStatus((prev) => ({ ...prev, isLoading: false }));
        setAuthData({ token: response.data.encodedToken });
        const {
          playlists,
          watchlater,
          likes,
          dislikes,
          history,
          ...userData
        } = response.data.foundUser;
        userDispatch({
          type: "SET_USER",
          payload: {
            userData,
            userLists: { playlistsData: playlists, watchlater, likes, dislikes, history },
          },
        });
      } else {
        setLoginData(initialState);
        setStatus((prev) => ({
          ...prev,
          isLoading: false,
          error: `${response.status}: ${response.statusText}`,
        }));

        setAuthError({ error: `${response.status}: ${response.statusText}` });
        userDispatch({
          type: "SET_ERROR",
          payload: { error: `${response.status}: ${response.statusText}` },
        });
      }
    } catch (error) {
      setLoginData(initialState);
      setStatus((prev) => ({
        ...prev,
        error: `An error occurred`,
        isLoading: false,
      }));
      setAuthError({ error: `An error occurred` });
      userDispatch({
        type: "SET_ERROR",
        payload: { error: `An error occurred` },
      });
      console.log(error);
    }
  };
  const emailChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLoginData((prev) => ({ ...prev, email: event.target.value }));
  };
  const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setLoginData((prev) => ({ ...prev, password: event.target.value }));
  };

  const guestLoginHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setLoginData(testCreds);
  };
  useEffect(() => {
    const { email, password } = loginData;
    if (email === testCreds.email && password === testCreds.password) {
      loginHandler();
    }
  }, [loginData]);
  return (
    <article>
      {status.error && <p>{status.error}</p>}
      {status.isLoading && <p>Loading...</p>}
      <h2>Login</h2>
      <form>
        <label htmlFor="login-email">Email: </label>
        <input
          type="email"
          name="login"
          id="login-email"
          autoComplete="email"
          value={loginData.email}
          onChange={emailChangeHandler}
        />
        <label htmlFor="login-passsword">Password: </label>
        <input
          type="password"
          name="login"
          id="login-password"
          autoComplete="current-password"
          value={loginData.password}
          onChange={passwordChangeHandler}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          Login
        </button>
        <button onClick={guestLoginHandler}>Login as Guest User</button>
        <Link
          to={"/auth/signup"}
          state={{ from: locationState?.from ?? {} }}
          replace={true}
        >
          Sign Up
        </Link>
      </form>
    </article>
  );
};
