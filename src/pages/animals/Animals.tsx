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
    <section className="animals-page">
      <h2 className="animals-heading">Träffa våra djur</h2>
      <div className="instructions">
        <p>Här bor alla våra gulliga djur! De blir hungriga ibland – precis som du. Håll utkik efter deras mat-status:</p>
        <ul aria-label="Förklaring av färgstatus">
          <li>🟢 Grön - Mätt – jag har ätit och mår toppen!</li>
          <li>🟡 Gul - Snart dags att mata – magen börjar kurra lite...</li>
          <li>🔴 Röd - Hungrig – mata mig, snälla!</li>
        </ul>
        <p>
          Klicka på ett djur för att säga hej och ge det mat när det behövs. Djuren säger inte till med ord, men deras färger visar hur de mår. Klarar du att
          hålla alla mätta och glada?
        </p>
      </div>
      <ul className="animals-listing" aria-label="Lista med våra djur som finns på detta zoo">
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
                    <h3>{a.name}</h3>
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
    </section>
  );
};
