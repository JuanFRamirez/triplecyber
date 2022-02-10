import react, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Movies = () => {
  let api = axios;
  let apiKey = "bf091621962bdf5c30339e874a2a0c1a";
  const history = useNavigate()
  const [useMovies, setMovies] = useState({});
  useEffect(() => {
    api
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        let movieList = res.data;
        setMovies({
          ...useMovies,
          movieList,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="movies-container container">
      <h1>Home</h1>
      <p>get the top movies</p>
      <div className="movies-cards">
      {
          Object.keys(useMovies).length > 0 ?
          useMovies.movieList.results.map((movie)=>{
              return(
              <div className="movie"  key={movie.id}>
                  <h3 className="title">{movie.title}</h3>
                  <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                  <p className="overview">{movie.overview}</p>
                  <p className="vote">Score: {movie.vote_average}/10</p>
                  <Link to={"/detail"} params={{movie}} state={{id:movie.id}}>Details</Link>
              </div>)
          }) : null
      }
      </div>
    </div>
  );
};

export default Movies;
