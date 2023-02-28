import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-router-dom';
import SignUpSvg from '../assets/sign-up-svg.svg';

function SignUp({ type }) {
  return (
    <div className='bg-[#f5f9fa] w-full min-h-screen grid place-items-center px-4 sm:px-8 py-8'>
    <div className='hidden sm:block absolute bottom-1 left-1 z-0 w-[clamp(250px,_25%,_25%)]'>
        <img src={SignUpSvg} alt='' className='w-full' />
      </div>
      <div className='w-full sm:w-max z-10'>
        <div className='text-center mb-8'>
          <h1 className='font-heading text-2xl font-bold text-slate-700 tracking-[0.5rem]'>
            PLOTANO
          </h1>
          <p className='font-subHeading tracking-[0.4rem] text-slate-700 text-xs relative right-1 font-semibold'>
            AGENCY
          </p>
        </div>
        <div className='bg-white py-8 px-4 sm:px-12 shadow-[0px_0px_5px] w-full shadow-slate-200'>
          <Form className='grid w-full sm:w-80 gap-6'>
            <h2 className='text-center font-heading text-xl text-slate-700'>
              Create new Account
            </h2>
            <div className='grid sm:grid-cols-2 gap-6 sm:gap-2'>
              <input
                type='text'
                className='form-control'
                name='fname'
                id='fname'
                placeholder='First name'
                required
              />
              <input
                type='text'
                name='lname'
                className='form-control'
                id='lname'
                placeholder='Last name'
                required
              />
            </div>
            <input
                type='text'
                name='companyName'
                className='form-control'
                id='companyName'
                placeholder='Company name'
                required
              />
            <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                placeholder='Email'
                required
              />
              <input
                type='password'
                name='password'
                className='form-control'
                id='password'
                minLength="6"
                placeholder='Password (min 6 characters)'
                required
              />
              <input
                type='password'
                name='confirm_password'
                className='form-control'
                id='confirm_password'
                minLength="6"
                placeholder='Confirm Password'
                required
              />
            <button
              type='submit'
              className='bg-[#21aee3] hover:bg-[#1395c4] outline-offset-2 focus:outline-blue-300 text-white text-lg font-subHeading py-1 px-4 rounded transition-colors'
            >
              Continue
            </button>
            <h3 className='text-center text-sm font-subHeading text-slate-500'>
              Already have an account?&nbsp;
              <a href={`/login/${type}`} className='text-blue-500'>
                Sign in
              </a>
            </h3>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

SignUp.propTypes = {
    type: PropTypes.string,
}