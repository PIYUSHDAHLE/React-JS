import React, { useState } from 'react'
import Footer  from "./components/Footer";
import Navigation  from "./components/Navigation";


const App = () => {
//   const [data,setdata] = useState("Important Data")
  return (
   <div className='text-3xl'>
      <Navigation/>
      <Footer/>
   </div>
  )
}

export default App