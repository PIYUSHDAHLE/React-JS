import React from 'react'
import { useForm } from 'react-hook-form';

 const App = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const SubmitHandler = (data) =>{
    console.log(data);
    // send the data on the database/api
  }

  console.log(errors);
  

  return (
    <>
   
    <h1>Register Form</h1>
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input type="text" placeholder='username' {...register('username', {required: "UserName is Required", minLength: 4, maxLength: 16 })}/> 
      {/* <input type="password" placeholder='**' {...register('password')}/>  */}

      {errors.username?.type == "required" && ( <p> {errors.username.message} </p>)}
      {errors.username?.type == "minLength" && ( <p> Username must be atleast 3 character long </p>)}
      {errors.username?.type == "maxLength" && ( <p> Max length 15 character </p>)}

      <br />
      <button>Click Here</button>
    </form>

    </>
  )
}


export default App;