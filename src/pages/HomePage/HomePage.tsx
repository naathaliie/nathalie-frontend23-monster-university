import "../ErrorPage/ErrorPage";
import { Outlet } from "react-router-dom";
import "./HomePage.scss";

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
