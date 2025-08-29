import "./animals.scss";
import { useContext } from "react";
import { Link } from "react-router";
import { AnimalContext } from "../../contexts/AnimalContext";
import { StatusImage, type HungerStatus } from "../../components/statusImage/StatusImage";
import { handleImageError } from "../../helpers/imageHelper";

export const Animals = () => {
  const { animals } = useContext(AnimalContext);

  console.log(animals);

  return (
    <ul className="animal-listing">
      {animals.map((a) => {
        const lastFedTime = new Date(a.lastFed).getTime();
        const now = Date.now();
        const threeHours = 3 * 60 * 60 * 1000;
        const fiveHours = 5 * 60 * 60 * 1000;

        let hungerStatus: HungerStatus = "Mätt";
        if (now - lastFedTime > fiveHours) {
          hungerStatus = "Hungrig";
        } else if (now - lastFedTime > threeHours) {
          hungerStatus = "Snart dags att mata";
        }

        return (
          <li key={a.id}>
            <Link to={`/animal/${a.id}`} className="card-link">
              <div className="card-wrapper">
                <StatusImage className="card-img-wrapper" imageUrl={a.imageUrl} alt={a.name} hungerStatus={hungerStatus} onError={handleImageError} />
                <div className="card-info">
                  <h2>{a.name}</h2>
                  <span>
                    {hungerStatus === "Mätt" ? "🟢" : hungerStatus === "Snart dags att mata" ? "🟡" : "🔴"} {hungerStatus}
                  </span>
                  <p>{a.shortDescription}</p>
                  <div className="card-status"></div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
