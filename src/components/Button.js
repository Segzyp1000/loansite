import React from 'react';


const Button = ({ handlePrevious, handleNext }) => {
  return (
    <div >
      <button  onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Button;
