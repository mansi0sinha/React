import Card from './components/card';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [form ,setform]=useState({email:"",phone:""})
  const handleClick = () => {
    alert("Hey i am clicked")
  }
const handleMouseOver=()=>{
   alert("Hey i am mouse over")
}
const handleChange=(e)=>{
  setform({...form, [e.target.name]:e.target.value})
}
  return (
    <>
      <div className="button"><button onClick={handleClick}>Click ME</button></div>
      <div className="red" onMouseOver={handleMouseOver}>I am a red</div>
      <input type="text" value={form.name} name="email" onChange={handleChange}/>
      <input type="text" value={form.phone} name="phone" onChange={handleChange}/>
    </>

  )
}


export default App;