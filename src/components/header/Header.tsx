import "./header.scss";
import { Navigation } from "../navigation/Navigation";
import { WaveGraphic } from "../graphics/WaveGraphic";
import { HeadingGraphic } from "../graphics/HeadingGraphics";

export const Header = () => {
  return (
    <header className="header">
      <h1>
        <HeadingGraphic text="The Zoo" className="h1" />
      </h1>
      <Navigation />
      <WaveGraphic />
    </header>
  );
};
