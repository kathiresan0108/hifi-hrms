import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import HrmsLogo from "../../../Components/Assets/images/hrmslogo.jpeg";
import { HeaderButton } from "../Header/headerStyle";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

function Header({ activeButton, handleNavigation }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (path) => {
    // handleNavigation(path);
    navigate(path);
    handleClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffffff",
        color: "#0E0F30",
        boxShadow: "none",
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={HrmsLogo}
              alt="HRMS Logo"
              style={{ width: 250, height: "auto" }}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => handleClick("/")}
                  sx={{
                    backgroundColor:
                      activeButton === "/" ? "#f0f0f0" : "inherit",
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick("/product")}
                  sx={{
                    backgroundColor:
                      activeButton === "/product" ? "#f0f0f0" : "inherit",
                  }}
                >
                  Products
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick("/careers")}
                  sx={{
                    backgroundColor:
                      activeButton === "/careers" ? "#f0f0f0" : "inherit",
                  }}
                >
                  Careers
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick("/about")}
                  sx={{
                    backgroundColor:
                      activeButton === "/about" ? "#f0f0f0" : "inherit",
                  }}
                >
                  About us
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick("/contact")}
                  sx={{
                    backgroundColor:
                      activeButton === "/contact" ? "#f0f0f0" : "inherit",
                  }}
                >
                  Contact us
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick("/login")}
                  sx={{
                    backgroundColor:
                      activeButton === "/login" ? "#f0f0f0" : "inherit",
                  }}
                >
                 <PersonIcon/>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex" }}>
              <HeaderButton
                color="inherit"
                onClick={() => handleClick("/")}
                sx={{ color: activeButton === "/" ? "red" : "inherit" }}
              >
                Home
              </HeaderButton>
              <HeaderButton
                color="inherit"
                onClick={() => handleClick("/product")}
                sx={{ color: activeButton === "/product" ? "red" : "inherit" }}
              >
                Products
              </HeaderButton>
              <HeaderButton
                color="inherit"
                onClick={() => handleClick("/careers")}
                sx={{ color: activeButton === "/careers" ? "red" : "inherit" }}
              >
                Careers
              </HeaderButton>
              <HeaderButton
                color="inherit"
                onClick={() => handleClick("/about")}
                sx={{ color: activeButton === "/about" ? "red" : "inherit" }}
              >
                About us
              </HeaderButton>
              <HeaderButton
                color="inherit"
                onClick={() => handleClick("/contact")}
                sx={{
                  color: activeButton === "/contact" ? "red" : "inherit",
                }}
              >
                Contact us
              </HeaderButton>
              <HeaderButton
                color="inherit"
                onClick={() => handleClick("/login")}
                sx={{
                  color: activeButton === "/login" ? "red" : "inherit",
                }}
              >
               <PersonIcon/>
              </HeaderButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
