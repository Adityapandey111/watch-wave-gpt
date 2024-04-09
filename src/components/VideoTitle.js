import React from 'react'

const  VideoTitle=({title,overview})=> {
  return (
    <div className='pt-[20%] px-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>

      <div className='flex'>
        <button className='bg-white p-2 px-10 text-lg text-black rounded-lg hover:bg-opacity-70'>▶️Play</button>
        <button className='bg-gray-500 mx-2 p-2 px-5 text-lg text-white bg-opacity-50 rounded-lg hover:bg-opacity-70'>ℹMore Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

