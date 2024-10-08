import React, { useState } from 'react'
import Footer  from "./components/Footer";
import Navigation  from "./components/Navigation";
import Wrapper  from "./utils/Wrapper";


const App = () => {
  const [data,setdata] = useState("Important Data")
  return (
   <div className='text-3xl'>

<Wrapper>
   <Navigation data={data} setdata={setdata}/>
</Wrapper>
<Wrapper>
   <Footer data={data} setdata={setdata}/>
</Wrapper>
   </div>
  )
}

export default App