import { useState } from 'react';
import { useForm } from 'react-hook-form';
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
   let r = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
    let res=await r.text()
  //  console.log(data,res)
  }
  return (
    <>
      {isSubmitting &&
        <div className="loading">Loading....</div>}
      <div className="container" >
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input {...register("username", {
            required: "Username is required",
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 8, message: "Max length is 8" }
          })} />
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