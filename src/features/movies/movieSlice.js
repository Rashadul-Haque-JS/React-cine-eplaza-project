import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    movies: {},
    shows: {},
    details:{},
    type:''
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
        addType:(state, { payload })=>{
            state.type = payload
        },
    },
})

export const { addMovies, addShows, addDetails, addType} = movieSlice.actions;
export const getMovies = (state) => state.movies;
export const getShows = (state) => state.shows;
export const getDetails = (state) => state.details;
export const getType = (state) => state.type;


export default movieSlice.reducer;