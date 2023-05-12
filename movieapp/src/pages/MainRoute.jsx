import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import MovieDetails from "./MovieDetails/MovieDetails";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}
