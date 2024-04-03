import React, { useState } from 'react'
import Header from './Header'
function Login() {
  const [isSignIn,setIsSignIn]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
        alt="background image" />
      </div>

      <form className='text-white absolute w-1/3 my-32 p-12 bg-slate-900 mx-auto left-0 right-0 bg-opacity-85'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn? "Sign In":"Sign Up"}</h1>
        {
          !isSignIn && <input 
          type="text" 
          placeholder='Full Name' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        }
        {
          !isSignIn && <input 
          type="Number" 
          placeholder='Phone Number' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        }
       <input 
       type="text" 
       placeholder='Email' 
       className='p-4 my-4 w-full bg-gray-700 rounded-lg' /> 
       <input 
       type="password" 
       placeholder='Password' 
       className='p-4 my-4 w-full bg-gray-700 rounded-lg' /> 
       <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn? "Sign In":"Sign Up"}</button>  
      <p 
      onClick={toggleSignInForm}
      className='p-4 my-4 cursor-pointer'>{isSignIn? "New to Netflix? Sign Up Now":"Already have a account? Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login
