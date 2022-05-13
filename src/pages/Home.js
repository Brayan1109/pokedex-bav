import React, { useEffect, useState } from "react";
import CardPokemon from "../components/CardPokemon";
import getAllPokemon from "../services/getAllPokemon";
import "./home.css";

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon().then((req) => {
      setAllPokemon(req.data);
    });
  }, []);

  return (
    <div className="container-home">
      <h2>Pokedex</h2>

      <span>Bienvenido, aquí puedes encontrar tu pokemon</span>

      <select defaultValue="Todos los pokemon">
        <option>Todos los pokemos</option>
        <option>opción 1</option>
        <option>opción 2</option>
        <option>opción 3</option>
        <option>opción 4</option>
      </select>

      <div className="container-list-pokemon">
        {allPokemon.results ? (
          allPokemon.results.map((pok) => {
            return <CardPokemon key={pok.name} data={pok} />;
          })
        ) : (
          <h4>Espere...</h4>
        )}
      </div>
    </div>
  );
};

export default Home;
