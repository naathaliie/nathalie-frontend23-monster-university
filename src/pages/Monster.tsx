import { useContext } from "react";
import { useParams } from "react-router-dom";
import { monsterContext } from "../components/context/MonsterContext";
import { OneMonster } from "../types/types";

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

  /*   OM/NÄR vi har hittat det valda monstret och dess värde har tilldelats foundMonster
först då skall vi rendera ut diven med all info. Innan dess visar vi bara texten Laddar...
 */ return foundMonster ? (
    <div className="Monster">
      <ul>
        <li>Namn: {foundMonster.name}</li>
        <li>Ålder: {foundMonster.age} år</li>
        <li>Sort: {foundMonster.species}</li>
        <li>Är ond: {foundMonster.isEvil ? "Ja" : "Nej"}</li>
        <li>Speciella förmågor: {foundMonster.abilities.join(" ,")}.</li>
      </ul>
    </div>
  ) : (
    <p>Laddar...</p>
  );
};

export default Monster;
