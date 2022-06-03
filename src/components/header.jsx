import { Link } from "react-router-dom";
import "../styles/header.scss";

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src="#" alt="#" />
        home
      </Link>
      <div>
        <label htmlFor="switch">Dark mode</label>
        <input type="checkbox" name="switch" id="switch" />
      </div>
    </header>
  );
}
