import { baseURL } from "./constants";
import { processServerResponse } from "./constants";

//GET Characters
export const fetchCharacters = () => {
  const getCharacters = fetch(`${baseURL}/characters`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);

  return getCharacters;
};
