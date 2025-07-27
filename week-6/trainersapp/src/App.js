// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import TrainersList from "./Components/TrainersList";
import TrainerDetails from "./Components/TrainerDetails";
import { trainerData } from "./TrainersMock";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/trainers">Trainers</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList data={trainerData} />} />
          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
