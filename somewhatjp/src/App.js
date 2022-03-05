import "./App.css";

// External Package Imports
import { Routes, Route } from "react-router-dom";

// Local
import Home from "./home/Home";
import Links from "./links/Links";

const App = () => {
  return (
    <Routes>
      <Route exact path={`/links`} element={<Links />} />
      <Route path={`/`} element={<Home />} />
    </Routes>
  );
};

export default App;
