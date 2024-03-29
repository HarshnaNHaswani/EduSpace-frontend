import {
  faClock,
  faCompass,
  faPhotoFilm,
  faQuestion,
  faRightFromBracket,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "context/auth-context";
import { useUser } from "context/user-context";
import { Dispatch, SetStateAction } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { checkActive } from "utils/checkActive";
import layoutStyles from "../baselayout.module.css";
import { Search } from "../Search/Search";
type SideNavType = (props: {
  asideMenu: boolean;
  setAsideMenu: Dispatch<SetStateAction<boolean>>;
}) => JSX.Element;
export const SideNav: SideNavType = ({ asideMenu, setAsideMenu }) => {
  const {
    authData: { isAuth },
    unAuthorize,
  } = useAuth();
  const { userDispatch } = useUser();
  const navigate = useNavigate();
  const logButtonHandler = () => {
    if (isAuth) {
      unAuthorize();
      userDispatch({ type: "RESET_USER_DATA" });
    } else navigate("/auth/login", { replace: true });
  };
  return (
    <aside
      className={`${layoutStyles.gridChild} ${
        asideMenu ? layoutStyles.show : layoutStyles.hide
      }`}
    >
      <Search shrinkSize={false} searchKey={`sidenav`} />
      <nav>
        <NavLink to="/explore" className={checkActive}>
          <FontAwesomeIcon className={layoutStyles.icon} icon={faCompass} />
          <span>Explore</span>
        </NavLink>

        <NavLink to="/user/playlists" className={checkActive}>
          <FontAwesomeIcon className={layoutStyles.icon} icon={faPhotoFilm} />
          <span>Playlists</span>
        </NavLink>

        <NavLink to="/user/watch-later" className={checkActive}>
          <FontAwesomeIcon className={layoutStyles.icon} icon={faClock} />
          <span>Watch Later</span>
        </NavLink>
        <NavLink to="/user/bookmarked-quizzes" className={checkActive}>
          <FontAwesomeIcon className={layoutStyles.icon} icon={faQuestion} />
          <span>Bookmarked Quizzes</span>
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/user/profile" className={checkActive}>
          <FontAwesomeIcon className={layoutStyles.icon} icon={faUser} />
          <span>Profile</span>
        </NavLink>
        <button onClick={logButtonHandler}>
          {isAuth ? (
            <>
              <FontAwesomeIcon
                className={layoutStyles.icon}
                icon={faRightToBracket}
              />
              <span>Logout</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className={layoutStyles.icon}
                icon={faRightFromBracket}
              />
              <span>Login</span>
            </>
          )}
        </button>
      </nav>
    </aside>
  );
};
