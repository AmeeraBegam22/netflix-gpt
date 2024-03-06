import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo : null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        },  
        addTrendingMovies : (state,action) => {
            state.TrendingMovies = action.payload;
        }
    }
});
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies } =movieSlice.actions;
export default movieSlice.reducer;