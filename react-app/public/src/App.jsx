import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './components/Navbar';
function App() {

  const [count, setCount] = useState(0)
  return (
   <>
   <Navbar/>
   <button onClick={()=>setCount((count)=>count+1)}>Click is {count}</button>
   </>

  )
}


export default App;