import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  console.log("mosljd", movie);
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          background: "#E5E8E8",
          borderRadius: "10px",
          padding: "5px",
          boxShadow: "#979A9A 0px 2px 140px",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          src={movie.Poster}
          sx={{ borderRadius: "5px" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="left"
            sx={{ fontSize: "20px", fontWeight: "600" }}
          >
            {movie.Title}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              Year: <span style={{ fontWeight: "600" }}>{movie.Year}</span>{" "}
            </Box>
            <Box
              sx={{
                border: "0.5px solid black",
                paddingTop: "1px",
                paddingBottom: "3px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "15px",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              {movie.Type.toUpperCase()}
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Box sx={{ margin: "auto" }}>
            <Button
              variant="outlined"
              size="small"
              color="success"
              onClick={() => {
                navigate(`/movie/${movie.imdbID}`);
              }}
            >
              More Details
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}
