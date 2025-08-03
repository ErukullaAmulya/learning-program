import React from 'react';

const players = [
  { name: 'Player 1', score: 85 },
  { name: 'Player 2', score: 67 },
  { name: 'Player 3', score: 91 },
  { name: 'Player 4', score: 45 },
  { name: 'Player 5', score: 73 },
  { name: 'Player 6', score: 60 },
  { name: 'Player 7', score: 88 },
  { name: 'Player 8', score: 34 },
  { name: 'Player 9', score: 99 },
  { name: 'Player 10', score: 56 },
  { name: 'Player 11', score: 77 }
];

const ListofPlayers = () => {
  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>List of Players with Score ≥ 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
