import {
  GET_MOVIES_DATA_REQUEST,
  GET_MOVIES_DATA_SUCCESS,
  GET_MOVIES_DATA_FAILURE,
} from "../Action/actiontype";
const initialState = {
  movies:[],
  isLoading: false,
  initial: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_DATA_REQUEST:
      return { ...state, isLoading: true, initial: false };
    case GET_MOVIES_DATA_SUCCESS:
      return { ...state, isLoading: false, movies: payload, };
    case GET_MOVIES_DATA_FAILURE:
      return { ...state, isLoading: false, movies: [] };
    default:
      return state;
  }
};

export default reducer;
