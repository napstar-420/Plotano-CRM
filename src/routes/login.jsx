import React from 'react';
import PropTypes from 'prop-types'
import { Form, Link } from 'react-router-dom';
import LoginSvg from '../assets/login_svg.svg';

function Login({ type }) {
  return (
    <div className='bg-[#f5f9fa] w-full min-h-screen grid place-items-center px-4 sm:px-8 py-8'>
      <div className='hidden sm:block absolute bottom-0 left-0 z-0 w-[clamp(250px,_25%,_25%)]'>
        <img src={LoginSvg} alt='' className='w-full' />
      </div>
      <div className='w-full sm:w-max z-10'>
        <div className='text-center mb-8'>
          <h1 className='font-heading text-2xl font-semibold text-slate-700 tracking-[0.5rem]'>
            PLOTANO
          </h1>
          <p className='font-subHeading tracking-[0.4rem] text-slate-700 text-xs relative right-1 font-semibold'>
            AGENCY
          </p>
        </div>
        <div className='bg-white py-8 px-4 sm:px-12 shadow-[0px_0px_5px] w-full shadow-slate-200'>
          <Form className='grid w-full sm:w-80 gap-6'>
            <h2 className='text-center font-heading text-xl text-slate-700'>
              Sign in to your account
            </h2>
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
              placeholder='Password'
              minLength={6}
              required
            />
            <div className=''>
              <input type='checkbox' name='remember' id='remember' />
              <label
                htmlFor='remember'
                className='ml-1 font-subHeading text-slate-500 cursor-pointer'
                style={{ userSelect: 'none' }}
              >
                Remember me
              </label>
            </div>
            <Link
              to={`/${type}/forgotPassword`}
              className='w-max justify-self-end text-right text-sm font-subHeading text-slate-500'
            >
              Forgot Password
            </Link>
            <button
              type='submit'
              className='form-submit-btn'
            >
              Continue
            </button>
            <h3 className='text-center text-sm font-subHeading text-slate-500'>
              Don&#39;t have an account?&nbsp;
              <Link to={`/${type}/sign-up`} className='text-mainBlue'>
                Sign up
              </Link>
            </h3>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

Login.propTypes = {
  type: PropTypes.string,
}
