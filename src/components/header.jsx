import { useContext } from "react";
import { Link } from "react-router-dom";
import { darkModeContext } from "../contexts/darkModeContext.jsx";
import "../styles/header.scss";

export function Header() {
  const { toggle, set_toggle } = useContext(darkModeContext);

  function handle_dar_mode(event) {
    const documentTheme = document.querySelector("[data-theme]");

    let new_theme;
    if (event) {
      new_theme = "dark";
    } else {
      new_theme = "light";
    }

    set_toggle(event);

    documentTheme.setAttribute("data-theme", new_theme);
    localStorage.setItem("theme", new_theme);
  }

  return (
    <header>
      <Link to="/">
        <img src="#" alt="#" />
        home
      </Link>
      <div className="switch-container">
        <label htmlFor="switch">Dark mode</label>
        <input
          type="checkbox"
          name="switch"
          id="switch"
          checked={toggle}
          onChange={(event) => handle_dar_mode(event.target.checked)}
        />
      </div>
    </header>
  );
}
