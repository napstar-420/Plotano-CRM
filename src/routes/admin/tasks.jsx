import React from 'react';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { CiBoxList, CiFilter } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import NoResults from '../components/noResults';

function Tasks() {
  return (
    <div className='w-full h-full bg-lightBlue py-2 px-4 grid grid-rows-[auto_1fr]'>
      <header className='flex justify-between'>
        <h2 className='text-xl font-subHeading font-medium text-mainBlue'>
          Tasks
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
            <HiOutlineArchiveBox />
          </button>
          <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
            <CiBoxList />
          </button>
          <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
            <AiOutlineUser />
          </button>
          <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
            <BsGraphUp />
          </button>
          <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
            <CiFilter />
          </button>
        </div>
      </header>
      <main className='grid place-items-center'>
        <NoResults />
      </main>
    </div>
  );
}

export default Tasks;
