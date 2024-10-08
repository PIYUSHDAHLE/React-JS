import React, { useState } from 'react'
import Footer  from "./components/Footer";
import Navigation  from "./components/Navigation";
import Section  from "./components/Section";

const App = () => {
  // const [data,setdata] = useState("Important Data")
  const [nav, setnav] = useState("kuch msg")

  return (
  //  <div className='text-3xl'>
  //  <Navigation data={data} setdata={setdata}/>
  //  <Section>
  //   <h1>section content</h1>
  //   <p>{data}</p>
  //  </Section>
  //  <Footer data={data} setdata={setdata}/>
  //  </div>
  <div className="div">
     <Navigation nav={nav} setnav={setnav} />
  </div>
  )
}

export default App