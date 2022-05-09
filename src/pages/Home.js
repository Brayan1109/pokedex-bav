import React, { useEffect, useState } from "react";
import getAllPokemon from "../services/getAllPokemon";

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon().then((req) => {
      setAllPokemon(req.data);
      console.log(req.data);
    });
  }, []);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
