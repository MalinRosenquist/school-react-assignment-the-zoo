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
    <>
      {animals.map((a) => (
        <div key={a.id}>
          <h2>{a.name}</h2>
        </div>
      ))}
    </>
  );
};
