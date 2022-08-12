import { faSun } from "@fortawesome/free-solid-svg-icons";
import React, { Dispatch, SetStateAction } from "react";
import layoutStyles from "../baselayout.module.css";
import { ToggleMenu } from "components/ToggleMenu/ToggleMenu";
import { ToggleDarkTheme } from "components/Theme/ToggleDarkTheme";
import { Search } from "../Search/Search";
import { useNavigate } from "react-router-dom";
type HeaderType = (props: {
  asideMenu: boolean;
  setAsideMenu: Dispatch<SetStateAction<boolean>>;
}) => JSX.Element;

export const Header: HeaderType = ({ asideMenu, setAsideMenu }) => {
  const navigate = useNavigate();
  return (
    <header className={layoutStyles.gridChild}>
      <section>
        <ToggleMenu
          menu={asideMenu}
          setMenu={setAsideMenu}
          classes={layoutStyles.btnHamburger}
        ></ToggleMenu>
        <h1 onClick={() => navigate("/")} className={layoutStyles.siteName}>EduSpace</h1>
      </section>
      <Search shrinkSize={true} searchKey={`header`}/>
      <section>
        <ToggleDarkTheme />
      </section>
    </header>
  );
};
