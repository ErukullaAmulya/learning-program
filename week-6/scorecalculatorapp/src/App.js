import React from 'react';
import CalculateScore from './Components/calculateScore';
import './Stylesheets/mystyle.css';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Steeve"
        School="DNV Public School"
        Total={284}
        Goal={3}
      />
    </div>
  );
}

export default App;
