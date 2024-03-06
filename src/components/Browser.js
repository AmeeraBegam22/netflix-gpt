
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UsePopularMovies from '../hooks/UsePopularMovies';
import UseTrendingMovies from '../hooks/UseTrendingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';




const Browser = () => {
                                                
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);  //store.SLICE_Name.state

   useNowPlayingMovies(); //calling custom hook
  UsePopularMovies();
  UseTrendingMovies();
  return (
    <div>
      <Header/>
      {showGptSearch ? (
      <GptSearch/>) : 
      (
     <>
     <MainContainer/>
      <SecondaryContainer/>
      </> 
        )}
      
    </div>
  )
}

export default Browser;