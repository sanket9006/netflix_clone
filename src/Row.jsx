import React, { useEffect, useState } from "react";
import axios from "./Axios";
import './row.css'
const baseURL = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchURL, isbigger }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    {
      async function fetchData() {
        const response = await axios.get(`${fetchURL}`)
        setMovies(response.data.results)
      }
      fetchData();
    }
  }, [fetchURL]);

  return (
    <div>
      <h2>{title}</h2>

      <div className="posters">
        {movies.map((movie) => (
          <img className="poster" src={`${baseURL}${isbigger ? movie.poster_path : movie.backdrop_path}`}></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
