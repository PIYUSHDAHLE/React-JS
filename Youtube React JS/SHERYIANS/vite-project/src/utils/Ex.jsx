import React from 'react'
import Ex2 from './Ex2.jsx'
const Ex = (props) => {
  return (
    <div className='flex justify-center items-center flex-col mt-10'>
        <h1 className='text-blue-700 font-mono font-semibold'>This is a Example 1 {props.name}</h1>
        <Ex2 user = {props.name}/>
    </div>
  )
}

export default Ex