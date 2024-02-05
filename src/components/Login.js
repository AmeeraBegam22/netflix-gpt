import React, { useState } from 'react';
import Header from './Header';


const Login = () => {

  const [IsSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!IsSignIn);
  };

  return (
   <div>
     <Header/>
     <div className='absolute'>
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/1466bdef-8a6a-468a-9e4b-fe44f4468738/SA-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt='logo'
     />
     </div>
    <form className='bg-black/80 rounded-md absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-3'>{IsSignIn ? "Sign In" : "Sign Up"}</h1>
       {!IsSignIn && (
         <input type="text" 
         placeholder='Full Name' 
         className='p-4 my-3 bg-black/80 w-full rounded-md border border-slate-400'/>)}

        <input type="text"
        placeholder='Email Address'
        className='p-4 my-3 bg-black/80 w-full rounded-md border border-slate-400'/>

        <input type="password" 
        placeholder='Password'
        className='p-4 my-3 w-full bg-black/80 rounded-md border border-slate-400'/>

        <button className='bg-red-700 w-full p-2 my-4 rounded-md '>
          {IsSignIn ? "Sign In" : "Sign Up"}
          </button>

        <p className='p-4 cursor-pointer' 
        onClick={handleSignIn}>
          {IsSignIn ? "New to Netflix? Sign up now." : "Alredy registered ? Sign In now."}
         </p>

    </form>

   </div>
  
  )
}

export default Login;