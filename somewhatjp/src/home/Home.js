import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={`/`}>somewhatjp</Link>
      <p>Nothing here yet LMAO all i made was the LINKS page:</p>
      <Link to={`/links`}>Links</Link>
    </div>
  );
};

export default Home;
