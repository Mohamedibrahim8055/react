import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('http://localhost:5000/users')
      .then(response => {
        const user = response.data.find(user => user.username === username && user.password === password);
        if (user) {
          console.log('Login successful');
          navigate('/Home');
        } else {
          alert("Invalid credentials");
        }
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
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
          <button className='login' style={{color:"black"}}>Login</button>
        </form>
        <a href='#' className="forgot-password">Forgot your password?</a>
      </div>
    </div>
  );
}

export default Login;
