import { Box, Typography } from "@mui/material";
import SearchComponent from "../../components/Search/Search";
import Movie from "../../components/Movie/Movie";

function Home() {
  return (
    <Box sx={{ background: "#1C2833", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        padding={"10px"}
        color={"white"}
        sx={{ fontWeight: "600" }}
      >
        Movie App
      </Typography>
      <SearchComponent />
      <Movie />
    </Box>
  );
}

export default Home;
