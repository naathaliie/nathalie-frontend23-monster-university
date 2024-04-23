import { useContext, useState } from "react";
import { monsterContext } from "../../components/context/MonsterContext";
import { NavLink, Outlet } from "react-router-dom";
import "./Monsters.scss";
import MonsterBox from "../../components/MonsterBox/MonsterBox";

const Monsters = () => {
  return (
    <div className="Monsters">
      <MonsterBox />
      <Outlet />
    </div>
  );
};

export default Monsters;
