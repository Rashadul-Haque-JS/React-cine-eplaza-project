import React from 'react'
import './movieList.scss'
import SingleMovie from '../SingleMovieCard/SingleMovieCard'
import { useSelector } from 'react-redux'
import { getMovies } from '../../features/movies/movieSlice'

export default function MovieList() {
    const movies = useSelector(getMovies)
    console.log('chk ', movies);
    let movieRender = ''
    movieRender = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => {
          return  <SingleMovie key={ index} movie={movie}/>
            })
          ) : (<h3>{movies.Error}</h3>)



  return (
      <div className='poster'>
          {movieRender}

    </div>
  )
}
