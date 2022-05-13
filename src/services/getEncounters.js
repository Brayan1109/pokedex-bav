import axios from "axios";

const getEncounters = (id) => {
  const req = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`);
  return req;
};

export default getEncounters;
