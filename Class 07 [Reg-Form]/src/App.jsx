// import React from 'react'
import { useState } from 'react'

const App = () => {
  
const [gender,setGender] = useState("others");
const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [city,setCity] = useState("");
const [valid,Setvalid] = useState(false);

const SubmitHandler = (e) => {
  e.preventDefault(); // page refresh nahi karta hai
console.log({username, gender, email,city,valid});
  // submit form to  react server
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
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      />
    

<br />
<input type="text" 
 className='mb-5 rounded-md text-2xl boder p-2'
 placeholder='email'
 name='email'
 onChange={(e) => setEmail(e.target.value)}
 value={email}
/>

<br />
<label >
  <input type="radio" name="gender" onChange={(e) => setGender(e.target.value)} checked={gender == "Male" ? true : false} defaultValue="Male" id="0" /> Male <br />
  <input type="radio" name="gender" onChange={(e) => setGender(e.target.value)} checked={gender == "Female" ? true : false} defaultValue="Female" id="1" /> Female <br />
  <input type="radio" name="gender" onChange={(e) => setGender(e.target.value)} checked={gender == "Others" ? true : false} defaultValue="Others" id="2" /> Other <br />
</label>

<br />
<select name='city' value={city} onChange={(e)=>setCity(e.target.value)}>
  <option value='city'>City</option>
  <option value='Surat'>Surat</option>
  <option value='Jaipur'>Jaipur</option>
  <option value='Lucknow'>Lucknow</option>
  <option value='Bhopal'>Bhopal</option>
  <option value='Indore'>Indore</option>
</select>
<br />
<input type="checkbox" checked={valid ? true:false} onChange={(e)=>Setvalid(e.target.checked)} />

<br />

    <button className='w-[50] p-2 text-white text-center rounded bg-blue-500 hover:bg-yellow-800'>SUBMIT</button>
    </form>
  </div>
  </>  
  )
}

export default App