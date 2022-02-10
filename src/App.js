import logo from "./logo.svg";
import "./App.css";
import "./components/Fibonacci";
import Fibonnaci from "./components/Fibonacci";
import Random from "./components/Random";
import { Fragment } from "react/cjs/react.production.min";
import Bills from "./components/Bills";
import Movies from "./components/Movies/Movies";
import MainView from "./components/MainView";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMovie from "./components/Movies/SingleMovie";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Menu/>
        <Routes>
          <Route exact path={"/"} element={<MainView />}></Route>
          <Route exact path={"/fibonacci"} element={<Fibonnaci />}></Route>
          <Route exact path={"/random"} element={<Random />}></Route>
          <Route exact path={"/bills"} element={<Bills />}></Route>
          <Route exact path={"/movies"} element={<Movies />}></Route>
          <Route exact path={"/detail"} element={<SingleMovie />}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
