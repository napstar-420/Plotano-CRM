import React from 'react';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { CiBoxList, CiFilter } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai';
import { BsSortDown, BsUpload } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { MdAddCircle } from 'react-icons/md';

function Leads() {
  return (
    <div className='w-full overflow-scroll h-full bg-lightBlue py-2 px-4 grid grid-rows-[auto_1fr]'>
      <header className='flex justify-between'>
        <h2 className='text-xl font-subHeading font-medium text-mainBlue'>
          Leads
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
            <AiOutlineUser />
          </button>
          <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
            <CiBoxList />
          </button>
          <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
            <BsSortDown />
          </button>
          <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
            <BsUpload />
          </button>
          <button className='px-2 bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 text-xl'>
            <CiFilter />
          </button>
          <button className='self-center text-3xl ml-1 scale-125 text-rose-400 hover:text-rose-500'>
            <MdAddCircle />
          </button>
        </div>
      </header>
      <main className='grid h-full place-items-center pt-4'>
        <LeadsContainer />
      </main>
      </div>  
    )
}

export default Leads;

function LeadsContainer() {
  return (
    <div className='w-full h-full py-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4'>
      <div className='h-96 rounded-lg py-3 border-t-2 border-t-slate-600 px-4 pr-3 bg-[#ebf2f5]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-subHeading text-slate-600'>New</h3>
          <MdAddCircle className='text-xl text-slate-600'/>
        </div>
      </div>
      <div className='h-96 rounded-lg py-3 border-t-2 border-t-orange-400 px-4 pr-3 bg-[#ebf2f5]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-subHeading text-slate-600'>Contracted</h3>
          <MdAddCircle className='text-xl text-slate-600'/>
        </div>
      </div>
      <div className='h-96 rounded-lg py-3 border-t-2 border-t-blue-400 px-4 pr-3 bg-[#ebf2f5]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-subHeading text-slate-600'>Qualified</h3>
          <MdAddCircle className='text-xl text-slate-600'/>
        </div>
      </div>
      <div className='h-96 rounded-lg py-3 border-t-2 border-t-red-400 px-4 pr-3 bg-[#ebf2f5]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-subHeading text-slate-600'>Disqualified</h3>
          <MdAddCircle className='text-xl text-slate-600'/>
        </div>
      </div>
      <div className='h-96 rounded-lg py-3 border-t-2 border-t-lime-400 px-4 pr-3 bg-[#ebf2f5]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-subHeading text-slate-600'>Proposal Sent</h3>
          <MdAddCircle className='text-xl text-slate-600'/>
        </div>
      </div>
      <div className='h-96 rounded-lg py-3 border-t-2 border-t-emerald-400 px-4 pr-3 bg-[#ebf2f5]'>
        <div className='flex justify-between items-center'>
          <h3 className='font-subHeading text-slate-600'>Converted</h3>
          <MdAddCircle className='text-xl text-slate-600'/>
        </div>
      </div>
    </div>
  )
}
