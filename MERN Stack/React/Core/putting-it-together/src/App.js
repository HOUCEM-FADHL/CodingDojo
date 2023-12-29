import React from "react";
import './App.css';
import PersonCard from "./Components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
      <PersonCard firstName={"Smith"} lastName={"Jone"} age={88} hairColor={"Brown"} />
    </div>
  );
}

export default App;
