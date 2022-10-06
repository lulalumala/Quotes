import Home from "./pages.js/Home"
import Login from "./pages.js/Login"
import Quotes from "./pages.js/Quotes"
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/quotes" element={<Quotes/>}></Route>
      </Routes>

    </Router>
  )
}
export default App