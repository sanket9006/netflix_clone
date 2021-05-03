import React, { useEffect, useState } from "react";
import axios from "./Axios";
import './row.css'
const baseURL = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchURL, isbigger, islarger }) {
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
    <div className="row">
      <h2>{title}</h2>

      <div className="posters">
        {movies.map((movie) => (
          <img className={`poster 
                          ${isbigger ? "land_poster" : ""}                           
                          ${islarger && "land_larger"}`} 
                src={`${baseURL}${isbigger ? movie.backdrop_path : movie.poster_path}`}>
                          </img>
        ))}
      </div>
    </div>
  );
}

export default Row;
