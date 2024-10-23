import { useState } from "react";
import { getPokemonDetails } from "../lib/api";

interface PokemonData {
    name: string;
  }

const TypePage = () => {
    const [data, setData] = useState<PokemonData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const types = [
        'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 
        'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'plant', 
        'poison', 'psychic', 'rock', 'steel', 'water'
    ];


    const chooseByType = async (type: string) =>  {
       const pokemonUrl = `https://pokeapi.co/api/v2/type/${type}`
       const response = await fetch(pokemonUrl);
       const json = (await response.json()) 
       console.log(json.pokemon);
       const pokemonArray = await Promise.all(json.pokemon.map( (pokemonItem) => {
       
       return getPokemonDetails(pokemonItem.pokemon.name)
       } ))
       console.log(pokemonArray);
       return json
     } 
    

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
            <div className="pokeCard">
                <div>
                    <img src="" alt="pokemon-picture" />
                    <div className="backgroud"></div>
                </div>
                <div className="info">
                    {/* <p>{json.id}</p> */}
                    <p>pokemon name</p>
                </div>
            </div>
        </div>

    );
}

export default TypePage;