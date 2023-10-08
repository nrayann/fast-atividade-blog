import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";

const containerStyle = {
  minHeight: "calc(100vh - 64px)",
  marginTop: "64px",
  paddingTop: "15px",
  paddingBottom: "15px",
};

export default function Layout() {
  return (
    <>
      <CssBaseline />
      <TopBar />
      <Container
        maxWidth="md"
        sx={containerStyle}
        data-testid="layoutContainer"
      >
        <Outlet />
      </Container>
    </>
  );
}
