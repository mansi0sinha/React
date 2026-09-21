import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar';
import { decrement, increment } from "./redux/counter/counterSlice";
function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
   <>
   <Navbar/>
   <div>
    <button onClick={() => dispatch(decrement())}>-</button>
    Currently count is {count}
    <button   onClick={() => dispatch(increment())}>+</button>
   </div>
   </>

  )
}


export default App;