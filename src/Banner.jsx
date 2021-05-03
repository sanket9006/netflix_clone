import axios from './Axios'
import requests from './request'
import React, { useEffect } from 'react'

export const Banner = () => {

    useEffect(() => {
        
        async function fetchData() {
            const response = await axios.get(requests.fetchTrending)
            console.log(response.data.results);

            console.log(Math.floor(Math.random() * (response.data.results).length -1 )) ;
        }
        
        fetchData()

    }, [])

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Banner