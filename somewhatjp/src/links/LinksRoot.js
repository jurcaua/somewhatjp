import React from "react";

import { styled } from "@mui/system";

import { main, secret } from "./data";
import SimpleLink from "./SimpleLink";
import { Grid } from "@mui/material";

const Root = styled("div")({
  backgroundColor: "aliceblue",
  padding: "0 10vw 0 10vw",
});

const LinksRoot = () => {
  return (
    <Root>
      <p>somewhatjp</p>
      {main.map(data => (
        <div style={{ margin: "0.5vh 0 0.5vh 0" }} key={data.url}>
          <SimpleLink data={data} />
        </div>
      ))}
      {/* TODO */}
      {/* {secret.map(data => (
        <SimpleLink key={data.url} data={data} />
      ))} */}
    </Root>
  );
};

export default LinksRoot;
