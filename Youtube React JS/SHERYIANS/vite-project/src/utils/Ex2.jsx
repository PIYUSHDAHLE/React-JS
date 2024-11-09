import React from 'react'

const Ex2 = (props) => {
  return (
    <div>
        <h1 className='text-red-500 font-bold'>This is Exapmle 2 {props.user}</h1>

      {/* Flow (App3.jsx) --> go to (Ex.jsx) --> then goto (Ex2.jsx) */}
    </div>
  )
}

export default Ex2