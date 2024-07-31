import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div className="navbar">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
