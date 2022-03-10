import React from "react";

import { styled } from "@mui/system";
import { Avatar, Grid, Typography } from "@mui/material";

import { main, secret } from "./data";
import SimpleLink from "./SimpleLink";
import { bounce } from "../animations";

const Root = styled(Grid)({
  backgroundColor: "aliceblue",
  padding: "0 8vw 0 8vw",
  textAlign: "center",
});

const Dot = styled("span")({
  height: "6px",
  width: "6px",
  backgroundColor: "red",
  borderRadius: "50%",
  display: "inline-block",
  position: "absolute",
  top: "8px",
  right: "calc(50% - 93px)",
  "&:hover": {
    animation: `${bounce} 0.4s infinite !important`,
    animationTimingFunction: `cubic-bezier(0.280, 0.840, 0.420, 1)`,
  },
});

const Title = styled(Typography)({
  textAlign: "center",
  fontSize: "45px",
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
  filter: "brightness(1.2)",
  "&:hover": {
    filter: "brightness(1.3)",
    boxShadow:
      "rgba(240, 46, 170, 0.4) 2px 2px, rgba(240, 46, 170, 0.3) 4px 4px, rgba(240, 46, 170, 0.2) 6px 6px, rgba(240, 46, 170, 0.1) 8px 8px, rgba(240, 46, 170, 0.05) 10px 10px",
  },
}));

const LinksGrid = styled(Grid)({
  maxWidth: "400px",
});

const LinkGrid = styled(Grid)({});

const LinksRoot = () => {
  return (
    <Root container direction="column" justifyContent="center" alignItems="center">
      <Grid item>
        <Title variant="h2">
          <span style={{ position: "relative" }}>
            somewhatjp
            <Dot id="dot" />
          </span>
        </Title>
      </Grid>
      <Grid item>
        <DisplayPicture
          src={"/dp.jpg"}
          variant="circular"
          alt="somewhatjp display picture"
          sx={{ width: 90, height: 90 }}
        />
      </Grid>
      <LinksGrid container direction="column">
        {main.map(data => (
          //{" "}
          <LinkGrid item key={data.url}>
            <div style={{ margin: "0.5vh 0 0.5vh 0" }} key={data.url}>
              <SimpleLink data={data} />
            </div>
          </LinkGrid>
          //{" "}
        ))}
      </LinksGrid>
      {/* TODO */}
      {/* {secret.map(data => (
        <SimpleLink key={data.url} data={data} />
      ))} */}
    </Root>
  );
};

export default LinksRoot;
