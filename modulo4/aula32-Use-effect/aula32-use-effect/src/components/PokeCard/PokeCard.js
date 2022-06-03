import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PokeCard(props) {
    
// -----------valor do estado que guarda infos e foto do pokemon-----------
    const [pokemon, setPokemon] = useState({});

// -----------método que roda após a montagem do componente-----------
  useEffect(() => {pegaPokemon(props.pokemon);}, []);
  
// -----------método que roda após a atualização do componente.-----------
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);
  
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon( response.data );
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}
