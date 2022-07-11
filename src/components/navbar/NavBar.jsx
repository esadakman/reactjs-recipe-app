import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { NavLink } from "react-router-dom";
import Mando from "../../assets/mando.png";
import eat from "../../assets/eat.png";
import NavStyle, { HamburgerLink, LinkStyle } from "./Navbar.styled";
import { Link } from "@mui/material";
const NavBar = () => {
  // const [isOpen, setIsOpen] = React.useState(
  //   JSON.parse(sessionStorage.getItem("userInfo")) || false
  // );

  const handleOut = () => {
    // setIsOpen(false);
    sessionStorage.clear();
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AppBar position="sticky" style={{ background: "#050f24" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="eat"
            src={eat}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/ "
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {`<esad/>`}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{ p: 0, m: 0 }}>
                {/* <Typography textAlign="center"> */}
                <HamburgerLink>
                  <NavLink
                    to={`/about`}
                    style={({ isActive }) => ({
                      color: "black",
                      textDecoration: "none",
                      fontWeight: isActive ? "bold" : "none",
                    })}
                  >
                    About
                  </NavLink>
                  <Link
                    style={{ color: "black" }}
                    onClick={() => openInNewTab("https://github.com/esadakman")}
                  >
                    github
                  </Link>
                  <NavLink
                    to={`/home`}
                    style={({ isActive }) => ({
                      color: "black",
                      textDecoration: "none",
                      fontWeight: isActive ? "bold" : "none",
                    })}
                  >
                    home
                  </NavLink>
                </HamburgerLink>
                {/* </Typography> */}
              </MenuItem>
            </Menu>
          </Box>
          <LocalDiningIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {`<esad/>`}
          </Typography>
          {/* //! =========================================== */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkStyle>
              <NavLink
                to={`/about`}
                style={({ isActive }) => ({
                  color: isActive ? "white " : "#d8dfe979",
                  textDecoration: "none",
                })}
              >
                About
              </NavLink>
              <Link
                style={{ color: "#d8dfe979" }}
                onClick={() => openInNewTab("https://github.com/esadakman")}
              >
                github
              </Link>
              <NavLink
                to={`/home`}
                style={({ isActive }) => ({
                  color: isActive ? "white " : "#d8dfe979",
                  textDecoration: "none",
                })}
              >
                home
              </NavLink>
            </LinkStyle>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My Github">
              <IconButton
                onClick={handleOpenUserMenu}
                // component="a"
                // href="https://github.com/esadakman"
                // target="_blank"
                sx={{ p: 0 }}
              >
                <Avatar alt="Mandalorian" src={Mando} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu} sx={{ p: 0 }}>
                {/* <Typography textAlign="center"> */}
                <NavStyle>
                  <NavLink to={`/home`}>Home</NavLink>
                  <NavLink to={`/`} onClick={handleOut}>
                    Logout
                  </NavLink>
                </NavStyle>
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
