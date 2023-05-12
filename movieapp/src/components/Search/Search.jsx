import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid, InputAdornment, TextField } from "@mui/material";

import SearchBar from "material-ui-search-bar";
import appThunkActionCreator from "../../redux/Action/action";

function Search() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleSearch = () => {
    let url = `https://www.omdbapi.com/?apikey=47082d1a&s=${title}`;

    dispatch(appThunkActionCreator(url));
  };

  return (
    <Box>
      <Box width={"50%"} margin={"10px auto"}>
        <SearchBar
          placeholder="Search movie"
          // value={this.state.value}
          onChange={(value) => setTitle(value)}
          onRequestSearch={handleSearch}
        />
      </Box>
      <Grid></Grid>
    </Box>
  );
}

export default Search;
