// import React from 'react'
import { useState } from 'react'

// const App = () => {
  
// const [title,settitle] = useState("Hello Boss")
   
// const ClickHandler = () => {
//       settitle("hiiiiiiiii world");
//     }
  
// console.log(title);

//     return (
//     <>
//     <div className='w-[80%] flex justify-center items-center mx-auto mt-5 p-5 rounded'>
//  <h1 className='font-black text-5xl '>{title}</h1>
//       <button
//         onClick={ClickHandler}
//         className='w-[50] p-2 text-white text-center rounded bg-blue-500 hover:bg-yellow-800'> Submit </button>
//     </div>
//     </>
//     )
// }


const App = () => {
  
const SubmitHandler = (e) => {
console.log("form submit")
e.preventDefault(); // page refresh nahi karta hai
console.log(e.target.username.value)
}
  
  return (
  <>
  <div className='flex justify-center items-center flex-col gap-4'>
    <h1 className='font-black text-5xl'>Register Form</h1>
    <form onSubmit={SubmitHandler}>
      <input type="text"
      className='mb-5 rounded-md text-2xl boder p-2'
      placeholder='username'
      name='username'
      />
    </form>

    <button className='w-[50] p-2 text-white text-center rounded bg-blue-500 hover:bg-yellow-800'>SUBMIT</button>
  </div>
  </>  
  )
}

export default App