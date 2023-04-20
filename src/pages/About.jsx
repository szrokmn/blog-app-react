import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "94vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "500px",        
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper elevation={15} >
          <img
            src="https://avatars.githubusercontent.com/u/109314125?v=4"
            alt="img"
            width={500}                      

          />
          <Typography sx={{ textAlign: "center", fontSize: "28px" }}>
            Sezer
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "28px" }}>
            Frontend Developer
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <Link
              target="blank"
              to="https://www.linkedin.com/in/sezer-%C3%B6kmen/"
            >
              <LinkedInIcon sx={{ fontSize: "36px", margin: "1rem" }} />
            </Link>
            <Link target="blank" to="https://github.com/szrokmn">
              <GitHubIcon sx={{ fontSize: "36px", margin: "1rem" }} />
            </Link>
            <Link target="blank" to="https://twitter.com/codingSezer">
              <TwitterIcon sx={{ fontSize: "36px", margin: "1rem" }} />
            </Link>
            <Link
              target="blank"
              to="https://www.youtube.com/channel/UCJgVe6RJ8P2qOoP6P8tszeQ"
            >
              <YouTubeIcon sx={{ fontSize: "36px", margin: "1rem" }} />
            </Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default About;
