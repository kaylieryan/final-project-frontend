import { baseURL } from "./constants";
import { processServerResponse } from "./constants";

//GET Characters
export const fetchCharacters = () => {
  const getCharacters = fetch(`${baseURL}/characters`)
    .then(processServerResponse)
    .catch((error) => console.error("Error:", error));
  return getCharacters;
};
