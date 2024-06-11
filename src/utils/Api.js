import { baseURL } from "constants.js";

//GET Characters
export const fetchCharacters = () => {
  const getCharacters = fetch(`${baseURL}/characters`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((processServerResponse) => {
    
  return getCharacters;
});
}


