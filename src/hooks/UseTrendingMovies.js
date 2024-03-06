import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const UseTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));

    }
    useEffect(()=>{
        getTrendingMovies();
    }, [])
}

export default UseTrendingMovies;