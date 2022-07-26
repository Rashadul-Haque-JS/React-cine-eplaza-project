import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    movies: {},
    shows: {},
    details:{}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies:(state, { payload })=>{
            state.movies = payload
        },
        addShows:(state, { payload })=>{
            state.shows = payload
        },

        addDetails:(state, { payload })=>{
            state.details = payload
        },
    },
})

export const { addMovies, addShows, addDetails} = movieSlice.actions;
export const getMovies = (state) => state.movies;
export const getShows = (state) => state.shows;
export const getDetails = (state) => state.details;


export default movieSlice.reducer;