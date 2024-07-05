import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Graph from "./pages/Graph";
import Values from "./pages/Values";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/values" element={<Values />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
