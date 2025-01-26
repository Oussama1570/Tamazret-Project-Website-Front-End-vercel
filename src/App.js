import '../src/Styles/StylesApp.css';
import Home from "../src/Pages/Home.js";
import Tourism from './Pages/Tourism.js';
import Houses from './Pages/Houses.js';
import Food from './Pages/Food.js';
import About from "../src/Pages/About.js";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './Pages/Gallery.js';
import '../src/Styles/StylesApp.css'



function App() {
  

  return (
    <div className="App" >

       {/** Navbar **/}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Tourism" element={<Tourism />} />
        <Route path="/Houses" element={<Houses />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery/>} />
        
      </Routes>

      { /** Footer **/ }

      <Footer />
    </div>
  );
}

export default App;