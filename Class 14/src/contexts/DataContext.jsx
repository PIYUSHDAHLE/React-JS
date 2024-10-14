import { useState } from "react";
import React,{createContext} from 'react';

export const usercontext =createContext(null);

const DataContext = (props) => {

const [user,setuser] = useState ({
    name : "Piyush Dahle",
    age: 24,
    email : "piyushdahle@gmail.com"
})

  return (
   <usercontext.Provider value ={[user,setuser]}>
    {props.children}
   </usercontext.Provider>
  )
}

export default DataContext