import React from 'react'
import './singleMovieCard.scss'

export default function SingleMovie({movie}) {
  return (
      <div className='singleCard'>
          <div className='posterImage'>
              <img src={movie.Poster} alt='Poster' />

          </div>
          <div className='description'>
              <h2>{movie.Title}</h2>
              <p>{ movie.Year}</p>
          </div>
    </div>
  )
}