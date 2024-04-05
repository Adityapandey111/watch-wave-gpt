import React from 'react'
import Body from './Body'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const navigate=useNavigate();

  const user=useSelector(store=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute w-full px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
      className='w-44'
      src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" 
      alt="Logo" />
      {user && (<div className='p-9 flex'>
        <img 
        className='w-12 h-13 m-2'
        src={user?.photoURL} 
        alt="usericon" />
        <button 
        onClick={handleSignOut}
        className='bg-red-600 rounded font-bold p-2 m-2 text-white'>Sign Out</button>
      </div>)
      }
    </div>
  )
}

export default Header
