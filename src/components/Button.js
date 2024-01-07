import React from 'react';
import'./Button.css';


const Button = ({ handlePrevious, handleNext }) => {
  
  return (
    <div className='footer-button' >
      <button  onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  
  );
};

export default Button;
