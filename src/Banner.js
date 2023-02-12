import React from 'react'
import instance from './baseUrl'
import './Banner.css'
import { useState,useEffect } from 'react'
function Banner({fetchUrl}) {
    const [movies,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    // function to call api
   async function getData()
    {
       const result=  await instance.get(fetchUrl)
       // console.log(result.data.results);
       setMovies(result.data.results[Math.floor(Math.random()*result.data.results.length-1)])
    }

    useEffect(()=> {  getData() },[] ) /// empty array is use to make useEffect call work only onces
   
    // console.log(movies);
  function truncate(str,n)
  {
    return str?.length>n?str.substr(0,n-1)+". . . .":str
  }


  return (
    <div className='banner' style={{backgroundImage:`url(${base_url}${movies?.backdrop_path})`,backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className='bannerContent'>
        <h1 style={{fontFamily:"cursive"}} className='title' >{movies?.name}</h1>
        <h3 style={{fontFamily:"cursive"}}>
          {truncate(movies?.overview,150)}
          </h3>
    </div> 
    </div>
    
  )
}

export default Banner