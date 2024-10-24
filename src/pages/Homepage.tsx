import PokeCard from "../components/PokeCard";
import { getPokemonDetails } from "../lib/api";
import { useEffect, useState } from "react";
import { Pokemon } from "../lib/Interfaces";

export default function Homepage() {
  const [data, setData] = useState<Pokemon[]>([]);

  const setPokemonData = async () => {
    const pokemonArray: Pokemon[] = [];
    while (pokemonArray.length < 120) {
      pokemonArray.push(await getPokemonDetails(pokemonArray.length + 1));
    }
    setData(pokemonArray);
  };

  useEffect(() => {
    setPokemonData(), [];
  });

  return (
    <div className="home-output">
      <h1>Pokemon</h1>

      {data.map((pokemon: Pokemon) => (
        <PokeCard pokemon={pokemon} />
      ))}
    </div>
  );
}
