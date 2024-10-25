import { useState } from "react";
import { getPokemonDetails } from "../lib/api";
import { Pokemon } from "../lib/Interfaces";
import PokeCard from "../components/PokeCard";

const TypePage = () => {
  const [data, setData] = useState<Pokemon[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const types = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "plant",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  const chooseByType = async (type: string) => {
    const pokemonUrl = `https://pokeapi.co/api/v2/type/${type}`;
    const response = await fetch(pokemonUrl);
    const json = await response.json();
    const pokemonArray = await Promise.all(
      json.pokemon.map((pokemonItem: any) => {
        return getPokemonDetails(pokemonItem.pokemon.name);
      })
    );
    console.log(pokemonArray);
    setData(pokemonArray);
    return json;
  };

  // if (error) {
  //     return <div>Error, reload the website</div>;
  // }

  // if (!data) {
  //     return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>Choose your Pokémon Type!</h1>
      <div>
        {types.map((type) => (
          <button key={type} onClick={() => chooseByType(type)}>
            {type}
          </button>
        ))}
      </div>
      <div className="home-output">
        {data?.map((pokemon) => (
          <PokeCard pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default TypePage;
