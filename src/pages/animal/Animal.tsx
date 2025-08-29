import "./animal.scss";
import { useContext } from "react";
import { useParams } from "react-router";
import { AnimalContext } from "../../contexts/AnimalContext";
import { AnimalsActionTypes } from "../../reducers/AnimalReducer";
import { handleImageError } from "../../helpers/imageHelper";
import { StatusImage, type HungerStatus } from "../../components/statusImage/StatusImage";
import { Error404 } from "../error/Error404";

export const Animal = () => {
  const { id } = useParams<{ id: string }>();
  const { animals, dispatch } = useContext(AnimalContext);

  const animal = animals.find((a) => a.id.toString() === id);

  if (!animal) {
    return <Error404 />;
  }

  // Check when last fed
  const lastFedTime = new Date(animal.lastFed).getTime();
  const now = Date.now();
  const fourHours = 4 * 60 * 60 * 1000;
  const threeHours = 3 * 60 * 60 * 1000;

  let hungerStatus: HungerStatus = "Mätt";
  if (now - lastFedTime > fourHours) {
    hungerStatus = "Hungrig";
  } else if (now - lastFedTime > threeHours) {
    hungerStatus = "Snart dags att mata";
  }

  const isFedNow = now - lastFedTime > fourHours;

  console.log(animal.isFed);
  console.log(animal.lastFed);

  return (
    <section className="animal-info">
      <div className="top-row">
        <StatusImage className="img-wrapper" imageUrl={animal.imageUrl} alt={animal.name} hungerStatus={hungerStatus} onError={handleImageError} />
        <div className="info">
          <h2>{animal.name}</h2>
          <dl>
            <dt>Latinskt namn:</dt>
            <dd>{animal.latinName}</dd>
            <dt>Födelseår:</dt>
            <dd>{animal.yearOfBirth}</dd>
            <dt>Senast matad:</dt>
            <dd>
              {new Date(animal.lastFed).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} {new Date(animal.lastFed).toLocaleDateString()}
            </dd>
            <dt>Hungerstatus:</dt>
            <dd>
              {hungerStatus === "Mätt" ? "🟢" : hungerStatus === "Snart dags att mata" ? "🟡" : "🔴"} {hungerStatus}
            </dd>
          </dl>
          <button
            className="feed-btn"
            aria-disabled={!isFedNow}
            title={!isFedNow ? "Du kan mata djuret igen när den är hungrig" : ""}
            onClick={() =>
              dispatch({
                type: AnimalsActionTypes.FED_ANIMAL,
                payload: String(animal.id),
              })
            }
            disabled={!isFedNow}
          >
            Mata
          </button>
        </div>
      </div>
      <div className="long-desc">
        <p>{animal.longDescription}</p>
      </div>
    </section>
  );
};
