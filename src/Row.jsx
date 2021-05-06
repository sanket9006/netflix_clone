import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import React, { useEffect, useState } from "react";
import axios from "./Axios";
import './row.css'
const baseURL = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchURL, isbigger, islarger }) {
  const [movies, setMovies] = useState([]);
  const [movieurl, setMovieurl] = useState([]);
  const [oldmovieurl, setOldmovieurl] = useState([]);

  useEffect(() => {
    setMovieurl("")

    {
      async function fetchData() {
        const response = await axios.get(`${fetchURL}`)
        setMovies(response.data.results)
      }
      fetchData();
    }
  }, [fetchURL]);

  const opts = {
    width: "100%",
    height: "400px",
    autoplay: 1,
  }

  function youtubeplayit(movie) {
    if (movieurl == "") {
      movieTrailer(movie?.title || movie?.original_title, { id: true, multi: false })
        .then(response => setMovieurl(response))
      console.log({ movie })
    } else {
      setMovieurl("")
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="posters">
        {movies.map((movie) => (
          <img className={`poster 
                          ${isbigger ? "land_poster" : ""}                           
                          ${islarger && "land_larger"}`}
            onClick={() => { youtubeplayit(movie) }}
            src={`${baseURL}${isbigger ? movie.backdrop_path : movie.poster_path}`}>
          </img>
        ))}
      </div>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        {movieurl && <Youtube videoId={movieurl} opts={opts}> </Youtube>}
      </div>
    </div>
  );
}

export default Row;
