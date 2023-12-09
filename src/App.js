import React, { useState } from 'react';
import Form from './Form';
import MainPage from './MainPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <Form setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;