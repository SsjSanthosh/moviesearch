const INITIAL_STATE = {
  searchTerm: "",
  lock: true
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HANDLE_SEARCH_CHANGE":
      return { ...state, searchTerm: action.payload };
    case "TOGGLE_STATE":
      return { ...state, lock: !state.lock };
    default:
      return state;
  }
};

export default searchReducer;
