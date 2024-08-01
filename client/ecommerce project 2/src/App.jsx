import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AdminDash from './components/AdminDash.jsx';
import Category from './components/Category.jsx'
import HomeDashboard from './components/HomeDashboard.jsx';
import Products from './components/Products.jsx';
import Users from './components/Users.jsx';
import Contact from './components/Contact.jsx';




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
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
