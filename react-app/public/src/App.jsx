import { useState } from 'react';
import { useForm } from 'react-hook-form';
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();
  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000);
    })
  }
  const onSubmit = async (data) =>{
    await delay(2);//simulating network delay 
    console.log(data)}
  return (
    <>
    {isSubmitting&& 
    <div className="loading">Loading....</div>}
      <div className="container" >
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input {...register("username", { 
              required: "Username is required", 
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" } 
            })}  />
          {errors.username && errors.username.message}
          <br />
          <input {...register("password")} type="password" placeholder='password' />
          <br />
          <input disabled={isSubmitting} type='submit' value="submit" />
        </form>
      </div>
    </>

  )
}


export default App;