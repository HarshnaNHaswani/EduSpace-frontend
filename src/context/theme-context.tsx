import React, { createContext, useContext, useState } from "react";
import { ProviderValueType, ThemesStateType } from "__types__/context/themeContext.types";
import { ProviderParamType } from "__types__/typeUtils/base.types";



const ThemeContext = createContext<ProviderValueType>(undefined);
const ThemeProvider = ({ children }: ProviderParamType) => {
  const initialValue = {
    dark: true,
  };

  const [themes, setTheme] = useState<ThemesStateType>(initialValue);

  const toggleDarkTheme = () => {
    setTheme((prev: ThemesStateType) => ({ ...prev, dark: !prev.dark }));
  };

  return (
    <ThemeContext.Provider value={{ themes, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
