import React, { useEffect } from 'react'
import Body from './Body'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/Constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/Constants';
import { changeLanguage } from '../utils/configSlice';

function Header() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const showGptsearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
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
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

        navigate("/browse");

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [])

  const handleGptSearchClick = () => {
    // toggle GPT search button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-full px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={Logo}
        alt="Logo" />
      {user && (
        <div className='p-9 flex'>

          {
            showGptsearch && (<select className='p-2 m-2 bg-gray-900 text-white rounded-lg cursor-pointer'
              onClick={handleLanguageChange}
            >
              {
                SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
              }
            </select>)
          }

          <button className='py-2 px-4 m-2 text-white bg-purple-800 rounded-lg'
            onClick={handleGptSearchClick}
          >{showGptsearch ? "Home Page" : "GPT Search"}</button>
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
