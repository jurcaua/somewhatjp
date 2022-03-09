import React from "react";

import { styled } from "@mui/system";
import { Avatar, Typography } from "@mui/material";

import { main, secret } from "./data";
import SimpleLink from "./SimpleLink";
import { bounce } from "../animations";

const Root = styled("div")({
  backgroundColor: "aliceblue",
  padding: "0 10vw 0 10vw",
  textAlign: "center",
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
  "&:hover": {
    animation: `${bounce} 0.4s infinite !important`,
    animationTimingFunction: `cubic-bezier(0.280, 0.840, 0.420, 1)`,
  },
});

const Title = styled(Typography)({
  textAlign: "center",
  "&:hover": {
    "#dot": {
      animation: `${bounce} 0.7s`,
      animationTimingFunction: `cubic-bezier(0.280, 0.840, 0.420, 1)`,
    },
  },
});

const DisplayPicture = styled(Avatar)(({ theme }) => ({
  display: "inline-block",
  transition: "0.4s",
  border: "#7F00FF solid 2px",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  filter: "brightness(1.1)",
  "&:hover": {
    filter: "brightness(1.25)",
    boxShadow:
      "rgba(240, 46, 170, 0.4) 2px 2px, rgba(240, 46, 170, 0.3) 4px 4px, rgba(240, 46, 170, 0.2) 6px 6px, rgba(240, 46, 170, 0.1) 8px 8px, rgba(240, 46, 170, 0.05) 10px 10px",
  },
}));

const LinksRoot = () => {
  return (
    <Root>
      <Title variant="h2">
        <span style={{ position: "relative" }}>
          somewhatjp
          <Dot id="dot" />
        </span>
      </Title>
      <DisplayPicture
        src={"/dp.jpg"}
        variant="circular"
        alt="somewhatjp display picture"
        sx={{ width: 110, height: 110 }}
      />
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
