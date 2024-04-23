import { Outlet } from "react-router-dom";
import MonsterBox from "../components/MonsterBox/MonsterBox";

const Monsters = () => {
  return (
    <div className="Monsters">
      <MonsterBox />
      <Outlet />
    </div>
  );
};

export default Monsters;
