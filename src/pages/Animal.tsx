import "./animal.scss";
import { useContext } from "react";
import { useParams } from "react-router";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalsActionTypes } from "../reducers/AnimalReducer";

export const Animal = () => {
  const { id } = useParams<{ id: string }>();
  const { animals, dispatch } = useContext(AnimalContext);

  const animal = animals.find((a) => a.id.toString() === id);

  if (!animal) {
    return <p>Djuret måste ha rymt och kunde inte hittas!</p>;
  }

  // Check when last fed
  const lastFedTime = new Date(animal.lastFed).getTime();
  const fourHours = 4 * 60 * 60 * 1000;
  const canFeed = Date.now() - lastFedTime > fourHours;

  console.log(animal.isFed);
  console.log(animal.lastFed);

  return (
    <section className="animal-info">
      <h2>{animal.name}</h2>
      <div className="top-row">
        <div className="img-wrapper">
          <img src={animal.imageUrl} alt={animal.name} />
        </div>
        <div className="info">
          <dl>
            <dt>Latinnamn:</dt>
            <dd>{animal.latinName}</dd>
            <dt>Födelseår:</dt>
            <dd>{animal.yearOfBirth}</dd>
            <dt>Senast matad:</dt>
            <dd>
              {new Date(animal.lastFed).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} {new Date(animal.lastFed).toLocaleDateString()}
            </dd>
            <dt>Hungerstatus:</dt>
            <dd>{animal.isFed ? "Mätt" : "Hungrig"}</dd>
          </dl>
          <button
            className="feed-btn"
            onClick={() =>
              dispatch({
                type: AnimalsActionTypes.FED_ANIMAL,
                payload: String(animal.id),
              })
            }
            disabled={!canFeed}
          >
            Mata
          </button>
        </div>
      </div>
      <div className="long-desc">{animal.longDescription}</div>
    </section>
  );
};
