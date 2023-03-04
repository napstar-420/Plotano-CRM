import React from 'react';
import NoResults from '../components/noResults';
import { MdAddCircle } from 'react-icons/md';

function ProjectTemplate() {
  return (
    <div>
      <div className='w-full h-full bg-lightBlue py-2 px-4 grid grid-rows-[auto_1fr]'>
      <header className='flex justify-between'>
        <h2 className='text-xl font-subHeading font-medium text-mainBlue'>
          Project Templates
        </h2>
        <div className='flex gap-2'>
          <button className='self-center text-3xl scale-125 text-rose-400 hover:text-rose-500'>
            <MdAddCircle />
          </button>
        </div>
      </header>
      <main className='grid place-items-center'>
        <NoResults />
      </main>
    </div>
    </div>
  )
}

export default ProjectTemplate
