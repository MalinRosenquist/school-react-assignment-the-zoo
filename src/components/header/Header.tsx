import "./header.scss";
import { Navigation } from "../navigation/Navigation";
import { WaveGraphic } from "../graphics/WaveGraphic";

export const Header = () => {
  return (
    <header className="header">
      <h1>The Zoo</h1>
      <Navigation />
      <WaveGraphic />
    </header>
  );
};
