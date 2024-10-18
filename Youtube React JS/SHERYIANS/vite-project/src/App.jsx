import React, { useState } from 'react'


//Name changer from inital to final
// const App = () => {

// let [user, setuser] = useState('Jai Shree Ram')

// const changeWord = ()=>{
//    user = 'Jai Mata Di'
//    setuser(user)
//    console.log('chal gaya finally');
// }

//   return (
//     //   <div className='flex items-center flex-col justify-center bg-blue-400 w-full h-[100vh]'>
//     // <h1 className='text-3xl'>Sare Bolo "{user}"</h1>
//     // <button className='bg-red-500 mt-5 py-3 px-2 rounded-md text-1xl text-white ' onClick={changeWord}>Change Name</button>
//     // </div>
//   )
// }


//INCREMENT AND DECREMENT OF NUMBERS using hooks (usestate())
// const App = () => {

//   let [num, setNum] = useState(0)

//   const Increment = ()=>{
//     setNum(num+1)
//     console.log('ADD HO GAYA');
//   }
//   const Decrement = ()=>{
//     if(num>0){
//       setNum(num-1)
//       console.log('KAM HO GAYA');
//     }else{
//       console.log('Number is 0, decrement not possible'); 
//     }
//   }

//   return (
//         <div className='flex items-center flex-col justify-center bg-blue-400 w-full h-[100vh]'>
      
//         <h1 className='text-5xl'>Number is {num}</h1>

//     <button className='bg-green-500 mt-5 py-3 px-2 rounded-md text-1xl text-white ' onClick={Increment}>Increment</button>

//     <button className='bg-red-500 mt-5 py-3 px-2 rounded-md text-1xl text-white ' onClick={Decrement}>Decrement</button>

//     <button className='bg-blue-500 mt-5 py-3 px-2 rounded-md text-1xl text-white ' onClick={()=>setNum(num+10)}>Increment</button>

//     <button className='bg-gray-600 mt-5 py-3 px-2 rounded-md text-1xl text-white ' onClick={()=>setNum(num-10)}>Decrement</button>
//     </div>
//   )
// }


//Create a form using hooks and two way binding

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//   })

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(formData)
//     setFormData({ name: '', email: '', phoneNumber: '' })
//   }

//   return (
//     <div className='flex items-center justify-center h-screen'>
//       <form className='w-full max-w-md p-8 bg-pink-200 rounded-lg shadow-md' onSubmit={handleSubmit}>
//         <h2 className='text-2xl font-bold text-center'>Form</h2>

//         <div className='mt-6'>
//           <label className='block text-sm font-medium text-gray-700'>Name</label>
//           <input
//             type='text'
//             name='name'
//             value={formData.name}
//             onChange={handleInputChange}
//             className='w-full px-4 py-3 mt-1 text-sm leading-tight text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
//           />
//         </div>

//         <div className='mt-6'>
//           <label className='block text-sm font-medium text-gray-700'>Email</label>
//           <input
//             type='email'
//             name='email'
//             value={formData.email}
//             onChange={handleInputChange}
//             className='w-full px-4 py-3 mt-1 text-sm leading-tight text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
//           />
//         </div>

//         <div className='mt-6'>
//           <label className='block text-sm font-medium text-gray-700'>Phone Number</label>
//           <input
//             type='tel'
//             name='phoneNumber'
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             className='w-full px-4 py-3 mt-1 text-sm leading-tight text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
//           />
//         </div>

//         <div className='mt-8'>
//           <button
//             type='submit'
//             className='w-full px-4 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:border-blue-700 active:bg-blue-700'
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }


export default App