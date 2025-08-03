import React from 'react';

const Scorebelow70 = ({ players }) => {
  const filtered = players.filter(player => player.score < 70);
  return (
    <ul>
      {filtered.map((p, idx) => <li key={idx}>{p.name} - {p.score}</li>)}
    </ul>
  );
};

export default Scorebelow70;
