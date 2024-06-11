export const baseURL = 'https://api.potterdb.com/v1'; // Base URL for the API

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`error: ${res.status}`);
  }
};