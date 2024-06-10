import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharactersList.css';

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    const fetchCharacters = async () => {
        try {
        const response = await axios.get('https://api.potterdb.com/v1/characters');
        // Access the 'data' property of the response object
        const charactersData = response.data.data; // Adjusted to access the nested 'data'
        setCharacters(charactersData);
        setLoading(false);
        } catch (error) {
        setError(error);
        setLoading(false);
        }
    };

    fetchCharacters();
    }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

return (
    <div className='characters_container'> {/* Updated class name for the container */}
        <h2 className='characters_title'>Characters</h2> {/* Unique class name for the title */}
        <ul className='characters_grid'> {/* Updated class name for the grid */}
        {characters.map((character) => (
            <li className='character_item' key={character.id}> {/* Unique class name for each item */}
            <h3>{character.attributes.name}</h3> {/* Removed class name for simplicity */}
            {character.attributes.image && <img src={character.attributes.image} alt={character.attributes.name} className='character_image' />}
            <p>House: {character.attributes.house || 'Unknown'}</p>
            <p>Gender: {character.attributes.gender || 'Unknown'}</p>
            <p>Blood Status: {character.attributes.blood_status || 'Unknown'}</p>
            <p>Species: {character.attributes.species || 'Unknown'}</p>
            {character.attributes.wiki && <a href={character.attributes.wiki} target="_blank" rel="noopener noreferrer" className='character_link'>More Info</a>}
            </li>
        ))}
        </ul>
    </div>
);
}

export default CharactersList;
