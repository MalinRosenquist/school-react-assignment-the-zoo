import "./animals.scss";
import { Link } from "react-router";
import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";

export const Animals = () => {
  const { animals } = useContext(AnimalContext);

  console.log(animals);

  return (
    <ul className="animal-listing">
      {animals.map((a) => {
        const lastFedTime = new Date(a.lastFed).getTime();
        const now = Date.now();
        const threeHours = 10000;
        const fiveHours = 15000;
        // const threeHours = 3 * 60 * 60 * 1000;
        // const fiveHours = 5 * 60 * 60 * 1000;

        let hungerStatus = "Mätt";
        if (now - lastFedTime > fiveHours) {
          hungerStatus = "Hungrig";
        } else if (now - lastFedTime > threeHours) {
          hungerStatus = "Snart dags att mata";
        }

        return (
          <li key={a.id}>
            <div className="card-wrapper">
              <div className={`card-img-wrapper ${hungerStatus === "Mätt" ? "fed" : hungerStatus === "Snart dags att mata" ? "soon" : "hungry"}`}>
                <Link to={`/animal/${a.id}`}>
                  <img className="card-img" src={a.imageUrl} alt={a.name} />
                </Link>
              </div>
              <div className="card-info">
                <h2>{a.name}</h2>
                <span>
                  {hungerStatus === "Mätt" ? "🟢" : hungerStatus === "Snart dags att mata" ? "🟡" : "🔴"} {hungerStatus}
                </span>
                <p>{a.shortDescription}</p>
                <div className="card-status"></div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
