import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface PokemonData {
  name: string;
}

export default function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<PokemonData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokedmon/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((e) => {
        setError(e);
      });
  }, [id]);

  if (error) {
    return "Sorry, kaputt";
  }

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <h2>Details zu Pokemon #{id}</h2>
      <h1>{data.name}</h1>
    </div>
  );
}
