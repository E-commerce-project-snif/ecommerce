import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import SignUp from "./components/SingnUp.jsx";
import Login from "./components/Login.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import RelatedItem from "./components/RelatedItem.jsx";
import FlashSales from "./components/FlashSales.jsx";

function App() {
  return (
    <div>
      <div
        className="navbar"
        style={{
          position: "-webkit-sticky",
          position: "sticky",
          top: "0px",
          width: "100%",
        }}
      >
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/related" element={<RelatedItem />} />
        <Route path="/flash" element={<FlashSales />} />
      </Routes>
    </div>
  );
}

export default App;
