import React, { useState } from 'react';
import Form from './Form';
import MainPage from './MainPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogin = (data) => {
    setIsLoading(true);

    // Simulating API call or any asynchronous operation
    setTimeout(() => {
      // Simulate bad network by setting a condition where the network is down
      const isNetworkDown = Math.random() < 0.5; // 50% chance of network failure

      if (isNetworkDown) {
        setIsError(true); // Set error state to true for network failure
        setIsLoading(false);
      } else {
        setIsLoggedIn(true);
        setIsLoading(false);
      }
    }, 8000); // Simulating a 2-second delay
  };

  return (
    <div className="App">
      {!isLoggedIn && !isLoading && !isError && (
        <Form setIsLoggedIn={handleLogin} />
      )}
      {isLoggedIn && !isLoading && !isError && <MainPage />}
      {isLoading && !isError && <p>Loading...</p>}
      {isError && (
        <div className='err'>
          <p>Page not found due to bad network</p>
          <a href='https://segzyp1000.github.io/loansite/'>Return to the main Page</a>
        </div>
      )}
      
    </div>
  );
}

export default App;
