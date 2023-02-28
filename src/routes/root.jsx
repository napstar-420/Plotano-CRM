import React from 'react'

function Root() {
  return (
    <div className='p-4'>
      <a href="admin/login" className='m-4 px-4 py-1 bg-blue-400 text-white font-heading'>Login as Admin</a>
      <a href="client/login" className='m-4 px-4 py-1 bg-blue-400 text-white font-heading'>Login as Client</a>
      <a href="staff/login" className='m-4 px-4 py-1 bg-blue-400 text-white font-heading'>Login as Staff</a>
    </div>
  )
}

export default Root;