import React from 'react';
import { NavLink } from 'react-router-dom';

function Root() {
  return (
    <div className='p-4'>
      <NavLink
        to='/admin/login'
        className='m-4 px-4 py-1 bg-blue-400 text-white font-heading'
      >
        Login as Admin
      </NavLink>
      <NavLink
        to='/client/login'
        className='m-4 px-4 py-1 bg-blue-400 text-white font-heading'
      >
        Login as Client
      </NavLink>
      <NavLink
        to='/staff/login'
        className='m-4 px-4 py-1 bg-blue-400 text-white font-heading'
      >
        Login as Staff
      </NavLink>
      <NavLink
        to='/admin/'
        className='m-4 px-4 py-1 bg-blue-400 text-white font-heading'
      >
        See Admin account
      </NavLink>
    </div>
  );
}

export default Root;
