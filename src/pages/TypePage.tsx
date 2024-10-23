import { useState } from "react";


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

    const chooseByType = (type: string) => {
        fetch(`https://pokeapi.co/api/v2/type/${type}`)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch((e) => {
                setError(e.message);
            });
    };

    if (error) {
        return <div>Error, reload the website</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

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
        
        </div>
    );
};

export default TypePage;