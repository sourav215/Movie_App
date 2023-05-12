import { useState } from "react";
import { useDispatch} from "react-redux";

import appThunkActionCreator from "../../redux/Action/action";

import { Box, Grid, } from "@mui/material";
import SearchBar from "material-ui-search-bar";

function Search() {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSearch = () => {

    let url = `https://www.omdbapi.com/?apikey=47082d1a&s=${title}`;

    // Function to handle async operation form Redux Thunk
    dispatch(appThunkActionCreator(url));
  };

  return (
    <Box>
      <Box width={"50%"} margin={"10px auto"}>
        <SearchBar
          placeholder="Search movie"          
          onChange={(value) => setTitle(value)}
          onRequestSearch={handleSearch}
        />
      </Box>
      <Grid></Grid>
    </Box>
  );
}

export default Search;
