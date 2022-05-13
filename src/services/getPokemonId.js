import axios from "axios";

const getPokemonId = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const req = await axios.get(URL);
  return req;
};

export default getPokemonId;
