import React from 'react'
import './singleMovieCard.scss'
import { Link } from 'react-router-dom'
import cineAPI from '../../common/api/movies'
import APIKey from '../../common/api/apiKeys/movieAPIKey'
// import './home.scss'
import { useDispatch } from 'react-redux'
import {addDetails} from '../../features/movies/movieSlice'
export default function SingleMovie({movie}) {

  const dispatch = useDispatch()

  const fetchDetails = async()=>{
         const response = await cineAPI.get(`?apikey=${APIKey}&i=${movie.imdbID}&plot=full`);
         dispatch(addDetails(response.data))


  }
    return (

      <div className='singleCard'>
        <Link to ={`/movieInfo/${movie.Title}`} onClick={fetchDetails} >
          <div className='posterImage'>
              <img src={movie.Poster} alt='Poster' />

          </div>
          <div className='description'>
              <div>
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
              </div>

              {movie.Type === 'series' && <p>S</p>}
          </div>
          </Link>
    </div>

  )
}