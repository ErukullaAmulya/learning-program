import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Rohit', 'Kohli', 'Surya'];
  const RanjiTrophy = ['Pujara', 'Rahane', 'Jadeja'];
  const allPlayers = [...T20players, ...RanjiTrophy];

  const [oddPlayers, evenPlayers] = allPlayers.reduce(([odd, even], player, index) => {
    if (index % 2 === 0) even.push(player);
    else odd.push(player);
    return [odd, even];
  }, [[], []]);

  return (
    <div>
      <h2>Indian Players</h2>
      <h3>Even Team</h3>
      <ul>
        {evenPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
      <h3>Odd Team</h3>
      <ul>
        {oddPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
