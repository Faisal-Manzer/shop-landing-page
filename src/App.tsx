import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Department from "./Department";
import Service from "./Service";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Service />} />
        </Route>
        <Route path="/department">
          <Route index element={<Department />} />
        </Route>
          
        
      </Routes>
    </Router>
  );
}

export default App;
