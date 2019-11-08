import React from "react";
import "./Movie.scss";
export default function Movie(props) {
  let {
    original_title,
    release_date,
    vote_average,
    poster_path,
    id,
    overview
  } = props.movie;
  if (overview.length > 330) {
    overview = overview.substring(0, 330);
    overview += "...";
  }
  const posterUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className=" mb-5 p-4 movie-container">
      <div className="movie-poster-div">
        <img src={posterUrl} alt="poster" className="movie-poster" />
      </div>
      <div className=" p-4 movie-content">
        <h3 className="h3">{original_title}</h3>
        <h4 className="h4">{release_date}</h4>
        <h4 className="h4">{vote_average}</h4>
        <p className="lead">{overview}</p>
        <a target="_blank" href={`https://themoviedb.org/movie/${id}`}>
          <button className="btn btn-outline-success">Know more</button>
        </a>
      </div>
    </div>
  );
}
