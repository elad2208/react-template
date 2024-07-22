import { useState, useEffect } from "react";
import Home from "./Home";
import Help from "./Help";
import About from "./About";
import MyCard from "../Components/Card";

export default function Router(): JSX.Element {
  const [route, setRoute] = useState<string>(window.location.hash.substring(1));
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.substring(1));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  let Child: React.ElementType;
  switch (route) {
    case "/about":
      Child = About;
      break;
    case "/help":
      Child = Help;
      break;
    default:
      Child = Home;
  }
  return (
    <div>
      <h1>App</h1>
      <MyCard/>
      <ul>
        <li>
          <a href="#/about">About</a>
        </li>
        <li>
          <a href="#/help">Help</a>
        </li>
        <li>
          <a href="#/home">Home</a>
        </li>
      </ul>
      <Child />
    </div>
  );
}