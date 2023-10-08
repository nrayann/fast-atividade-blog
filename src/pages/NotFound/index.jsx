import React from "react";

import { Box, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      data-testid="notFound"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: `100%`,
      }}
    >
      <Typography variant="h4">404</Typography>
      <Typography variant="subtitle1">Página não encontrada</Typography>
      <Button color="primary" aria-label="home" onClick={() => navigate("/")}>
        <HomeIcon />
      </Button>
    </Box>
  );
};

export default NotFound;
