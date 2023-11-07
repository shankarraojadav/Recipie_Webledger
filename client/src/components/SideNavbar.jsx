import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../theme";

export default function SideNavbar() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "70vh",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        padding: "2vh",
        display: "none",
        background:"#132043",
        borderTopRightRadius:"2vh",
        borderBottomRightRadius:"2vh",
        [theme.breakpoints.down("sm")]: { display: "block" },
      }}
    >
      <Box sx={{display:"flex", flexDirection:"column"}}>
        <Link to="/home" style={{ textDecoration: "none", color:"#fff", }}>
          Home
        </Link>
        <Link to="/favourite" style={{ textDecoration: "none", color:"#fff", margin:"5vh 0" }}>
          Favourites
        </Link>
      </Box>
    </Box>
  );
}
