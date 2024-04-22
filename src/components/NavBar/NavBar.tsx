import { NavLink } from "react-router-dom";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-links">
        <NavLink key={"home"} to={"/"}>
          HomePage
        </NavLink>
        <NavLink key={"allMonsters"} to={"/monsters"}>
          Alla Monster
        </NavLink>
      </div>

      <div className="nav-title">
        <p className="title">Monster University</p>
      </div>
    </div>
  );
};

export default NavBar;
