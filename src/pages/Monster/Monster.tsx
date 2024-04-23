import { useContext } from "react";
import { useParams } from "react-router-dom";
import { monsterContext } from "../../components/context/MonsterContext";
import { OneMonster } from "../../types/types";
import "./Monster.scss";
import bild from "../../assets/img/spike_avatar.png";

const Monster = () => {
  /* useParams() är en funktion som används för att hämta 
parametrar från URL:en i en React-applikation. Till exempel,
 om din URL ser ut som "/profile/:userId", så kan useParams() 
 användas för att hämta värdet av ":userId" från URL:en. 
 Denna funktion gör det enkelt att få tillgång till och använda 
 dynamisk information som finns i URL:en i din React-komponent */
  const params = useParams<{ monsterId: string }>();

  //För att komma åt alla monster
  const { state } = useContext(monsterContext);

  //Hitta det monster som har samma id som params.monsterId
  const foundMonster: OneMonster | undefined = state.monsters.find((m) => {
    return m.id === params.monsterId;
  });
  console.log("bilden,", bild);
  /*   OM/NÄR vi har hittat det valda monstret och dess värde har tilldelats foundMonster
först då skall vi rendera ut diven med all info. Innan dess visar vi bara texten Laddar...
 */ return foundMonster ? (
    <div className="Monster">
      <ul>
        <li>
          Namn: {foundMonster.firstName} {foundMonster.lastName}
        </li>
        <li>Typ: {foundMonster.class}</li>
        <li>Kurs: {foundMonster.program}</li>
        <li>Egenskaper: {foundMonster.description}</li>
        <li>Beskrivning: {foundMonster.appearance.color}.</li>
        <li>
          <img
            src={`/src/assets/img/${foundMonster.avatar}`}
            alt={foundMonster.avatar}
          />
        </li>
      </ul>
    </div>
  ) : (
    <p>Laddar...</p>
  );
};

export default Monster;
