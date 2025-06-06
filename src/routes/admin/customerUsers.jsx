import React from 'react'
import { CiFilter } from 'react-icons/ci';
import { FiSearch } from 'react-icons/fi';
import NoResults from '../components/noResults';
import { MdAddCircle } from 'react-icons/md';

function CustomerUsers() {
    return (
        <div className='w-full h-full bg-lightBlue py-2 px-4 grid grid-rows-[auto_1fr]'>
          <header className='flex justify-between items-center'>
            <h2 className='text-xl font-subHeading font-medium text-mainBlue'>
              Users
            </h2>
            <div className='flex gap-2'>
              <form className='w-44 flex gap-1 items-center bg-slate-200 py-1 px-3'>
                <FiSearch className='text-slate-500' />
                <input
                  className='bg-transparent w-full outline-none text-slate-700 font-subHeading'
                  type='text'
                  name='search'
                  id='search'
                  placeholder='Search'
                />
              </form>
              <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
                <CiFilter />
              </button>
              <button className='self-center ml-1 text-3xl scale-125 text-rose-400 hover:text-rose-500'>
                <MdAddCircle />
              </button>
            </div>
          </header>
          <main className='grid place-items-center'>
            <NoResults />
          </main>
        </div>
      )
}

export default CustomerUsers
