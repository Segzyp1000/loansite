
import React, { useState } from 'react';
import Logo from './Logo.svg'; 
import Formic from './display/Formic.svg'; 
import './Form.css';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Form = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.match(emailPattern) && password.length === 10) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password. Please check your credentials.');
    }
  };

  return (
    <div className='LoginPage'>
      <div className='slider-page'>
        <img src={Logo} alt='myLogo' className='logo'/>
        <img src={Formic} alt='formulated img' className='image' /> 
      </div>
      <div className='Form-G'>
        <h4>Welcome!</h4>
        <p>Enter details to login</p>
        
        <form onSubmit={handleLogin}>
          <input
            type='text'
            id='email'
            placeholder='Email'
            value={email}
            className='user'
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='password-input'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Password'
              value={password}
              className='user'
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setPassword(e.target.value);
                }
              }}
              maxLength={10}
            />
            <span
              className='password-icon'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>
          
          <div className='lead'>
            <p>FORGOT PASSWORD?</p>
          </div>
          <button type='submit' id='submit'>
            Login In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
