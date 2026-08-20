import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

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
        <div className="value">{count}</div>
        <button onClick={() => { 
          setCount(count + 1);
          setColor(color + 1); // Safely update color here on click instead
        }}>
          Click Me
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
