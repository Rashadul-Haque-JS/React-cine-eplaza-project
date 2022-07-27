import React from 'react'
import { Link } from 'react-router-dom'

import './movieDetail.scss'

import { getDetails } from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import playIcon from '../../assets/images/play.png'

export default function MovieDetail() {

  const details = useSelector(getDetails)


  return (
    <div className='movieDetails'>
      <div className='summary'>
        <div className='description'>
          <h2>{details.Title}</h2>
          <p><span>Director: </span>  {details.Director}</p>
          <p><span>Writer: </span> {details.Writer}</p>
          <p><span>Released: </span> {details.Released}</p>
          <p><span>Casts: </span>{details.Actors}</p>
          <p><span>Duration: </span> {details.Runtime}</p>
          <p><span>Genres: </span> {details.Genre}</p>
          <p><span>Language: </span> {details.Language}</p>

          <div>
            ***
            <span>Ratings: </span>
            {details.Ratings && details.Ratings.map((src, i) => {
              return <p key={i}>{src.Source}: {src.Value}</p>
            })}
            ***
          </div>
          <p><span>Box office: </span> {details.BoxOffice}</p>


          {details.Type === 'series' && <p><span>Series</span></p>}
        </div>
        <div className='posterImage'>
          <img src={details.Poster} alt='Poster' />

        </div>
      </div>
      <hr className='h-line' />
      <p className='plot'><span>Plot:</span></p>
      <p className='plot'>{details.Plot}</p>
      <Link className='playIcon' to={'/screen'}>
        <img  src={playIcon} alt='play icon' />
      </Link>

    </div>

  )
}
