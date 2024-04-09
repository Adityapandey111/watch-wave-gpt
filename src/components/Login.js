import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE, USER_AVATAR } from '../utils/Constants';


function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }


  const handleButtonClick = () => {
    // validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          }).then(() => {
            // Profile updated!

            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));


            // navigate("/browse");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });

          console.log(user);


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
    else {
      // sign in logic
      signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });

    }
    console.log(errorMessage);

  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BACKGROUND_IMAGE}
          alt="background image" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className='text-white absolute w-1/3 my-32 p-12 bg-black mx-auto left-0 right-0 bg-opacity-85'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignIn && <input
            ref={name}
            type="text"
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        }
        {/* {
          !isSignIn && <input
            type="Number"
            placeholder='Phone Number'
            className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        } */}
        <input
          ref={email}
          type="text"
          placeholder='Email'
          className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 rounded-lg' />

        <p className='text-red-700 p-4 my-2 w-full text-2xl font-bold'>
          {errorMessage}
        </p>

        <button
          onClick={handleButtonClick}
          className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p
          onClick={toggleSignInForm}
          className='p-4 my-4 cursor-pointer'>{isSignIn ? "New to Netflix? Sign Up Now" : "Already have a account? Sign In now"}</p>
      </form>
    </div>

    // <div>
    //   <Header />
    //   <div className='fixed top-0 left-0 w-full h-full overflow-hidden'>
    //     <div className='h-full overflow-y-scroll'>
    //       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
    //         alt="background image"
    //         className='w-full object-cover' />
    //     </div>
    //   </div>


    //   <form
    //     onSubmit={(e) => e.preventDefault()}
    //     className='text-white absolute flex flex-col items-center justify-center w-1/3 my-32 mx-auto left-0 right-0 p-12 bg-black bg-opacity-85 mb-4 pb-4 rounded'>
    //     <h1 className='font-bold text-3xl py-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
    //     {
    //       !isSignIn && <input
    //         ref={name}
    //         type="text"
    //         placeholder='Full Name'
    //         className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
    //     }
    //     {
    //       !isSignIn && <input
    //         type="Number"
    //         placeholder='Phone Number'
    //         className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
    //     }
    //     <input
    //       ref={email}
    //       type="text"
    //       placeholder='Email'
    //       className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
    //     <input
    //       ref={password}
    //       type="password"
    //       placeholder='Password'
    //       className='p-4 my-2 w-full bg-gray-700 rounded-lg' />

    //     <p className='text-red-700 p-4 my-2 text-2xl font-bold'>
    //       {errorMessage}
    //     </p>

    //     <button
    //       onClick={handleButtonClick}
    //       className='p-4 my-2 w-full bg-red-700 rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
    //     <p
    //       onClick={toggleSignInForm}
    //       className='p-4 my-4 cursor-pointer'>{isSignIn ? "New to Netflix? Sign Up Now" : "Already have a account? Sign In now"}</p>
    //   </form>
    // </div>

  )
}

export default Login
