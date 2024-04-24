import "./MonsterCard.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { monsterContext } from "../../components/context/MonsterContext";
import { OneMonster } from "../../types/types";

const MonsterCard = () => {
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
    /*     params består av förnamn-efternamn, split("-") skapar en array av strängen i params.monsterId och splittar den till en array med egna element vid varje bindelstreck
       !efter monsterID släcker felmeddelande om att splitparamsname can be undefined :):)):):)*/
    const splitParamsName = params.monsterId!.split("-");

    if (
      splitParamsName[0] === m.firstName &&
      splitParamsName[1] === m.lastName
    ) {
      return m;
    }
  });

  /*   OM/NÄR vi har hittat det valda monstret och dess värde har tilldelats foundMonster
först då skall vi rendera ut diven med all info. Innan dess visar vi bara texten Laddar...
*/ return foundMonster ? (
    <div className="Monster-card">
      {foundMonster.avatar && (
        <img
          src={`/src/assets/img/${foundMonster.avatar}`}
          alt={foundMonster.avatar}
        />
      )}
      <button>läs mer</button>
    </div>
  ) : (
    <p>Laddar...</p>
  );
};

export default MonsterCard;
