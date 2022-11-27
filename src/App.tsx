import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Shop from "./shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
