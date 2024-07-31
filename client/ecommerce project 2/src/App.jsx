// import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from "react";
 
import './App.css'
import AdminDash from './components/AdminDash.jsx';
import Category from './components/Category.jsx'
import HomeDashboard from './components/HomeDashboard.jsx';
import Products from './components/Products.jsx';
import Users from './components/Users.jsx';








function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path='/admin' element={<AdminDash />} />
          <Route path="/users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
