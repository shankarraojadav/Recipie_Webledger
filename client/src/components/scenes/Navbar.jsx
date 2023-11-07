import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchItem from "./Search";
import { theme } from "../../../theme";

export default function Navbar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const { user, isLoggedIn } = useSelector((state) => state.login || {});

  const { photoURL } = user || {};

  //   console.log(photoURL)

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          background: "#D7CEF7",
          color: "#000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* logo */}
        <Box
          component="img"
          src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1699110299/mum_s_kitchen-removebg-preview_d1lqnr.png"
          sx={{ width: "8vh" }}
        />
        <Box
          sx={{
            mr: "10vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* search box */}
          <Box
            sx={{
              mr: "10vh",
              [theme.breakpoints.down("md")]: { display: "none" },
            }}
          >
            <SearchItem />
          </Box>

          {/* routes */}
          <Box sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                  color: "black",
                }}
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                Home
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              ml: "10vh",
              [theme.breakpoints.down("sm")]: { display: "none" },
            }}
          >
            <Link to="/favourite" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                  color: "black",
                }}
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                Favourites
              </Typography>
            </Link>
          </Box>

          <Box sx={{ borderRadius: "50%" }}>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ border: "1px solid #8E8FFA", ml: "10vh" }}
            >
              <Box
                component="img"
                src={photoURL}
                sx={{
                  width: "5vh",
                  height: "5vh",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Button onClick={handleLogout}>Logout</Button>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
