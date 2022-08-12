import React from "react";
import { useTheme } from "context/theme-context";

export const getThemeClass = (): string => {
  const {
    themes: { dark },
  } = useTheme();

  return dark ? "dark" : "";
};

export const getInvertedThemeClass = (): string => {
  const {
    themes: { dark },
  } = useTheme();

  return dark ? "" : "dark";
};
