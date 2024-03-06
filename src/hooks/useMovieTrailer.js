import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId+'/videos?language=en-US', API_OPTIONS)
      const json = await data.json();
     // console.log(json);
      const trailer = json.results.filter((video) => video.type === 'Trailer');
  
     // console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
      getMovieVideo();
    }, []);
}
export default useMovieTrailer;