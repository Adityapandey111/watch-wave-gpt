import React from 'react'
import Body from './Body'

function Header() {
  return (
    <div className='absolute px-8 bg-gradient-to-b from-black z-10'>
      <img
      className='w-44'
      src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" 
      alt="Logo" />
    </div>
  )
}

export default Header
