import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-x-10 p-2 m-2'>
        {/* <Link className='bg-white rounded-sm p-1' to="/">Home</Link>
        <Link className='bg-white rounded-sm p-1' to="/about">About</Link>
        <Link className='bg-white rounded-sm p-1' to="/product">Products</Link>
        <Link className='bg-white rounded-sm p-1' to="/service">Service</Link> */}
      

        {/* <NavLink className={(e)=>( e.isActive ? "text-red-400" : "text-black") } to="/">Home</NavLink>
        <NavLink className={(e)=>( e.isActive ? "text-red-400" : "text-black") } to="/about">About</NavLink>
        <NavLink className={(e)=>( e.isActive ? "text-red-400" : "text-black") } to="/product">Products</NavLink>
        <NavLink className={(e)=>( e.isActive ? "text-red-400" : "text-black") } to="/service">Service</NavLink> */}
       
        <NavLink style={(e) => e.isActive ? ({textDecoration:"underline"}):({}) } to="/">Home</NavLink>
        <NavLink style={(e) => e.isActive ? ({textDecoration:"underline"}):({}) } to="/about">About</NavLink>
        <NavLink style={(e) => e.isActive ? ({textDecoration:"underline"}):({}) } to="/product">Products</NavLink>
        <NavLink style={(e) => e.isActive ? ({textDecoration:"underline"}):({}) } to="/service">Service</NavLink>
    </div>
  )
}

export default Nav