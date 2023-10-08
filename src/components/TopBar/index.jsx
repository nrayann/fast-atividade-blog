import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const linkDefaultStyle = {
  fontSize: 16,
  fontWeight: 400,
  textDecoration: "none",
  color: "#FFFFFF",
};

const linkActiveStyle = {
  fontSize: 16,
  fontWeight: 600,
  textDecoration: "underline",
  color: "#FFFFFF",
};

const getLinkStyle = (isActive) => {
  if (isActive) {
    return linkActiveStyle;
  }
  return linkDefaultStyle;
};

export default function TopBar() {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  return (
    <AppBar component="nav" data-testid="topBar">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Button
            sx={{ color: "#fff", marginRight: "auto" }}
            onClick={goToHome}
          >
            <Typography variant="h6" component="div">
              BLOG
            </Typography>
          </Button>
          <NavLink
            to={"/contato"}
            style={({ isActive }) => getLinkStyle(isActive)}
          >
            Contato
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
