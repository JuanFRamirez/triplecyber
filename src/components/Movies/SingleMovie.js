import react, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const SingleMovie = () => {
  const location = useLocation();
  const id = location.state.id;
  let apiKey = "bf091621962bdf5c30339e874a2a0c1a";
  console.log(id);
  const [useDetail, setDetail] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => setDetail({
            ...useDetail,
            data:res.data
        }))
        .catch((err) => err);
    }
  }, []);

  return (
      Object.keys(useDetail).length > 0 ?
    <div className="card-detail">
      <h3>{useDetail.data.title}</h3>
      <img src={"https://image.tmdb.org/t/p/w500"+useDetail.data.poster_path} />
      <p>Overview: {useDetail.data.overview}</p>
      <p>Language: {useDetail.data.original_language}</p>
      <p>Date: {useDetail.data.release_date}</p>
      <p>Votes: {useDetail.data.vote_average}/10</p>
    </div>
    : null
  );
};

export default SingleMovie;
