import React from 'react';
import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-4'> 
      <img
      className='rounded-lg'
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card" />
    </div>  
  )
}

export default MovieCard;
