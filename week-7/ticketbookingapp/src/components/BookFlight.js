import React from 'react';

const BookFlight = () => {
  return (
    <div>
      <h2>Book a Flight</h2>
      <form>
        <label>Flight ID: <input type="text" /></label><br />
        <label>Passenger Name: <input type="text" /></label><br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookFlight;
