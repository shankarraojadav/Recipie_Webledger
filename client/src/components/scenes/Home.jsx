import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
      <Box
        component="img"
        src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
        width="100%"
        height="70vh"
      />
    </Box>
  );
}
