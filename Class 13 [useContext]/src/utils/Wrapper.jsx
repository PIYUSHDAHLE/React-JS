import React from 'react'
import { createContext,useState } from 'react'

// 1. Create and export context out of the function component
export const datacontext = createContext(null);

const Wrapper = (props) => {
  const [data,setdata] = useState("bahut IMP data hai");
  return (
   //2 . wrap the children with context.Provider and pass the value
   <datacontext.Provider value={[data,setdata]}>
     {props.children}
   </datacontext.Provider>

  ) 
}

export default Wrapper