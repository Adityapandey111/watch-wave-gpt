import React, { useEffect } from 'react'
import Body from './Body'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/Constants';

function Header() {

  const dispatch=useDispatch();

  const navigate=useNavigate();

  const user=useSelector(store=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));

        navigate("/browse");
        
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [])

  return (
    <div className='absolute w-full px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
      className='w-44'
      src= {Logo}
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
