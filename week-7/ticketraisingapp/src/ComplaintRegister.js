import React, { useState } from 'react';

function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !complaint) {
      alert('Please fill all fields!');
      return;
    }

    const txnId = Math.floor(Math.random() * 100); // Transaction ID between 0–99

    alert(`Thanks ${name}\nYour Complaint was Submitted.\nTransaction ID is: ${txnId}`);

    // Reset fields
    setName('');
    setComplaint('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1 style={{ color: 'red', fontWeight: 'bold' }}>
        Register your complaints here!!!
      </h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Complaint: </label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
