import "./App.css";

// External Package Imports
import { Routes, Route, Link } from "react-router-dom";

// Local
import Home from "./home/Home";
import Links from "./links/Links";

const App = () => {
  return (
    <div>
      <Link to={`/`}>HOME</Link>
      <Routes>
        <Route exact path={`/links`} element={<Links />} />
        <Route path={`/`} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
