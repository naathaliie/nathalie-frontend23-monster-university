import { Link, NavLink, Outlet } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="nav-title">
          <Link key={"home"} to={"/"} className="title">
            Monster University
          </Link>
        </div>

        <div className="nav-links">
          <NavLink key={"home"} to={"/"}>
            HomePage
          </NavLink>
          <NavLink key={"allMonsters"} to={"/monsters"}>
            Alla Monster
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
