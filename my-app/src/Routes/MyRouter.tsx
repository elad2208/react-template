import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NiceImage from "../Components/NiceImage";
function Layout(): JSX.Element {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nice-image/200">Nice Image 200</Link>
          </li>
          <li>
            <Link to="/nice-image/44">Nice Image 44</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
function MyRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nice-image/:id" element={<NiceImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default MyRouter;
