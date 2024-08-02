
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
import Contact from './components/Contact.jsx';
import NotFound from "./components/NotFound.jsx";
import Cart from "./components/Cart.jsx";
import NewArrival from "./components/NewArrival.jsx";

import MyAccount from "./components/MyAccount.jsx";

function App() {
  return (
    <div>

      <div
        className="navbar"
        // style={{
        //   position: "-webkit-sticky",
        //   position: "sticky",
        //   top: "0px",
        //   width: "100%",
        // }}
      >
        <NavBar />
      </div>

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/new" element={<NewArrival />} />
          <Route path="/myAccount" element={<MyAccount />} />
        </Route>
      </Routes>
      </Router>
    </div>
  );

}
export default App