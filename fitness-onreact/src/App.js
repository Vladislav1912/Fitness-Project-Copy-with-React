import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./assets/css/homepage.css"; 

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ClassItem from "./components/ClassItem";
import Transformations from "./components/Transformations";
import SpaCenter from "./components/SpaCenter";
import Footer from "./components/Footer";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<ClassItem />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/spa-center" element={<SpaCenter />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

