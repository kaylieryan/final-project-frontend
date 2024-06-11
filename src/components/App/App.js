import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CharactersList from '../Characters/CharactersList'; // Import your CharactersList component
import Main from '../Main/Main';

//---------------------------------------------------------Functions---------------------------------------------------------
function App() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
//-----------------------------------------------------------Constants------------------------------------------------------------

//------------------------------------------------------------UseEffect------------------------------------------------------------
useEffect(() => {
  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://api.potterdb.com/v1/characters");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const charactersData = await response.json();
      setCharacters(charactersData.data); // Adjusted to access the nested 'data'
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  fetchCharacters();
}, []);
//------------------------------------------------------------HTML------------------------------------------------------------


  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<CharactersList />} />
      </Routes>
    </div>
  );
}

export default App;
