import { Home } from "../components/HomePage";
import NavBar from "../components/NavBar/NavBar";
import "../pages/ErrorPage";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <h1>välkommen till monster UI</h1>
      <Outlet />
    </div>
  );
}

export default HomePage;

/* Outlet = Monsters.tsx */
