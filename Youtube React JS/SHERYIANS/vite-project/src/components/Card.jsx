import React from 'react'

const Card = (props) => {
    // console.log(props); //{naam: 'Piyush Dahle'}
    // console.log(props.naam);//Piyush Dahle
  return (
    <>
    {/* <div className='flex justify-center items-center font-bold text-2xl text-blue-100 p-10 bg-red-400'>Username is {props.naam}</div> */}
     
    <div className='flex justify-center items-center p-3 bg-white shadow-md rounded-md'>
        <div className='flex flex-col bg-pink-200 p-[3rem] items-center'>
          <div>
            <img className='flex items-center object-top justify-center w-40 h-40 bg-gray-200 rounded-full object-cover' src={props.url} />
          </div>
          <div className='mt-4 flex justify-center items-center flex-col gap-1'>
            <h2 className='text-xl font-semibold text-gray-800'>{props.name}</h2>
            <p className='text-sm text-gray-600'>City : {props.city}</p>

            <p className='text-sm text-gray-600'>Age : {props.age} years</p>
            
            <p className='text-sm text-gray-600'>Gender : {props.gender}</p>
          </div>
  
        </div>
      </div>

    </>
  )
}

export default Card