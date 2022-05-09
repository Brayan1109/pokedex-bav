import axios from "axios";

const getAllPokemon = async () => {
  let url = `https://pokeapi.co/api/v2/pokemon/`;
  const req = await axios.get(url);
  return req;
};

export default getAllPokemon;
