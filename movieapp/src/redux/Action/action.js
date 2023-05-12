import {
  GET_MOVIES_DATA_REQUEST,
  GET_MOVIES_DATA_SUCCESS,
  GET_MOVIES_DATA_FAILURE,
} from "./actiontype";

const appThunkActionCreator = (url) => {
  // console.log(url);

  return function appThunk(dispatch, getState) {
    dispatch({
      type: GET_MOVIES_DATA_REQUEST,
      payload: true,
    });

    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        // console.log("resData", resData);
        if (resData.Response == "True") {
          console.log("found");
          dispatch({
            type: GET_MOVIES_DATA_SUCCESS,
            payload: resData.Search,
          });
        } else {
          console.log("Not found");
          dispatch({
            type: GET_MOVIES_DATA_FAILURE,
            payload: false,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: GET_MOVIES_DATA_FAILURE,
          payload: false,
        });
      });
  };
};

export default appThunkActionCreator;
