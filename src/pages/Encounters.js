import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import back from "../assets/logo/back.png";
import imageLogo from "../assets/logo/pokemon_title.webp";
import getEncounter from "../services/getEncounters";
import "./encounter.css";

const Encounters = () => {
  const [infoEncounters, setInfoEncounters] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getEncounter(params.id).then((req) => {
      console.log(req.data);
      setInfoEncounters(req.data);
    });
  }, [params.id]);

  return (
    <div>
      <button
        className="btn-back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={back} alt="imageBack" />
      </button>
      <div className="image-id-logo-pokemon">
        <img src={imageLogo} alt="imageLogo" />
      </div>

      <div className="encounter-container">
        <h3>Encontrar</h3>

        <div className="card-list-encounter">
          {infoEncounters.length > 0 ? (
            infoEncounters.map((obj) => {
              return (
                <CardEncounters
                  key={params.id * Math.random()}
                  name={obj.location_area.name}
                />
              );
            })
          ) : (
            <CardEncounters name="No info" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Encounters;

const CardEncounters = ({ name }) => {
  return (
    <div className="card-encounters">
      <h4>{name}</h4>
    </div>
  );
};
