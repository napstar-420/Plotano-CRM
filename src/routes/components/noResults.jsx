import React from 'react'
import { FcSearch } from 'react-icons/fc';

function NoResults() {
  return (
    <div className='flex flex-col items-center'>
      <FcSearch className='text-8xl'/>
      <h1 className='text-lg font-subHeading font-light text-slate-700'>Oops! No Records were found.</h1>
      <p className='text-slate-500 font-subHeading'>Try a different search...</p>
    </div>
  )
}

export default NoResults
