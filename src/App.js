import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AOS from "aos";
import PageRoutes from "./Routes/router";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  const routing = useRoutes(PageRoutes); // setting up routing
  return <div className='App'>{routing}</div>;
}

export default App;
