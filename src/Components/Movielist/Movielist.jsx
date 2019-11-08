import React, { useState, useEffect, Component } from "react";
import getData from "./movielistgetter";
import { connect } from "react-redux";
import uniqid from "uniqid";
import Movie from "../Movie/Movie";

function Movielist(props) {
  const [movies, setMovies] = useState([]);

  const { searchTerm, lock } = props;
  useEffect(() => {
    if (searchTerm.length > 1) {
      getData(searchTerm).then(data => {
        setMovies(data.results);
      });
    }
  }, [searchTerm]);

  return (
    <div>
      <div className="">
        <h1 className="text-center display-2 lead">
          {movies.length > 0 ? "Movie list" : null}
        </h1>
        <div className="row">
          {movies ? movies.map(movie => <Movie movie={movie} />) : null}
        </div>
        //{" "}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm,
  lock: state.search.lock
});

export default connect(mapStateToProps)(Movielist);
