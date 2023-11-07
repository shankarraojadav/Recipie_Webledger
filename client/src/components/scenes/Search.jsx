import { Box, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { searchByKeywords } from "../../service/api";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchItem() {

  const [keyword, setKeyword] = useState("");
  console.log(keyword)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    setKeyword({...keyword, [e.target.name]: e.target.value})
  }

  const handleSearch = () => {
    console.log(keyword)
    dispatch(searchByKeywords(keyword));
    navigate("/search");
  };

  const handleKey = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <Box sx={{border:"1px solid white", borderRadius:"4vh", display:"flex", flexDirection:"row", background:"#F0F0F5"}}>
      <InputBase placeholder="Search..." sx={{width:"50vh", ml:"5vh"}} name="keyword" onChange={handleChange} onKeyDown={handleKey} />
        <IconButton onClick={handleSearch}>
          <Search />
        </IconButton>
    </Box>
  );
}
