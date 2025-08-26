import "./animals.scss";
import { useEffect, useState } from "react";
import { getAllAnimals } from "../services/animalService";
import type { Animal } from "../models/Animal";

export const Animals = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  // Fetching animals from API or LocalStorage
  useEffect(() => {
    const savedAnimals = localStorage.getItem("animals");

    if (savedAnimals) {
      setAnimals(JSON.parse(savedAnimals));
      console.log("Fetching from localstorage");
    } else {
      const getData = async () => {
        const animals = await getAllAnimals();
        localStorage.setItem("animals", JSON.stringify(animals));
        setAnimals(animals);
        console.log("Fetching from API");
      };
      getData();
    }
  }, []);

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
