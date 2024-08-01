// import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import { useState } from "react";
 


import './App.css'
import AdminDash from './components/AdminDash.jsx';
import Category from './components/Category.jsx'
  
import Products from './components/Products.jsx';
import Users from './components/Users.jsx';
import MyAccount from "./components/MyAccount.jsx";








function App() {
  

  return (
    <div>
     <Router>  
      <Routes>
        <Route path="/" >
          <Route path='/admin'     element={<AdminDash />} />
          <Route path="/users"     element={<Users />} />
          <Route path="/products"  element={<Products />} />
          <Route path="/category"  element={<Category />} />
          <Route path="/myAccount" element={<MyAccount />} />
        </Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
