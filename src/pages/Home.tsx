import "./home.scss";
import hedgehog from "../images/hedgehog.jpg";
import bunny from "../images/bunny.jpg";
import { Link } from "react-router";

export const Home = () => {
  return (
    <section className="home-section">
      <div className="big-img-wrapper">
        <img src={hedgehog} />
      </div>
      <div className="right-wrapper">
        <div className="intro-text">
          <p>Har du någonsin drömt om att ta hand om ett helt zoo? Här kan du mata alla dina favoritdjur och se till att de trivs – allt på ett klick!</p>
        </div>
        <div>
          <Link to={"/animals"}>
            <span className="link-btn">Träffa alla djuren här!</span>
          </Link>
        </div>
        <div className="small-img-wrapper">
          <img src={bunny} />
        </div>
      </div>
    </section>
  );
};
