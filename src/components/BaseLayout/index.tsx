import { useState } from "react";
import { Outlet } from "react-router-dom";
import layoutStyles from "./baselayout.module.css";
import { Header } from "./Header/Header";
import { SideNav } from "./Nav/SideNav";

export const BaseLayout = () => {
  const [asideMenu, setAsideMenu] = useState(false);
  return (
    <div className={layoutStyles.gridContainer}>
      <Header asideMenu={asideMenu} setAsideMenu={setAsideMenu}></Header>
      <SideNav asideMenu={asideMenu} setAsideMenu={setAsideMenu}></SideNav>

      <main className={layoutStyles.gridChild}>
        <Outlet />
      </main>
      <footer className={layoutStyles.gridChild}>
        Developed by <span className="highlight">Harshna Haswani</span>
      </footer>
    </div>
  );
};
