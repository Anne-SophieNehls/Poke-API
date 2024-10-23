import { useState } from "react"

const PokemonTypes = () => {
    const [typeList, setTypeList] = useState<string[]>([])

    const type = [
        'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'plant', 'poison', 'psychic', 'rock', 'steel', 'water'
    ]


    // interface pokemondata???

    const [data, setData] = useState<PokemonData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${type}`)
          .then((response) => response.json())
          .then((json) => {
            setData(json);
          }).catch((e)=>{
            setError(e)
          });
      }, [type]);
    
      if(error){
        return "Sorry, kaputt"
      }
    
      if(!data) {
        return "Loading..."
      }[type]

}