import React from "react";

import { Grid, Paper } from "@mui/material";
import { keyframes } from "@mui/system";

const bounce = keyframes`
    0%   { transform: scale(1,1);      }
    10%  { transform: scale(1.1,.9);   }
    30%  { transform: scale(.9,1.1);   }
    50%  { transform: scale(1.05,.95); }
    57%  { transform: scale(1,1);      }
    64%  { transform: scale(1,1);      }
    100% { transform: scale(1,1);      }
`;

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
          backgroundColor: "white",
          padding: "0.5vw 1.5vw 0.5vw 1.5vw",
          borderBottom: "none",
          borderTop: "none",
          transition: "0.3s",
          ".description": {
            transition: "0.3s",
            color: "slategrey",
            marginLeft: "4px",
            marginRight: "4px",
            marginTop: "1vh",
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
              animation: `${bounce} 1s`,
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
