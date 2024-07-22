import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Help from "./Help";
import About from "./About";
function AppRouter(): JSX.Element {
  return (
    <Router>
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/help/6382020">Help</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/help/:id" element={<Help />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default AppRouter;
