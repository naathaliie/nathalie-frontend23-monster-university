import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1>Ooops...something went wrong</h1>
      <Link to={"/"}>Go back home</Link>
    </div>
  );
};

export default ErrorPage;
