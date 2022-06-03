import { createContext, useEffect, useState } from "react";

export const darkModeContext = createContext();

export function DarkModeContextProvider({ children }) {
  const [current_theme, set_current_theme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [toggle, set_toggle] = useState(false);

  useEffect(() => {
    const documentTheme = document.querySelector("[data-theme]");

    let new_theme;
    if (current_theme === "dark") {
      new_theme = "dark";
      set_toggle(true);
    } else {
      new_theme = "light";
      set_toggle(false);
    }

    documentTheme.setAttribute("data-theme", new_theme);
    localStorage.setItem("theme", new_theme);
  }, [current_theme]);

  return (
    <darkModeContext.Provider
      value={{ current_theme, toggle, set_current_theme, set_toggle }}
    >
      {children}
    </darkModeContext.Provider>
  );
}
