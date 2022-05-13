import axios from "axios";

const getInfoPokemon = async (url) => {
  const req = await axios.get(url);
  return req;
};

export default getInfoPokemon;
