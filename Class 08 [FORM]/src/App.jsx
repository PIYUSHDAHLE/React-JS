// import React from 'react'
import { useState } from 'react'

const App = () => {
  
  // [variable,function]
const [gender,setGender] = useState("others");
const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [city,setCity] = useState("");
const [valid,Setvalid] = useState(false);

const SubmitHandler = (e) => {
  e.preventDefault(); // page refresh nahi karta hai
console.log({username, gender, email,city,valid});
  // submit form to  react server
  setGender('');
  setUsername('');
  setEmail('');
  setCity('');
  Setvalid(false); // validation false kardiye
}

  return (
  <>
  <div id='box'>
    <h1 className='font-black text-2xl'>Register Form</h1>
    <form onSubmit={SubmitHandler}>
      <input type="text"
      placeholder='username'
      name='username'
      class='inputs'
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      />
    

<br />
<input type="text" 
 placeholder='email'
 name='email'
 class='inputs'
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
<span class='flex gap-1'>
<input type="checkbox" checked={valid ? true:false} onChange={(e)=>Setvalid(e.target.checked)} /> <p>Please check that the information you filled is correct.</p>
</span>

<br />

    <button>Submit</button>
    </form>
  </div>
  </>  
  )
}

export default App