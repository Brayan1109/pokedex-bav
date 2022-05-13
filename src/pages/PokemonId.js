import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import imageLogo from "../assets/logo/pokemon_title.webp";
import getPokemonId from "../services/getPokemonId";
import back from "../assets/logo/back.png";
import "./pokemonId.css";

const PokemonId = () => {
  const params = useParams();
  const navigate = useNavigate();

  // const colors = ['']

  const [infoPokemon, setInfoPokemon] = useState({});

  useEffect(() => {
    getPokemonId(params.id).then((req) => {
      setInfoPokemon(req.data);
    });
  }, [params.id]);

  return (
    <div className="background-page">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={back} alt="imageBack" />
      </button>
      <div className="image-id-logo-pokemon">
        <img src={imageLogo} alt="imageLogo" />
      </div>

      <h3>{infoPokemon.name}</h3>
      <div className="pokemon-id-container">
        <section className="info-pokemon-id-container">
          <div className="image-info-id-container">
            <div className="image-pokemon-id-">
              {infoPokemon.sprites ? (
                <ImagePokemonId
                  image={infoPokemon.sprites.other.dream_world.front_default}
                />
              ) : (
                <p>Espere</p>
              )}
            </div>
            <div className="info-pokemon-id">
              {infoPokemon.sprites ? (
                <InfoPokemonId
                  numero={infoPokemon.id}
                  weight={infoPokemon.weight}
                  height={infoPokemon.height}
                />
              ) : (
                <p>Espere</p>
              )}
            </div>
          </div>

          <div className="abilities-types-id-container">
            {infoPokemon.sprites ? (
              <AbilitiesType
                abilities={infoPokemon.abilities}
                types={infoPokemon.types}
              />
            ) : (
              <p>Espere</p>
            )}
          </div>
        </section>

        <aside className="movements-pokemon-id-container">
          <Link to={`/pokemon/${params.id}/encounters`}>
            {" "}
            <h4 className="btn-person">Encontrar</h4>
          </Link>

          <h4>Movimientos</h4>
          {infoPokemon.moves ? (
            infoPokemon.moves.map((obj) => {
              return <p key={obj.move.name}>{obj.move.name}</p>;
            })
          ) : (
            <p>Espere</p>
          )}
        </aside>
      </div>
    </div>
  );
};

export default PokemonId;

const ImagePokemonId = ({ image }) => {
  return (
    <div className="image-pokemon-id-cp ">
      <img src={image} alt="ImagePokemon" />
    </div>
  );
};

const InfoPokemonId = ({ numero, weight, height }) => {
  return (
    <div>
      <div>
        <p>
          <b>#</b>
        </p>
        <p>{numero}</p>
      </div>
      <div>
        <p>
          <b>Peso</b>
        </p>
        <p>{weight}</p>
      </div>
      <div>
        <p>
          <b>Altura</b>
        </p>
        <p>{height}</p>
      </div>
    </div>
  );
};

const AbilitiesType = ({ types, abilities }) => {
  return (
    <div className="abilities-types-id-container-cp">
      <div className="types-id">
        <h4> Tipo</h4>
        {types.map((obj) => {
          return <p key={obj.type.name}>{obj.type.name}</p>;
        })}
      </div>

      <div className="abilities-id">
        <h4>Habilidades</h4>
        {abilities.map((obj) => {
          return <p key={obj.ability.name}>{obj.ability.name}</p>;
        })}
      </div>
    </div>
  );
};
