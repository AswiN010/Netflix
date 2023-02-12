import React from 'react'
import instance from './baseUrl'
import { useState,useEffect } from 'react'
import './Row.css';
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
     // function to call api
    async function getData()
     {
        const result=  await instance.get(fetchUrl)
        // console.log(result.data.results);
        setMovies(result.data.results)
     }

     useEffect(()=> {  getData() },[] ) /// empty array is use to make useEffect call work only onces
    
    //  console.log(movies);
  return (

   
    <div className='row'>
        <h1>{title}</h1>
        <div className='movies'>
            {
                movies.map(movie=>(<img className={`movie ${isLargeRow && "largeMovie"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                alt={movie.original_title}/>))
            }
        </div>
    </div>
  )
}

export default Row