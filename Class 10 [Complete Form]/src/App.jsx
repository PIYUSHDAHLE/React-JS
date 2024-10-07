import React from 'react'
import { useForm } from 'react-hook-form';

 const App = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const submitData = (data) =>{
    console.log(data);
    // send the data on the database/api
  }

  console.log(errors);
  
  return (
    <>
   <div id='box'>

    <h1>Registration Form</h1>
    <form onSubmit={handleSubmit(submitData)}>
      <input class='inputs' type="text" placeholder='Enter Username' {...register('username', {required: "UserName is Required", minLength: 6, maxLength: 20 })}/> 
      {errors.username?.type == "required" && ( <p> {errors.username.message} </p>)}
      {errors.username?.type == "minLength" && ( <p> Username must be atleast 6 character long </p>)}
      {errors.username?.type == "maxLength" && ( <p> Max length 20 character </p>)}
    
      <input class='inputs' type="email" placeholder='Enter Email ID' {...register('email', {required: "Email is Required"})}/> 
      {errors.email?.type == "required" && ( <p> {errors.email.message} </p>)}
    
      <input class='inputs' type="tel" placeholder='Enter Phone Number' {...register('tel', {required: "Phone Number is Required ", minLength: 10})}/> 
      {errors.tel?.type == "required" && ( <p> {errors.tel.message} </p>)}
      {errors.tel?.type == "minLength" && ( <p>Phone Number must be 10 Digits</p>)}
    
      <input class='inputs' type="password" placeholder='Create Password' {...register('password', {required: "Password is Required", minLength: 8, maxLength: 20 })}/> 
      {errors.password?.type == "required" && ( <p> {errors.password.message} </p>)}
      {errors.password?.type == "minLength" && ( <p> value must be atleast 8 character long </p>)}
      {errors.password?.type == "maxLength" && ( <p> Max length 20 character </p>)}
       
      <br />
      <input className='btn' type="submit" value="Submit" />
    </form>

   </div>
    </>
  )
}


export default App;