import { Pokemon } from "../lib/Interfaces";

export default function PokeCard(props: { pokemon: Pokemon }) {
  return (
    <div className="pokeCard">
      <div>
        <img
          src={props.pokemon.sprites.other?.home.front_default}
          alt="pokemon-picture"
        />
        <div className="backgroud"></div>
      </div>
      <div className="info">
        <p>{props.pokemon.id}</p>
        <p>{props.pokemon.name}</p>
      </div>
    </div>
  );
}
