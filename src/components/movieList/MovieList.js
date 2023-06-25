import React from 'react'
import './movielist.scss'
import SingleMovie from '../SingleMovieCard/SingleMovieCard'
import { useSelector } from 'react-redux'
import { getMovies, getShows } from '../../features/movies/movieSlice'

export default function MovieList() {
    const movies = useSelector(getMovies)
    const shows = useSelector(getShows)

    let movieRender = ''
    movieRender = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => {
          return  <SingleMovie key={ index} movie={movie}/>
            })
    ) : (<h3>{movies.Error}</h3>)

    let showRender = ''
    showRender = shows.Response === 'True' ? (
        shows.Search.map((show, index) => {

          return <SingleMovie key={ index} movie={show}/>
            })
          ) : (<h3>{shows.Error}</h3>)




    return (
        <div className='movieList'>
            <div className='poster'>
          {movieRender}

    </div>
    <h2 className='series'>Series</h2>
    <div className='poster'>
          {showRender}

    </div>
        </div>

  )
}
