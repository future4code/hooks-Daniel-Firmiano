import React from "react";
import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";

export default function App() {
  // lista de pokemons que está sendo guardada no estado
  const [pokeList, setPokeList] = useState([]);
   // nome do pokemon guardado no estado, assim que o usuário
    // escolhe um nome no dropdown
  const [pokeName, setPokeName] = useState("");
 

  // método que roda após a montagem do componente
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
          .then((response) => {
            setPokeList(response.data.results);
    });
  }, []);
  
  const changePokeName = (event) => {
    setPokeName( event.target.value );
  };

    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }

