
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UsePopularMovies from '../hooks/UsePopularMovies';
import UseTrendingMovies from '../hooks/UseTrendingMovies';


const Browser = () => {
   useNowPlayingMovies(); //calling custom hook
  UsePopularMovies();
  UseTrendingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser;