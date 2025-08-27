import "./animals.scss";
import { Link } from "react-router";
import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";

export const Animals = () => {
  const { animals } = useContext(AnimalContext);

  console.log(animals);

  return (
    <ul className="animal-listing">
      {animals.map((a) => (
        <li key={a.id}>
          <div className="card-wrapper">
            <div className="card-img-wrapper">
              <img className="card-img" src={a.imageUrl} alt={a.name} />
            </div>
            <div className="card-info">
              <h2>{a.name}</h2>
              <p>{a.shortDescription}</p>
              <div className="card-status"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
