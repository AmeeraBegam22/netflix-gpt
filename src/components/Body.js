import React from 'react';
import Login from './Login';
//import Header from './Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browser from './Browser';

const Body = () => {
    const Approuter = createBrowserRouter([

        {
            path: '/',
            element: <Login/>
        },
        {
            path: 'browse',
            element: <Browser/>
        },

    ]);
  return (
    <div>
       <RouterProvider router={Approuter}/>
    </div>
  )
}

export default Body;