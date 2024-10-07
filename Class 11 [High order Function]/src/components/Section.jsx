import React from 'react'

const Section = (props) => {
   const {children} = props;
   console.log(props);
   
  return (
   <div>{children}</div>
  )
}

export default Section