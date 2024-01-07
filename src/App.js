import React, { useState } from 'react';
import Form from './Form';
import MainPage from './MainPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn && <Form setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <MainPage />}
    </div>
  );
}

export default App;
