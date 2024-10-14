import React from 'react'
import Service from './Component/Service'
import Home from './Component/Home'
import About from './Component/About'
import Product from './Component/Product'
import NotFound from './Component/NotFound'
import Nav from './Component/Nav'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <div className='flex justify-center items-center gap-10  p-5 flex-col bg-blue-400 w-full h-[80%]'>
     <Nav/>

     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/service' element={<Service />} />
       <Route path='/product' element={<Product />} />
       <Route path='*' element={<NotFound />} />
     </Routes>
    </div>
    </>
  )
}

export default App