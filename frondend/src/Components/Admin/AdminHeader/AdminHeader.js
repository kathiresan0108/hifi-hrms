import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Container, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import HrmsLogo from "../Assets/hrmslogo.jpeg";
import { HeaderButton } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";


function AdminHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeButton, setActiveButton] = useState("/"); // State to track active button
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    setActiveButton(path); // Set the active button on click
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
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => handleNavigation("/")}
                  sx={{
                    backgroundColor:
                      activeButton === "/" ? "#DC5C00" : "inherit",
                  }}
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                   onClick={() => handleNavigation("/candidate_database_page")}
                  sx={{
                    backgroundColor:
                      activeButton === "/candidate_database_page" ? "#DC5C00" : "inherit",
                  }}
                >
                  Candidate
                </MenuItem>
                <MenuItem
                  onClick={() => handleNavigation("/client_database_page")}
                  sx={{
                    backgroundColor:
                      activeButton === "/client_database_page" ? "#DC5C00" : "inherit",
                  }}
                >
                  Client
                </MenuItem>
               
               
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex" }}>
              <HeaderButton
                color="inherit"
                onClick={() => handleNavigation("/")}
                sx={{
                  color: activeButton === "/" ? "#DC5C00" : "inherit",
                }}
              >
                Dashboard
              </HeaderButton>
              <HeaderButton
                color="inherit"
                onClick={() => handleNavigation("/candidate_database_page")}
                sx={{
                  color: activeButton === "/candidate_database_page" ? "#DC5C00" : "inherit",
                }}
              >
                Candidate
              </HeaderButton>
              <HeaderButton
                color="inherit"
                onClick={() => handleNavigation("/client_database_page")}
                sx={{
                  color: activeButton === "/client_database_page" ? "#DC5C00" : "inherit",
                }}
              >
                Client
              </HeaderButton>
             
             
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AdminHeader;
