import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const MyApp = () => {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center w-full bg-green-300 h-[85vh] text-2xl'>Main Content</div>
     <Footer/>
    </>
  )
}

export default MyApp