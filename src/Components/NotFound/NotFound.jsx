import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen font-sans'>
            <div className='text-center space-y-2 font-bold'>
                <h1 className='text-9xl text-red-700'>404</h1>
                <h3 className='text-5xl'>Opppssss....!!!</h3>
                <h4 className='text-2xl'>Page Not Found</h4>
                <NavLink to='/'><h4 className='text-2xl link link-info'>{'<<<'} Go Back to Home page</h4></NavLink>
            </div>
        </div>
    );
};

export default NotFound;