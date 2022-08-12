import React from "react";
import { useTheme } from "context/theme-context";
import themeStyles from "./themeStyles.module.css";
import Sun from "assets/sun.svg";
import Moon from "assets/moon.svg";

export const ToggleDarkTheme = () => {
  const {
    themes: { dark },
    toggleDarkTheme,
  } = useTheme();
  return (
    <button
      onClick={toggleDarkTheme}
      className={
        themeStyles.btnToggleDarkMode + " " + (dark ? "" : themeStyles.dark)
      }
    >
      {dark ? (
        <>
          <img src={Sun} alt="light-mode" title="switch to light" />
          {/* <FontAwesomeIcon icon={faSun} className="light" /> */}
        </>
      ) : (
        <img src={Moon} alt="dark-mode" title="switch to dark" />
      )}
    </button>
  );
};
