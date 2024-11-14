
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="logo">Service Booking</div>
          <nav>
            <ul>
              <li><Link to='/Home'>Home</Link></li>
              <li><Link to='/Book-Service'>Book Service</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
              <li><Link to='/Register'>Vehicle Type</Link></li>
              <li><Link to='/Login'>Login</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
            </ul>
          </nav>
        </div>
      </header>

  

      
     
    </>
  );
}

export default Header;
