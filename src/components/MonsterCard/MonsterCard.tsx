import "./MonsterCard.scss";
import { useContext, useState } from "react";
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
  //hejconbejcon
  const [showDefault, setShowDefault] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showCourseAndGrades, setShowCourseAndGrades] = useState(false);

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

  //handleDeleteKlick
  const handleDeleteKlick = () => {
    const checkIfDelete = confirm(
      "Är du säker på att du vill radera din anteckning?"
    );
    if (checkIfDelete) {
    } else {
      return;
    }
  };

  /*   OM/NÄR vi har hittat det valda monstret och dess värde har tilldelats foundMonster
först då skall vi rendera ut diven med all info. Innan dess visar vi bara texten Laddar...
*/ return foundMonster ? (
    <div className="Monster-card">
      <div className="profile-pic">
        <img
          src={`/src/assets/img/${foundMonster.avatar}`}
          alt={foundMonster.avatar}
        />
        <p>{foundMonster.firstName}</p>
      </div>
      <div className="info-box">
        <h2>
          {foundMonster.firstName} {foundMonster.lastName}
        </h2>
        <h3>Program: {foundMonster.program}</h3>
        <button
          onClick={() => {
            if (showAbout) {
              setShowAbout(false);
            }
            if (showCourseAndGrades) {
              setShowCourseAndGrades(false);
            }
            setShowDefault(!showDefault);
          }}
        >
          Allt
        </button>
        <button
          onClick={() => {
            if (showCourseAndGrades) {
              setShowCourseAndGrades(false);
            }
            if (showDefault) {
              setShowDefault(false);
            }
            setShowAbout(!showAbout);
          }}
        >
          Personligt
        </button>
        <button
          onClick={() => {
            if (showAbout) {
              setShowAbout(false);
            }
            if (showDefault) {
              setShowDefault(false);
            }

            setShowCourseAndGrades(!showCourseAndGrades);
          }}
        >
          Kurser och betyg
        </button>

        {showDefault && (
          <div className={`klicked-info`} key={foundMonster.id}>
            <ul>
              <li>Beskrivning: {foundMonster.description.join(", ")}</li>
              <li>
                Utséende:{" "}
                <ul>
                  <li>Färg: {foundMonster.appearance.color}</li>
                  <li>
                    Har horn? {foundMonster.appearance.hasHorns ? "Ja" : "Nej"}
                  </li>
                  <li>Antal ögon: {foundMonster.appearance.numberOfEyes}</li>
                  <li>
                    {foundMonster.appearance.numberOfTentacles > 0 &&
                      `Antal tentakler: ${foundMonster.appearance.numberOfTentacles}`}
                  </li>
                </ul>
                <li>Birthday suite: {foundMonster.appearance.skinOrFurType}</li>
              </li>
            </ul>
          </div>
        )}
        {showAbout && (
          <div className={`klicked-info`} key={foundMonster.id}>
            <ul>
              <li>Beskrivning: {foundMonster.description.join(", ")}</li>
              <li>Intressen: {foundMonster.interests.join(", ")}</li>
            </ul>
          </div>
        )}
        {showCourseAndGrades && (
          <div className={`klicked-info`} key={foundMonster.id}>
            <ul>
              <li>Kurser: {foundMonster.courses.join(", ")}</li>
              <li>
                Betyg:{" "}
                {foundMonster.grades.map((g, index) => {
                  return (
                    <p key={index}>
                      {g.course}: {g.grade}
                    </p>
                  );
                })}
              </li>
            </ul>
          </div>
        )}
        <button className="btn delete-btn" onClick={handleDeleteKlick}>
          Radera monster
        </button>
      </div>
    </div>
  ) : (
    <p>Laddar...</p>
  );
};

export default MonsterCard;
