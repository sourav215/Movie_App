import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

function Movie() {
  const { movies, isLoading, initial } = useSelector((store) => store);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box margin={"20px auto"}>
        {movies.length === 0 && initial ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",

            }}
          >
            <Box>
              <Typography variant="h4" color={"white"}>
                Search for movie
              </Typography>
            </Box>
          </Box>
        ) : movies.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <Box>
              <Typography variant="h4" color={"white"}>
                No movie found
              </Typography>
            </Box>
          </Box>
        ) : (
          <Grid width={"90%"} margin={"20px auto"} container spacing={3}>
            {movies?.map((elem, i) => {
              return <MovieCard movie={elem} key={i} />;
            })}
          </Grid>
        )}
      </Box>
    </>
  );
}
export default Movie;
