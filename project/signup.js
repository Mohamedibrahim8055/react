import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password };

    axios.post('http://localhost:5000/users', user)
      .then((response) => {
        console.log('Signup successful', response.data);
        navigate('/Login'); // Navigate to the login page
      })
      .catch((error) => {
        console.error('There was an error signing up!', error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
            style={{color:"black"}}
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
            style={{color:"black"}}
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
            style={{color:"black"}}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='login' style={{color:"black"}}>Signup</button>
        </form>
        <a href='#' className="forgot-password">Forgot your password?</a>
      </div>
    </div>
  );
}

export default Signup;
