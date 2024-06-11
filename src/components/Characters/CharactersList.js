import React, { useState, useEffect } from "react";
import "./CharactersList.css";
import { fetchCharacters } from "../../utils/Api";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        setCharacters(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="characters_container">
      {" "}
      {/* Updated class name for the container */}
      <h2 className="characters_title">Characters</h2>{" "}
      {/* Unique class name for the title */}
      <ul className="characters_grid">
        {" "}
        {/* Updated class name for the grid */}
        {characters.map((character) => (
          <li className="character_item" key={character.id}>
            {" "}
            {/* Unique class name for each item */}
            <h3>{character.attributes.name}</h3>{" "}
            {/* Removed class name for simplicity */}
            {character.attributes.image && (
              <img
                src={character.attributes.image}
                alt={character.attributes.name}
                className="character_image"
              />
            )}
            <p>House: {character.attributes.house || "Unknown"}</p>
            <p>Gender: {character.attributes.gender || "Unknown"}</p>
            <p>
              Blood Status: {character.attributes.blood_status || "Unknown"}
            </p>
            <p>Species: {character.attributes.species || "Unknown"}</p>
            {character.attributes.wiki && (
              <a
                href={character.attributes.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="character_link">
                More Info
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharactersList;
