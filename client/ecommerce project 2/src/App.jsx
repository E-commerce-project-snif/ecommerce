// import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from "react";
 
import './App.css'





function App() {
  

  return (
  <div className="app"         >
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  />


        </Routes>
      </div>
    <Footer/>
   </div>
  )
}

export default App
