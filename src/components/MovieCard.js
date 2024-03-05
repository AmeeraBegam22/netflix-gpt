import React from 'react'
import { CDN_IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 pr-4'> 
        <img src = {CDN_IMG_URL + posterPath }
         alt ="moviecard"/>
    </div>
  )
}

export default MovieCard