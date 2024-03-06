import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_LOGO } from '../utils/constant'
const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src = {BG_LOGO}
              alt= 'logo'/>
      </div>
      <GptSearchbar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch