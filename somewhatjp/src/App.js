import "./App.css";

// External Package Imports
import { Routes, Route, Link } from "react-router-dom";

// Local
import Home from "./home/Home";
import LinksRoot from "./links/LinksRoot";
import { styled } from "@mui/system";

const Root = styled("div")({
  backgroundColor: "aliceblue",
  height: "100vh",
});

const App = () => {
  return (
    <Root>
      <Routes>
        <Route exact path={`/links`} element={<LinksRoot />} />
        <Route path={`/`} element={<Home />} />
      </Routes>
    </Root>
  );
};

export default App;
