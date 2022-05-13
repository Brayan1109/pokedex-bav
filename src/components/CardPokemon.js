import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getInfo from "../services/getInfoPokemon";
import "./cardPokemon.css";

const CardPokemon = ({ data }) => {
  const [dataInfo, setDataInfo] = useState({});

  // const colors = {
  //   fire: "rgba(245, 150, 34, 0.5)",
  //   water: "aqua",
  //   grass: "aquamarine",
  //   bug: "aquamarine",
  //   normal: "aquamarine",
  // };

  const { name, url } = data;
  useEffect(() => {
    getInfo(url).then((req) => {
      setDataInfo(req.data);
    });
  }, [url]);

  return (
    <div className="card">
      {dataInfo.sprites ? (
        <div className="card-info-submit">
          <Info name={name} data={dataInfo} />
        </div>
      ) : (
        <span>Espere</span>
      )}
    </div>
  );
};

const Info = ({ name, data }) => {
  const navigate = useNavigate();

  return (
    <div className="card-container" onClick={() => navigate(`${data.id}`)}>
      <h3>{name}</h3>
      <div className="container-image-type-pokemon">
        <img
          src={data.sprites.other.dream_world.front_default}
          alt="imagePokemon"
        />
        <div>
          <h4>Tipo: </h4>
          <span>{data.types[0].type.name}</span>
        </div>
      </div>
      <div className="container-info-pokemon">
        <span>
          <b>Hp: </b> {data.stats[0].base_stat}
        </span>
        <span>
          <b>Ataque: </b> {data.stats[1].base_stat}
        </span>
        <span>
          <b>Defensa: </b> {data.stats[2].base_stat}
        </span>
        <span>
          <b>Velocidad: </b> {data.stats[5].base_stat}
        </span>
      </div>
    </div>
  );
};

export default CardPokemon;
