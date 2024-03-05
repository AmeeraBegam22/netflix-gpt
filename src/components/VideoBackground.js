import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux'


const VideoBackground = ({movieId}) => {
      //fetch trailer video 
      const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
      useMovieTrailer(movieId);

  return  (
    <div className=' w-screen'>
     <iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/7u3zBVAxx_w?si=Gq0rhsoF94qEkSLk ?&autoplay=1&mute=1"} 
     title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
  )
}

export default VideoBackground;