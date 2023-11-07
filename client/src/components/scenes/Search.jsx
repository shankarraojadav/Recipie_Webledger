import { Box, Button, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchItem() {
  return (
    <Box sx={{border:"1px solid white", borderRadius:"4vh", display:"flex", flexDirection:"row", background:"#F0F0F5"}}>
      <InputBase placeholder="Search..." sx={{width:"50vh", ml:"5vh"}}  />
        <IconButton>
          <Search />
        </IconButton>
    </Box>
  );
}
