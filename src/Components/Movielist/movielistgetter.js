const api_key = `703ac816c773f8b25783f5e974d722a3`;

const getData = async search => {
  let res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search}&page=1&include_adult=true`
  );
  let data = await res.json();
  return data;

  //   data.results.forEach(movie => {
  //     console.log(
  //       `Title - ${movie.original_title} \n Release data - ${movie.release_date} \n MovieDB score - ${movie.vote_average} \n imageUrl - ${movie.poster_path}`
  //     );
  //   });
};

export default getData;
