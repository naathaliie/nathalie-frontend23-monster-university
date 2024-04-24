import { Outlet } from "react-router-dom";
import MonsterBox from "../components/MonsterBox/MonsterBox";
import SearchField from "../components/SearchField/SearchField";

const Monsters = () => {
  return (
    <div className="Monsters">
      <SearchField />
      <MonsterBox />
      <Outlet />
    </div>
  );
};

export default Monsters;
