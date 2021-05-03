import axios from './Axios'
import requests from './request'
import React, { useEffect, useState } from 'react'

import './banner.css'

export const Banner = () => {

    const [movies, setMovies] = useState([]);

    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str  
    }

    useEffect(() => {

        async function fetchData() {
            const response = await axios.get(requests.fetchTrending)
            await setMovies(response.data.results[Math.floor(Math.random() * (response.data.results).length - 1)]);
        }

        fetchData()

    }, [])

    return (
        <div className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}>
        {console.log(movies)}

            <div className="banner_contents">
                <h2 className="banner_title">{movies?.title || movies?.original_title}</h2>
                <button className="banner_btn">Play</button>
                <button className="banner_btn">Watch Trailer</button>
                <p className="bannner__description">{truncate(movies?.overview,150)}</p>
            </div>
        </div>
    )
}

export default Banner