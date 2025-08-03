import React, { useState } from 'react';
import FlightList from './components/FlightList';
import BookFlight from './components/BookFlight';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <h2>Welcome back</h2>
          <BookFlight />
          <LogoutButton onClick={handleLogout} />
        </>
      ) : (
        <>
          <h2>Please sign up.</h2>
          <FlightList />
          <LoginButton onClick={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
