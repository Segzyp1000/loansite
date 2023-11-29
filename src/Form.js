import React, { useState } from 'react';
import Logo from './Logo.svg'; 
import Formic from './display/Formic.svg'; 
import './Form.css'

const Form = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (email.match(emailPattern) && password.length === 4) {
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
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            className='user'
            onChange={(e) => {
              if (e.target.value.length <= 4) {
                setPassword(e.target.value);
              }
            }}
            maxLength={4}
  
          />
          <p>Forget password?</p>
          <button type='submit' id='submit'>
            Login In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;