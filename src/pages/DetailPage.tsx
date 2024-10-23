import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../lib/api";
import PlaySound from "../components/PlaySound";

interface PokemonData {
  name: string;
  cries: {
    latest: string;
  };
}

export default function DetailPage() {
  const { id } = useParams();

  const pokemonQuery = useQuery<PokemonData>({
    queryKey: ["pokemon", id],

    queryFn: () => getPokemonById(id!),
  });

  if (pokemonQuery.isError) {
    return "Sorry, kaputt";
  }

  if (pokemonQuery.isPending) {
    return "Loading...";
  }

  return (
    <div>
      <h2>Details zu Pokemon #{id}</h2>
      <h1>{pokemonQuery.data.name}</h1>
      <PlaySound audioURL={pokemonQuery.data.cries.latest} />
    </div>
  );
}
