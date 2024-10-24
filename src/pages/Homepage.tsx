import PokeCard from "../components/PokeCard";
import { getPokemonDetails } from "../lib/api";
import { useEffect, useState } from "react";
import { Pokemon } from "../lib/Interfaces";

// mit Array(number) koennen wir einen Array mit einer bestimmten laenge erzeugen:
// const array151 = Array(151)
// dieser wird allerdings leere Eintraege haben.
// Also nicht [undefined, undefined, undefined,...]
// sondern [empty x 151] (es handelt sich um einen sogenannten "sparse array")
// Manche Operationen funktionieren damit, manche aber auch nicht.
// array.map z.B. funktioniert nicht, [...array] oder Array.fill() aber schon.
// Bevor wir mappen koennen, muessen wir den array also erst in eine Form zwingen,
// in der seine Eintraege nicht mehr empty, sondern zumindest undefined sind.
// Das geht z.B. so: Array(151).fill(1)
// (Hier sind alle Eintraege 1)
// oder auch so: [...Array(151)]
// (hier sind alle Eintraege undefined)
// Erst dann koennen wir mappen.

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
    <div>
      <h1>Pokemon</h1>
      <div>
        {data.map((pokemon: Pokemon) => (
          // da alle eintraege des Arrays 1 sind, verwenden wir den index um hochzuzaehlen.
          // da der index bei 0 anfaengt, addieren wir jeweils 1
          <PokeCard pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
