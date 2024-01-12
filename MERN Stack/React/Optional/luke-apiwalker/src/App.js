import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import SearchForm from './Components/SearchForm';
import DisplayPeople from './Components/DisplayPeople';
import DisplayPlanets from './Components/DisplayPlanets';

function App() {
  const [url, setUrl] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        {/* Include the SearchForm component with the url state and setUrl function */}
        <SearchForm url={url} setUrl={setUrl} />

        {/* Define routes for DisplayPeople and DisplayPlanets components */}
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="/people/:id" element={<DisplayPeople url={url} />} />
          <Route path="/planets/:id" element={<DisplayPlanets url={url} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;