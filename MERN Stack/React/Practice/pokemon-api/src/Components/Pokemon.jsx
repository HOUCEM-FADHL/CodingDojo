import React,{ useState, useEffect } from 'react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
 
    return (
        <div>
            <h1>Pokemon Names</h1>
            {pokemon.map((pokemon, index)=>{
                return (
                    <ul key={index}>
                        <li>{pokemon.name}</li>
                    </ul>
                )
            })}
        </div>
    );
}

export default Pokemon;