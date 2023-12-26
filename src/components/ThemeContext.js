import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("#1e5799");

  const changeThemeColor = (color) => {
    setThemeColor(color);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, changeThemeColor }}>
      <div style={{ background: themeColor }}>{children}</div>
    </ThemeContext.Provider>
  );
};
