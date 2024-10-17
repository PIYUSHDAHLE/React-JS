import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
   const navigate = useNavigate()
  const submitHandler = () => {
    //code to send from data to the database 
    // after sending data to the database, redirect to the home page
        // navigate('/')
        // navigate('-1') //not found page
        // navigate('1') // not found page
  }

  return (
  <>
  <div>Service</div>
  <button onClick={submitHandler} className='mt-5 px-2 py-1 bg-pink-700 text-teal-200 rounded-md'> Go To Home</button>
  </>
  
  )
}

export default Service