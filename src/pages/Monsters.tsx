import { useContext } from "react";
import { monsterContext } from "../components/context/MonsterContext";

const Monsters = () => {
  const { state } = useContext(monsterContext);
  console.log("Detta får jag ut av state, ", state.monsters);
  return <div className="Monsters">Monsters</div>;
};

export default Monsters;
