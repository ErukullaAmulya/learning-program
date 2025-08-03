import React from 'react';
import './App.css'; // For textRed and textGreen classes

const App = () => {
  const element = "Office Space";

  const sr = "https://www.dbsindia.com/images/Chennai-Coworking-space.png";

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Determine class based on rent
  let rentColor = ItemName.Rent <= 60000 ? "textRed" : "textGreen";

  const jsxatt = (
    <img
      src={sr}
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  return (
    <div>
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={rentColor}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
};

export default App;
