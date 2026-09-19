import { useEffect, useState } from 'react';
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

  const [count, setcount] = useState(0)
  return (
    <>
      <counterContext.Provider value={{count,setcount}}>
        <Navbar />
      </counterContext.Provider >
      <button onClick={() => setcount(count + 1)}>
        Count is: {count}
      </button>
      {/* <RouterProvider router={router}/> */}
    </>

  )
}


export default App;