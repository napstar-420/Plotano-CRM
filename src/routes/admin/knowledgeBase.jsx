import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa';

function KnowledgeBase() {
  return (
    <div className='w-full h-full bg-lightBlue'>
      <header className='py-8 px-8 text-center'>
        <h1 className='font-heading text-mainBlue text-2xl mb-2'>Knowledge Base</h1>
        <p className='font-subHeading text-slate-500'>Get answers and help from our Knowledge Base or <a href="#" className='text-mainBlue'>open a support ticket</a></p>
      </header>
      <main className='p-8'>
        <div className='bg-white px-8 py-4 w-64 text-center rounded-md'>
          <div className='bg-blue-100 w-max m-auto mb-4 p-4 rounded-full'>
            <FaQuestionCircle className='text-6xl text-mainBlue'/>
          </div>
          <h2 className='font-casual text-lg text-[#12355a] font-light'>Frequently Asked Questions</h2>
          <p className='text-sm font-subHeading text-slate-400 font-light mt-2 mb-4'>Answers to some of the most common questions</p>
          <a href="#" className='border-[1px] text-sm border-mainBlue py-1 px-6 rounded font-subHeading text-mainBlue hover:bg-mainBlue hover:text-white transition-colors'>See Article</a>
        </div>
      </main>
    </div>
  )
}

export default KnowledgeBase;
