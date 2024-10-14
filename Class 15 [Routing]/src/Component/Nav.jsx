import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-x-10 p-2 m-2'>
        <Link className='bg-white rounded-sm p-1' to="/">Home</Link>
        <Link className='bg-white rounded-sm p-1' to="/about">About</Link>
        <Link className='bg-white rounded-sm p-1' to="/product">Products</Link>
        <Link className='bg-white rounded-sm p-1' to="/service">Service</Link>
    </div>
  )
}

export default Nav