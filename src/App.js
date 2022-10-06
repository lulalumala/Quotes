import Home from "./pages.js/Home"
import Login from "./pages.js/Login"
import Quotes from "./pages.js/Quotes"
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Login /> */}
      <Quotes/>
      </>
  )
}
export default App