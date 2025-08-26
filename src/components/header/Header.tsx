import "./header.scss";
import { Navigation } from "../navigation/Navigation";

export const Header = () => {
  return (
    <header className="header">
      <h1>The Zoo</h1>
      <Navigation />
      <svg className="wave" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 40 
         Q240 80 480 40 
         T960 40 
         T1440 40 
         V100 H0 Z"
          fill="#EFEBCE"
        />
      </svg>
    </header>
  );
};
