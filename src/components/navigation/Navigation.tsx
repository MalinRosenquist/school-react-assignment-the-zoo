import "./navigation.scss";
import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav>
      <ul className="nav-ul">
        <li>
          <NavLink to="/">Hem</NavLink>
        </li>
        <li>
          <NavLink to="/animals">Djuren</NavLink>
        </li>
      </ul>
    </nav>
  );
};
