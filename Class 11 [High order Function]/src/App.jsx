import React, { useState } from 'react'
import Footer  from "./components/Footer";
import Navigation  from "./components/Navigation";
import Section  from "./components/Section";

const App = () => {
  const [data,setdata] = useState("Important Data")
  return (
   <div className='text-3xl'>
   <Navigation data={data} setdata={setdata}/>
   <Section>
    <h1>section content</h1>
    <p>{data}</p>
   </Section>
   <Footer data={data} setdata={setdata}/>
   </div>
  )
}

export default App