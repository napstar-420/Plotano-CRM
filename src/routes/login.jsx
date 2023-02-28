import React from 'react';
import { Form } from 'react-router-dom';

function Login() {
  return (
    <div className='bg-[#f5f9fa] w-full min-h-screen grid place-items-center px-8 py-8'>
      <div className='w-full sm:w-max'>
        <div className='text-center mb-8'>
          <h1 className='font-heading text-2xl font-bold text-slate-700 tracking-[0.5rem]'>
            PLOTANO
          </h1>
          <p className='font-subHeading tracking-[0.4rem] text-slate-700 text-xs relative right-1 font-semibold'>
            AGENCY
          </p>
        </div>
        <div className='bg-white py-8 px-12 shadow-[0px_0px_5px] w-full shadow-slate-200'>
          <Form className='grid sm:w-80 gap-6'>
            <h2 className='text-center font-heading text-xl text-slate-700'>
              Sign in to your account
            </h2>
            <input
              type='email'
              className='border-b-2 border-b-slate-200 px-2 py-1 outline-none focus:border-b-slate-500 transition-colors font-subHeading'
              name='email'
              id='email'
              placeholder='Email'
            />
            <input
              type='password'
              name='password'
              className='border-b-2 border-b-slate-200 px-2 py-1 outline-none focus:border-b-slate-500 transition-colors font-subHeading'
              id='password'
              placeholder='Password'
            />
            <div className=''>
              <input type='checkbox' name='remember' id='remember' />
              <label htmlFor='remember' className='ml-1 font-subHeading text-slate-500'>Remember me</label>
            </div>
            <a href='/forgot-password' className='w-max justify-self-end text-right text-sm font-subHeading text-slate-500'>Forgot Password</a>
            <button type='submit' className='bg-[#21aee3] hover:bg-[#1395c4] text-white text-lg font-subHeading py-1 px-4 rounded transition-colors'>Continue</button>
            <h3 className='text-center text-sm font-subHeading text-slate-500'>
              Don&#39;t have an account?&nbsp;
              <a href='/signup' className='text-blue-500'>Sign up</a>
            </h3>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
