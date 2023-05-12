import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const getMovieInformation = async () => {
    try {
      handleOpen();
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=47082d1a&plot=full&i=${id}`
      );
      let resData = await res.json();
      handleClose();
      setMovie(resData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieInformation();
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          // background: "#1c2833",
          background: "#566573",

          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            // background: "#566573",
            width: "90%",
            margin: "auto",
            padding: "20px",
          }}
        >
          <Grid
            item
            sm={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              margin="auto"
              sx={{ background: "#566573", boxShadow: "#979A9A 0px 2px 140px" }}
            >
              <CardMedia
                component="img"
                alt="Movie not found"
                // height="450"
                // width={"100%"}

                src={movie.Poster}
              />
            </Card>
            {/* <Box margin="auto" marginTop={"20px"} width={"100%"}>
            <img src={movie.Poster} style={{width: "100%"}} alt="Movie not found" />

          </Box> */}
          </Grid>
          <Grid item sm={12} md={8}>
            <Box
              sx={{
                padding: "20px",
                background: "white",
                textAlign: "left",
                borderRadius: "5px",
                boxShadow: "#979A9A 0px 2px 140px",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "400" }}>
                {movie.Title}
              </Typography>

              <Box
                sx={{ display: "flex", marginTop: "5px", marginBottom: "10px" }}
              >
                <StarRateIcon sx={{ color: "#f5c518", marginRight: "5px" }} />
                <Box
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    marginTop: "-2px",
                  }}
                >
                  {movie.imdbRating}{" "}
                  <span style={{ fontSize: "15px" }}>({movie.imdbVotes})</span>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <Box sx={{ marginRight: "30px", marginLeft:"5px" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                    {movie?.Type?.toUpperCase()}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "600", marginTop:"-3px" }}>
                    {movie.Runtime}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {movie.Genre?.split(", ").map((elem, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        marginRight: "20px",
                        border: "0.5px solid black",
                        borderRadius: "20px",
                        padding: "2px 10px",
                      }}
                    >
                      <Typography varient="h6" sx={{ fontWeight: "600" }}>
                        {elem}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              <Box
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "flex",
                }}
              >
                <Box sx={{ marginRight: "20px" }}>
                  <Typography
                    varient="h6"
                    sx={{ fontWeight: "400", fontSize: "18px" }}
                  >
                    Released on
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    varient="h6"
                    sx={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    {movie.Released}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  varient={"h4"}
                  sx={{
                    fontSize: "28px",
                    fontWeight: "600",
                  }}
                >
                  Plot <NavigateNextIcon sx={{ marginBottom: "-3px" }} />
                </Typography>
              </Box>
              <Box>
                <Typography varient={"body1"} sx={{ textAlign: "justify" }}>
                  {movie.Plot}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default MovieDetails;
