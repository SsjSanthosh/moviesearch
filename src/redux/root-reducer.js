import { combineReducers } from "redux";
import searchReducer from "./search/search-reducer";
import movieReducer from "./movies/movies-reducer";
const rootReducer = combineReducers({
  search: searchReducer,
  movies: movieReducer
});
export default rootReducer;
