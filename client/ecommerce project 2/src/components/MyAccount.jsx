import React from 'react';
import './MyAccount.css';  

const MyAccount = () => {
  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebarr">
        <div className="logo">
          <a href="/" className="logo-text">Home / My Account</a>
        </div>
          <h3>Manage My Account</h3>
          
        <nav className="nav">
          <ul style={{marginTop:"25px"}}>
            <li  href="#" className="active">My Profile</li>
            <li  style={{marginLeft:"20px"}} href="#">Address Book</li>
            <li  style={{marginLeft:"20px"}}  href="#">My Payment Options</li>
           
           
            <h3 style={{marginTop:"20px"}}  href="#"  >My Orders  </h3>
            <li style={{marginTop:"20px",marginLeft:"20px"}  } href="#">My Returns</li>
            <li style={{marginLeft:"20px"}} href="#">My Cancellations</li>
            <h3 href="#">My Wishlist</h3>   
          </ul>
        </nav>
      </aside>

      
      <main className="main-content">
        


        <div className="welcome">
          <span>Welcome! <a href="#" className="user-name">Md Rimel</a></span>
        </div>


        <h4 className="title">Edit Your Profile</h4>
        <form className="form">
          <div className="form-group">
            <div className="form-control">
              <label>First Name</label>
              <input type="text" value="Md" disabled />
            </div>

            <div className="form-control">
              <label>Last Name</label>
              <input type="text" value="Rimel" disabled />
            </div>
          </div>

         <div  className="form-group2"   > 
          <div className="form-control">
            <label>Email</label>
            <input type="email" value="rimel1111@gmail.com" disabled />
          </div>

          <div className="form-control">
            <label>Address</label>
            <input type="text" value="Kingston, 5236, United States" disabled />
          </div>
         </div>



            <div>
            <h3>Password Changes</h3>
            </div>
          <div className="password-section">
            
            <div className="form-group3">
              <div className="form-control">
               
                <input style={{backgroundColor:'#f5f5f5'}} type="password" placeholder='Current Password'  />
              </div>
              <div className="form-control" style={{poosition : 'absolute', marginTop:'6px'}}>
               
                <input style={{backgroundColor:'#f5f5f5'}} type="password" placeholder='New Password' />
              </div>
              <div className="form-control">
               
                <input style={{backgroundColor:'#f5f5f5'}} type="password" placeholder='Confirm New Password' />
              </div>
            </div>
          </div>
          

          <div className="form-actions">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="save-button">Save Changes</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MyAccount;
