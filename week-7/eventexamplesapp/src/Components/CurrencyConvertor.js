import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);
  const conversionRate = 0.011; // approx 1 INR = 0.011 EUR

  const handleSubmit = () => {
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      setEuro((value * conversionRate).toFixed(2));
    } else {
      alert("Please enter a valid amount in rupees.");
    }
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro !== null && <p>EUR: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
