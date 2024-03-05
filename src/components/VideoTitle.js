import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-extrabold text-4xl mx-24'>{title}</h1>
      <p className='text-lg w-1/4 mx-24'>{overview}</p>
      <div className='mx-24 py-2'>
        <button className='py-2 px-8 text-lg bg-white font-semibold text-black hover:bg-opacity-40 rounded-md'>Play</button>
        <button className='py-2 px-4 text-lg bg-gray-400 font-semibold opacity-80 rounded-md mx-2'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle;