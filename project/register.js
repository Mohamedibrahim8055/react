
import React, { useState } from 'react';
import './Register.css';
function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Service Booking</h2>
        <form >
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="input-group">
            <label>Enter delivery Time</label>
            <input
              type="Time"
              required
            />
          </div>
          <div className="input-group">
            <label>Enter delivery date</label>
            <input
              type="Date"
              required
            />
          </div>
          <div className="input-group">
            <label>Select Vehicle Type</label>
            <select   
              required
            >
              <option type="radio">Select vehicle type</option>
              <option >Car</option>
              <option >Bike</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <label type="number">Mobile No</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="input-group">
            <label>Address</label>
            <textarea
              
              placeholder="Enter your address"
              required
            />
          </div>
          <button >Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
