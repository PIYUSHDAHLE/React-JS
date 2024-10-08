import React from 'react'

const Navigation = (props) => {
    const {nav,setnav}=props;
    console.log(props.nav)
    setnav("kya daal du")
  return (
    <div>{nav}</div>
  )
}

export default Navigation
