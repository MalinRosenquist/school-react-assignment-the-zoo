import { WaveGraphic } from "../graphics/WaveGraphic";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <WaveGraphic />
      <p>© {new Date().getFullYear()} Skolprojekt utvecklat av Malin Rosenquist.</p>
    </footer>
  );
};
