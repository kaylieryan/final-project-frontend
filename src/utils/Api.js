import axios from "axios";
import { baseURL } from "constants.js";

//GET Characters

export const fetchCharacters = () => {
  const getCharacters = axios
    .get(`${baseURL}/characters`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // Access the 'data' property of the response object
      const charactersData = response.data.data; // Adjusted to access the nested 'data'
      return charactersData;
    })
    .catch((error) => {
      throw error;
    });

  return getCharacters;
};
