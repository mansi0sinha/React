import { useEffect, useState,useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar';
// import Navbar2 from './components/Navbar2';
// import Home from './Home';
// import Login from './Login';
// import About from './About';
// import User from './User';
import { counterContext } from '../../context/context';
function App() {
  //  const router=createBrowserRouter([
  //         {
  //           path:"/",
  //           element:<><Navbar2/><Home/></>
  //         },
  //         {path:"/login",
  //           element:<><Navbar2/><Login/></>
  //         },
  //         {
  //           path:"/about",
  //           element:<> <Navbar2/><About/></>
  //         },
  //            {
  //           path:"/user/:username",
  //           element:<> <Navbar2/><User/></>
  //         }
  //     ])
  const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
      index: i,
      isMagical: i === 29_000_000

    }
  })
  const [numbers, setNumbers] = useState(nums)

 const magical=useMemo(() => numbers.find(item => item.isMagical === true), [])
  const [count, setcount] = useState(0)
  return (
    <>
      <span>Magical number is {magical.index}</span>
      {/* <counterContext.Provider value={{count,setcount}}>
        <Navbar />
      </counterContext.Provider >
      <button onClick={() => setcount(count + 1)}>
        Count is: {count}
      </button>  */}
      {/* <RouterProvider router={router}/> */}
    </>

  )
}


export default App;