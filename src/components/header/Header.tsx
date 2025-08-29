import "./header.scss";
import { Navigation } from "../navigation/Navigation";
import { WaveGraphic } from "../graphics/WaveGraphic";
import { HeadingGraphic } from "../graphics/HeadingGraphics";

export const Header = () => {
  return (
    <header className="header">
      <h1 aria-label="The Zoo">
        <HeadingGraphic text="The Zoo" className="h1" />
      </h1>
      <Navigation />
      <WaveGraphic />
    </header>
  );
};
