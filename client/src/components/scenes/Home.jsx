import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme";
import SearchItem from "./Search";
import { getRecipies } from "../../service/api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import RecipiesList from "./recipieslist/RecipieList";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getRecipiesData();
  }, []);

  const getRecipiesData = async () => {
    dispatch(getRecipies());
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            background: "#E1DAF9",
            borderBottomRightRadius: "3vh",
            borderBottomLeftRadius: "3vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "10vh",
            }}
          >
            {/* search box */}
            <Box
              sx={{
                width: "60vh",
                mt: "4vh",
                alignSelf: "center",
                display: "none",
                [theme.breakpoints.down("md")]: { display: "block" },
                [theme.breakpoints.down("ms3")]: { width: "40vh" },
              }}
            >
              <SearchItem />
            </Box>

            {/* title and description */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                mt: "2vh",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "6vh",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "5vh",
                      ml: "2vh",
                    },
                    [theme.breakpoints.down("ms3")]: {
                      fontSize: "4vh",
                      ml: "2vh",
                    },
                  }}
                >
                  🍽 Welcome to{" "}
                  <span style={{ color: "#F86F03" }}>Mum's Kitchen</span>,
                </Typography>
                <Typography
                  sx={{
                    fontSize: "6vh",
                    ml: "10vh",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "5vh",
                      ml: "2vh",
                    },
                    [theme.breakpoints.down("ms3")]: {
                      fontSize: "4vh",
                      ml: "2vh",
                    },
                  }}
                >
                  Where{" "}
                  <span style={{ color: "#F86F03" }}>Love Meets Flavor</span> 🍽
                </Typography>
              </Box>

              {/* image */}
              <Box
                component="img"
                src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1699110299/mum_s_kitchen-removebg-preview_d1lqnr.png"
                sx={{
                  width: "30vh",
                  [theme.breakpoints.down("ms3")]: { width: "20vh" },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <RecipiesList />
    </Box>
  );
}
