const INITIAL_STATE = {
  movies: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_MOVIES":
      return { movies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
