import React from 'react';
import lang from './languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 p-6 bg-black grid grid-cols-12 rounded-lg opacity-95 fixed'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='bg-red-900 text-white m-4 py-2 px-4 rounded-lg col-span-3'>
            {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
