import { useContext, useState } from "react";
import { monsterContext } from "../context/MonsterContext";
import { NavLink } from "react-router-dom";

const MonsterBox = () => {
  //För att flytta på monsterlinks och visa ett monster
  const [move, setMove] = useState("");
  //komma åt monstercontext
  const { state } = useContext(monsterContext);

  //*Sortera monster efter förnamn i alfabetisk ordning
  const sortedMonsters = state.monsters.slice().sort((a, b) => {
    return a.firstName.localeCompare(b.firstName);
  });

  return (
    <div className="MonsterBox">
      <div className={`monster-links ${move}`}>
        <h1>Alla monster på Monster University</h1>
        {sortedMonsters.map((monster) => {
          return (
            /* to=vad som står i URL:en */
            <NavLink
              className={"nav-link"}
              key={monster.id}
              to={`${monster.firstName}-${monster.lastName}`}
              onClick={() => {
                setMove("move");
              }}
            >
              {monster.firstName}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MonsterBox;

/* *sort()-metoden för att sortera en kopia av state.monsters-arrayen 
baserat på firstName för varje monster. localeCompare()-metoden används 
för att utföra en alfabetisk jämförelse som beaktar teckenföljd och 
teckenuppsättningens specifika regler, vilket ger en korrekt sortering 
oavsett språk */
