import React from 'react';

const FlightList = () => {
  const flights = [
    { id: 1, origin: 'Hyderabad', destination: 'Delhi', time: '10:00 AM' },
    { id: 2, origin: 'Mumbai', destination: 'Chennai', time: '1:00 PM' },
  ];

  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.origin} ➡ {flight.destination} at {flight.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;