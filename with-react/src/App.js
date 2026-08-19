import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Navbar logoText="Code"/>
      <div className='value'> {value}
      </div>
      <button onClick={()=>{setValue(value+1)}}>Click Me</button>
      </div>
  );
}

export default App;
