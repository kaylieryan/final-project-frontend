import { baseURL } from "./constants";
import { processServerResponse } from "./constants";

//GET Characters
export const fetchCharacters = () => {
  const getCharacters = fetch(`${baseURL}/characters`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error("Error:", error));
  return getCharacters;
};
