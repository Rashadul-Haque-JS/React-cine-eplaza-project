import React, { useEffect,useState} from 'react'
import MovieList from '../movieList/MovieList'
import cineAPI from '../../common/api/movies'
import APIKey from '../../common/api/apiKeys/movieAPIKey'
import './home.scss'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

export const Home = ()=> {
  const [query, setQuery] = useState('Jurassic');
  const dispatch = useDispatch();
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

   }, [])

  const fetchNewCinema = async()=>{
         const response = await cineAPI.get(`?apikey=${APIKey}&s=${query}&type=movie`);
         dispatch(addMovies(response.data))


    }


  return (
    <div>

      <div className='movie-container'>
        <div className='pageUpperSection'>
          <h2 className='sectionsHeader'>Movies</h2>
          <div>
            <input style={{padding:'3px'}} type='text' value={query}
              onChange={(e) => setQuery(e.target.value)}
              required/>
            <button style={{padding:'3px'}} onClick={fetchNewCinema}>search</button>
          </div>

        </div>

        <MovieList />

      </div>
    </div>
  )
}
