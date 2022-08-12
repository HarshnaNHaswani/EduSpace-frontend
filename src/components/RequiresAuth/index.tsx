import { useAuth } from "context/auth-context";
import { Navigate, useLocation, Outlet } from "react-router-dom";
export function RequiresAuth() {
  const location = useLocation();
  const {
    authData: { isAuth },
    error,
    loadState
  } = useAuth();
  return isAuth ? (
    <Outlet />
  ): error?<h4>{error}</h4>: loadState ? <p>Loading...</p> : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
}
