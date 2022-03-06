import React from "react";

import { styled } from "@mui/system";

import { main, secret } from "./data";
import SimpleLink from "./SimpleLink";
import { Typography } from "@mui/material";

const Root = styled("div")({
  backgroundColor: "aliceblue",
  padding: "0 10vw 0 10vw",
});

const Dot = styled("span")({
  height: "8px",
  width: "8px",
  backgroundColor: "red",
  borderRadius: "50%",
  display: "inline-block",
  position: "absolute",
  top: "10px",
  right: "calc(50% - 125px)",
});

const Title = styled(Typography)({
  textAlign: "center",
});

const LinksRoot = () => {
  return (
    <Root>
      <Title variant="h2">
        somewhatjp
        <Dot />
      </Title>
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
