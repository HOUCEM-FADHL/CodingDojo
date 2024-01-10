import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Value from "./Components/Value";

function App() {
  return (
    <div className="App">
      {/* Setting up BrowserRouter to enable routing */}
      <BrowserRouter>
        <Routes>
          {/* Route for the Home component */}
          <Route path="/home" element={<Home />} />
          
          {/* 
            Route for the Value component with optional parameters:
            - :value is required
            - :color and :bgcolor are optional and marked with "?" to make them optional
          */}
          <Route path="/:value/:color?/:bgcolor?" element={<Value />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
