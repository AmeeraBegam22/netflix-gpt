import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
const dispatch = useDispatch();
const user = useSelector((store) => store.user);
const navigate = useNavigate();

useEffect(() => {
 const unsubscribe = onAuthStateChanged(auth, (user) => {    //it is kind of event listener,wheneve a user signed in/igned out this callled automagically.
    if (user) {
      //Sign in
      const {uid, email, displayName} = user;
      dispatch(
        addUser(
          {uid: uid, 
            email: email,
             displayName:displayName}
          ));
          navigate('/browse')
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate('/')
    }
  });
    //unsubscribe when component unmounts
 return () => unsubscribe();
},[]);
const handleSignOut = () => {
  signOut(auth)
  .then(() => {
    // Sign-out successful. 
  })
  .catch((error) => {
     navigate('/error')
  });
};

const handleGPTSearchView = () => {
    //handletoggle
    dispatch(toggleGptSearchView());
}
 
  return (
    <div className=
        'flex justify-between absolute w-screen py-6 px-2 bg-gradient-to-b from-black z-10 '>
        <img className='w-44' 
        src= {LOGO}
        alt='logo'/>
        
        {user && ( 
       <div>
        <button 
          onClick={handleGPTSearchView}
         className='px-3 py-3 bg-blue-600 text-white rounded-lg'>GPT Search</button>
        <button
         onClick={handleSignOut}
         className='mx-8 font-bold text-white'>Sign out
         </button>
         </div>
         )}
    </div>
  )
}

export default Header;