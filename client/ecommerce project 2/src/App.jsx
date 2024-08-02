import "./App.css";
import NavBar from "./components/NavBar.jsx";
import SignUp from "./components/SingnUp.jsx";
import Login from "./components/Login.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import RelatedItem from "./components/RelatedItem.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import AdminDash from "./components/AdminDash.jsx";
import Category from "./components/Category.jsx";
import HomeDashboard from "./components/HomeDashboard.jsx";
import Products from "./components/Products.jsx";
import Users from "./components/Users.jsx";
import FlashSales from "./components/FlashSales.jsx";
import Exclusive from "./components/Exclusive.jsx";
import ProductFlashSales from "./components/ProductFlashSales.jsx";
import ClientHome from "./components/ClientHome.jsx";
import Contact from './components/Contact.jsx';
import Category from './components/Categories.jsx'
import NotFound from "./components/NotFound.jsx";
import Cart from "./components/Cart.jsx";
import NewArrival from "./components/NewArrival.jsx";
function App() {
  return (
    <div>
      {/* <div
        className="navbar"
        style={{
          position: "-webkit-sticky",
          position: "sticky",
          top: "0px",
          width: "100%",
        }}
      >
       
      </div> */}
      <NavBar />

      <Router>
        <Routes>
          <Route path="/">
            <Route path="/admin" element={<AdminDash />} />
            <Route path="/users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="/category" element={<Category />} />
            <Route path="/" element={<Home />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<ProductDetails />} />
            <Route path="/related" element={<RelatedItem />} />
            <Route path="/flash" element={<FlashSales />} />
            <Route path="/exclusive" element={<Exclusive />} />
            <Route path="/clienthome" element={<ClientHome />} />
            <Route path="/contact" element={<Contact />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/new" element={<NewArrival />} />
          <Route path="/myAccount" element={<MyAccount />} />

            <Route path="/productsales" element={<ProductFlashSales />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
