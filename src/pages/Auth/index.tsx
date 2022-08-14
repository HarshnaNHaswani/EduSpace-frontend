import { useAuth } from "context/auth-context";
import React, { useEffect } from "react";
import {
  Location,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

export const Auth = () => {
  type LocationStateType = {
    from: Location;
  };
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as LocationStateType;
  const {
    authData: { isAuth, token },
  } = useAuth();
  useEffect(() => {
    if (isAuth && token && !location.pathname.includes("update-password")) {
      navigate("/");
    } else {
      navigate("/auth/login", {
        replace: true,
        state: { from: locationState?.from ?? {} },
      });
    }
  }, []);

  useEffect(() => {
    if (isAuth && !location.pathname.includes("update-password")) {
      navigate(`${locationState?.from?.pathname ?? "/"}`);
    }
  }, [isAuth]);
  return (
    <div>
      <Outlet />
    </div>
  );
};
