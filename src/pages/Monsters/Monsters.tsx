import { useContext } from "react";
import { monsterContext } from "../../components/context/MonsterContext";
import { NavLink, Outlet } from "react-router-dom";

const Monsters = () => {
  const { state } = useContext(monsterContext);
  console.log("Detta får jag ut av state, ", state.monsters);
  return (
    <div className="Monsters">
      <div className="monster-links">
        <h1>Alla monster på Monster University</h1>
        {state.monsters.map((monster) => {
          return (
            /* to=vad som står i URL:en */
            <NavLink key={monster.id} to={monster.id}>
              {monster.name}
            </NavLink>
          );
        })}
      </div>
      <div className="the-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Monsters;
