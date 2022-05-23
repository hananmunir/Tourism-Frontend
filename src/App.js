import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PageRoutes from "./Routes/router";
import { useRoutes } from "react-router-dom";

function App() {
  const routing = useRoutes(PageRoutes);
  return <div className='App'>{routing}</div>;
}

export default App;
