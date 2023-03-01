import React from 'react';
import PropTypes from 'prop-types';
import { Form, Link } from 'react-router-dom';

function ForgotPassword({ type }) {
  return (
    <div className='bg-[#f5f9fa] w-full min-h-screen grid place-items-center px-4 sm:px-8 py-8'>
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
            <div>
                <h2 className='text-center font-heading text-xl text-slate-700'>
                Forgot Password
                </h2>
                <p className='text-sm font-casual mt-1 text-slate-400'>
                    Please enter your account email address below.
                </p>
            </div>
            <input type="email" name='email' id='email' required placeholder='Email' className='form-control'/>
            <button type="submit" className='form-submit-btn'>Forgot Password</button>
            <Link to={`/${type}/login`} className="text-sm font-subHeading text-mainBlue text-center">Back to login page</Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

ForgotPassword.propTypes = {
  type: PropTypes.string,
}