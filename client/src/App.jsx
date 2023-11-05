import { Box } from "@mui/material";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/scenes/Home";
import Favourites from "./components/scenes/favourites/Favourites";
import Navbar from "./components/scenes/Navbar";
import { useSelector } from "react-redux";

export default function App () {

  const { isLoggedIn } = useSelector((state) => state.login || {});
  
  return (
    <Box>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourite" element={<Favourites />} />
      </Routes>
    </Box>
  )
}