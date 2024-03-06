import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black '>
        <div className='-mt-60 relative z-20 pl-14'>
        <MovieList title = {'Now Playing'} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {'Trending'} movies = {movies.TrendingMovies}/>
      <MovieList title = {'Popular'} movies = {movies.PopularMovies}/>
      <MovieList title = {'Upcoming Movies'} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {'Horror Movies'} movies = {movies.nowPlayingMovies}/>
        </div>
     
    </div>
    )
   
  )
}

export default SecondaryContainer;