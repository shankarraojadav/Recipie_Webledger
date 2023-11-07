import { Box } from "@mui/material";
import Login from "./components/Login";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./components/scenes/Home";
import Favourites from "./components/scenes/favourites/Favourites";
import Navbar from "./components/scenes/Navbar";
import { useSelector, useDispatch } from "react-redux";
import SideNavbar from "./components/SideNavbar";
import { useEffect } from "react";
import { verifyToken } from "./service/api";
import RecipeDetails from "./components/scenes/description/RecipeDetails";
import SearchResults from "./components/scenes/searchresults/SearchResults";

export default function App () {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.login || {});
  
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (token) {
      dispatch(verifyToken(token));
    }
  }, [token]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  return (
    <Box>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      {isLoggedIn && <SideNavbar />}
    </Box>
  )
}