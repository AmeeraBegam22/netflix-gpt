import  { useState, useRef } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password= useRef(null);

  const [IsSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);


  const handleSignIn = () => {
    setIsSignIn(!IsSignIn);
  };

  const handleButtonclick = () => {
   
      console.log(email.current.value);
     console.log(password.current.value);
    const message = checkValidateData(email.current.value,password.current.value);
   // console.log(message);
    seterrorMessage(message);

    if(message) return;

 if(!IsSignIn)
  {     
  createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
          })
          .then(() => {
            const {uid, email, displayName} = auth.currentUser;
            dispatch(
              addUser(
                {uid: uid, 
                  email: email,
                   displayName:displayName}
                ));
            
          })
          .catch((error) => {
              seterrorMessage(error.message)
          });
        
          
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-" + errorMessage);
  });
 }
 
     else {
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode +"-"+ errorMessage);
        
      });
    }
  };
 

  return (
   <div>
     <Header/>
     <div className='absolute'>
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/1466bdef-8a6a-468a-9e4b-fe44f4468738/SA-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt='logo'
     />
     </div>
    <form onSubmit={(e) => e.preventDefault()} className='bg-black/80 rounded-md absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-3'>{IsSignIn ? "Sign In" : "Sign Up"}</h1>
       {!IsSignIn && (
         <input 
         ref = {name}
         type="text" 
         placeholder='Full Name' 
         className='p-4 my-3 bg-black/80 w-full rounded-md border border-slate-400'/>)}

        <input 
        ref ={email}
        type="text"
        placeholder='Email Address'
        className='p-4 my-3 bg-black/80 w-full rounded-md border border-slate-400'/>

      
        <input 
        ref = {password}
        type="password" 
        placeholder='Password'
        className='p-4 my-3 w-full bg-black/80 rounded-md border border-slate-400'/>

        <p className= 'text-red-600'>{errorMessage}</p>


        <button 
        onClick={handleButtonclick}
        className='bg-red-700 w-full p-2 my-4 rounded-md '>
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