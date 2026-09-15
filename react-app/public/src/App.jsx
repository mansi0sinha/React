import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';
import { useEffect, useState, useRef } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const a = useRef(0);
  const 
  //Runs when page is rendered
  useEffect(() => {
    console.log(a.current = a.current + 1);
  });
  // Fix: Empty dependency array ensures this runs ONLY once on mount
  useEffect(() => {
    alert("Hey welcome to my page");
  }, []);

  // Alert when count changes (ignoring the initial mount alert)
  useEffect(() => {
    if (count > 0) {
      alert("Count was clicked");
    }
  }, [count]);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {/* Dynamically calculating color string if needed */}
        <Card title="FirstTitle" color={`cyan-${color}`} />
        <Card color="cyan" />
        <Card title="Third" color="cyan" />
      </div>
      <div>
        <button onClick={() => {
         
          setshowbtn(!showbtn);

        }}>
          Toggle show btn
        </button>
      </div>
      <Footer />
      {showbtn?<button>show btn is true</button>:<button>show btn is false</button>}
    </>
  );
}

export default App;
