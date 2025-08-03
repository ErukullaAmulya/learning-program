import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  const players = [
    { name: 'Mr. Jack', score: 50 },
    { name: 'Mr. Michael', score: 70 },
    { name: 'Mr. John', score: 40 },
    { name: 'Mr. Ann', score: 61 },
    { name: 'Mr. Elisabeth', score: 61 },
    { name: 'Mr. Sachin', score: 95 },
    { name: 'Mr. Dhoni', score: 100 },
    { name: 'Mr. Virat', score: 84 },
    { name: 'Mr. Jadeja', score: 64 },
    { name: 'Mr. Raina', score: 75 },
    { name: 'Mr. Rohit', score: 80 }
  ];

  const IndianTeam = [
    'First : Sachin1',
    'Second : Dhoni2',
    'Third : Virat3',
    'Fourth : Rohit4',
    'Fifth : Yuvaraj5',
    'Sixth : Raina6'
  ];

  const mergedIndianPlayers = [
    'Mr. First Player',
    'Mr. Second Player',
    'Mr. Third Player',
    'Mr. Fourth Player',
    'Mr. Fifth Player',
    'Mr. Sixth Player'
  ];

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>
        Toggle View (Currently: {flag ? 'Players' : 'Indian Team'})
      </button>
      <hr />
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players} />
        </div>
      ) : (
        <div>
          <div>
            <h1>Odd Players</h1>
            <OddPlayers players={IndianTeam} />
            <hr />
            <h1>Even Players</h1>
            <EvenPlayers players={IndianTeam} />
          </div>
          <hr />
          <div>
            <h1>List of Indian Players Merged:</h1>
            <ListofIndianPlayers IndianPlayers={mergedIndianPlayers} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
