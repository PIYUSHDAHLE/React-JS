import { useContext } from 'react'

import { datacontext } from '../utils/Wrapper';


const Footer = () =>{
  //3. import and use the context with useContext
    const [data,setdata] = useContext(datacontext);
    return (<div>{data}</div>)
}

export default Footer