import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import CharactersList from '../Characters/CharactersList'; // Import your CharactersList component
import Main from '../Main/Main';

function App() {
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
