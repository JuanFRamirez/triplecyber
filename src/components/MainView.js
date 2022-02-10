import react from "react";
import { Link, useNavigate } from "react-router-dom";
const MainView = () => {
  return (
    <div className="main-container">
      <div className="presentation">
        <h1>Triplecyber test</h1>
        <h2>Perfomed by Juan Ramirez using Reactjs</h2>
      </div>
      <div className="menu">
        <div className="menu1">
          <h3>Fibonacci serie test</h3>
          <Link to={"/fibonacci"}>Go</Link>
        </div>
        <div className="menu2">
          <h3>Random Number test</h3>
          <Link to={"/random"}>Go</Link>
        </div>
        <div className="menu3">
          <h3>Bills test</h3>
          <Link to={"/bills"}>Go</Link>
        </div>
        <div className="menu4">
          <h3>Movie API test</h3>
          <Link to={"/movies"}>Go</Link>
        </div>
      </div>
    </div>
  );
};

export default MainView;
