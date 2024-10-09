import React from 'react'

const Navigation = (props) => {
    const {data,setdata}=props;
    const internalCSS = {
      backgroundColor: "yellow",
      padding: "10px",
      borderRadius: "5px"
    }
  return (
    <>
    <div style={{fontSize:"30px", color:"tomato"}}>Navigation : {data}</div>
    <h2  style={internalCSS}>THIS IS INTERNAL CSS</h2>
    
    </>
  )
}

export default Navigation