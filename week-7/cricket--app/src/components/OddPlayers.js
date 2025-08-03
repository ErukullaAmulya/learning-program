import React from 'react';

const OddPlayers = ({ players }) => {
  const odd = players.filter((_, i) => i % 2 !== 0);
  return (
    <ul>
      {odd.map((player, idx) => (
        <li key={idx}>{player}</li>
      ))}
    </ul>
  );
};

export default OddPlayers;
