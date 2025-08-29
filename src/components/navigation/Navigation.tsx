import { TextGraphic } from "../graphics/TextGraphic";
import "./navigation.scss";
import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav aria-label="Navigation">
      <ul className="nav-ul">
        <li>
          <NavLink to="/" aria-label="Hem">
            <TextGraphic text="Hem" className="link" fontFamily="'Life Savers', serif" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/animals" aria-label="Djuren">
            <TextGraphic text="Djuren" className="link" fontFamily="'Life Savers', serif" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
