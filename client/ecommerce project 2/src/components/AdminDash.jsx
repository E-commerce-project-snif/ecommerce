import React from 'react'
import '../components/AdminDash.css'
import { useNavigate } from 'react-router-dom';
// import  Chartt  from './Chartt.jsx';


function AdminDash() {
  
const navigate = useNavigate();
const navigateproduct=useNavigate();
    return (
      
      <div className="container" >
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#" onClick={()=>{navigate("/admin")}}>Dashboard</a></li>
            <li><a href="#" onClick={()=>{navigate("/users")}}>Users</a></li>
            <li><a href="#" onClick={()=>{navigateproduct("/products")}}>Products</a></li>
            <li><a href="#">Category</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </aside>
      <main>
        <section className="hero">
          <h1>Welcome to the Admin Dashboard</h1>
          <p>This is the home page of the admin dashboard.</p>
        </section>
        <section className="stats">
          <h2>Statistics</h2>
          <ul>
            <li>
              <span className="label">Users:</span>
              <span className="value">100</span>
            </li>
            <li>
              <span className="label">Posts:</span>
              <span className="value">500</span>
            </li>
            <li>
              <span className="label">Sales:</span>
              <span className="value">20000$</span>
            </li>
          </ul>

        </section>
        
      </main>
      <div className='graph'>
         <img src="https://www.hubspot.com/hs-fs/hubfs/how-many-visitors-should-your-site-get_6.webp?width=650&height=402&name=how-many-visitors-should-your-site-get_6.webp" alt="stats" />
      
      </div>
      <div>
        
      </div>
    </div>
    
    
  );
}

export default AdminDash;