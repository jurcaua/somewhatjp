import React from "react";

import { Grid, Paper } from "@mui/material";

import { bounce } from "../animations";

const SimpleLink = ({ data: { title, url, description, icon } }) => {
  return (
    <a
      href={url}
      target="_blank" // Open in new tab
      rel="noopener"
      style={{
        textDecoration: "none",
      }}
    >
      <Paper
        variant="outlined"
        square
        sx={{
          textAlign: "left",
          backgroundColor: "white",
          padding: "0.3vw 1.5vw 0.3vw 1.5vw",
          borderBottom: "none",
          borderTop: "none",
          transition: "0.3s",
          ".icon": {
            color: "#7F00FF",
          },
          ".description": {
            transition: "0.3s",
            color: "slategrey",
            marginLeft: "4px",
            marginRight: "4px",
            marginTop: "0.2vh",
            marginBottom: "1vh",
          },
          "&:hover": {
            background: "#E6E6FA",
            borderWidth: "5px",
            ".description": {
              color: "black",
              marginLeft: "0",
              marginRight: "0",
            },
            ".icon": {
              animation: `${bounce} 0.7s`,
              animationTimingFunction: `cubic-bezier(0.280, 0.840, 0.420, 1)`,
            },
          },
        }}
      >
        <Grid container spacing={1}>
          <Grid item>
            <div className="icon">{icon}</div>
          </Grid>
          <Grid item>
            <span className="title">{title}</span>
          </Grid>
        </Grid>
        {description && <p className="description">{description}</p>}
      </Paper>
    </a>
  );
};

export default SimpleLink;
