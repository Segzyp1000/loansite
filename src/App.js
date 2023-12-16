import React, { useState } from 'react';
import Form from './Form';
import MainPage from './MainPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (data) => {
    setIsLoading(true); // Set loading to true while transitioning

    // Simulating API call or any asynchronous operation
    setTimeout(() => {
      setIsLoggedIn(data);
      setIsLoading(false); // Set loading to false after transition
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <div className="App">
      {!isLoggedIn && !isLoading && <Form setIsLoggedIn={handleLogin} />}
      {isLoggedIn && !isLoading && <MainPage />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
