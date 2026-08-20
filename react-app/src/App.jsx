import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import "./App.css";
function App() {

  return (
    <>

      <Navbar />
      <div className="card-container">
        <Card title="FirstTitle" />
        <Card />
        <Card title="Third" />
      </div>  <Footer />

    </>
  )
}

export default App
