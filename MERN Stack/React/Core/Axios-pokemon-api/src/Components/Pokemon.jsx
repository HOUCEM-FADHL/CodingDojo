// Importing necessary dependencies from React and Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Functional component named Pokemon
const Pokemon = (props) => {
    // State hook to store the list of Pokemon
    const [pokemon, setPokemon] = useState([]);

    // useEffect hook to make an HTTP request when the component mounts
    useEffect(() => {
        // Making an asynchronous HTTP GET request to the Pokemon API
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                // Updating the state with the list of Pokemon from the API response
                setPokemon(response.data.results);
            })
            .catch(error => {
                // Handling errors if the HTTP request fails
                console.error('Error fetching Pokemon data:', error);
            });
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

    // Rendering the component with the list of Pokemon names
    return (
        <div>
            <h1>Pokemon Names</h1>
            {pokemon.map((pokemon, index) => {
                // Mapping through the list of Pokemon and rendering their names in an unordered list
                return (
                    <ul key={index}>
                        <li>{pokemon.name}</li>
                    </ul>
                );
            })}
        </div>
    );
};

// Exporting the Pokemon component as the default export
export default Pokemon;
