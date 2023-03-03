import React from 'react'
import { redirect } from 'react-router-dom'

function Customers() {
  redirect('/admin/customers/clients');
  return (
    <div>Please wait</div>
  )
}

export default Customers
