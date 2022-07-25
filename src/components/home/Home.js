import React, { useEffect,useState} from 'react'
import MovieList from '../movieList/MovieList'
import cineAPI from '../../common/api/movies'
import APIKey from '../../common/api/apiKeys/movieAPIKey'
import './home.scss'
import { useDispatch } from 'react-redux'
import { addMovies,addShows } from '../../features/movies/movieSlice'

export const Home = ()=> {
  const [query, setQuery] = useState('Jurassic');
  const dispatch = useDispatch();
  const APIKey = process.env.REACT_APP_OMDB_API_KEY
  useEffect(() => {
    try {
       const fetchCinema = async()=>{
         const response = await cineAPI.get(`?apikey=${APIKey}&s=${query}&type=movie`);
         dispatch(addMovies(response.data))


    }
    fetchCinema()
     } catch (err) {
       console.log('ERROR IS ', err);
     }

     try {
       const fetchShows = async()=>{
         const response = await cineAPI.get(`?apikey=${APIKey}&s=${query}&type=series`);
         dispatch(addShows(response.data))


    }
    fetchShows()
     } catch (err) {
       console.log('ERROR IS ', err);
     }

   }, [])

  const fetchNewCinema = async()=>{
         const response = await cineAPI.get(`?apikey=${APIKey}&s=${query}&type=movie`);
    dispatch(addMovies(response.data))
    setQuery('')


    }

  const fetchNewSeries = async()=>{
         const response = await cineAPI.get(`?apikey=${APIKey}&s=${query}&type=series`);
         dispatch(addShows(response.data))


    }


  return (
    <div className='home'>
      <div className='movie-container'>
        <div className='pageUpperSection'>
          <h2 className='sectionsHeader'>Movies</h2>
          <form>
            <input style={{padding:'3px'}} type='text' value={query}
              onChange={(e) => setQuery(e.target.value)} placeholder='search by name'
              required/>
            <button style={{padding:'3px', cursor:'pointer'}} onClick={() => {
          fetchNewCinema();
          fetchNewSeries();
        }}>search</button>
          </form>

        </div>

        <MovieList />

      </div>
    </div>
  )
}
