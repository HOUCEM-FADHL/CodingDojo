import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayPlanets = (props) => {
  const { url } = props;
  const [starWars, setStarWars] = useState([]);
  const [errormsg, setErrormsg] = useState(null);
  const imgUrl = '/Assets/ObiWanKenobi.jpeg';

  useEffect(() => {
    // Fetch data based on the provided URL
    axios.get(url)
      .then(response => {
        setStarWars(response.data);
        setErrormsg(null);
      })
      .catch(error => {
        console.log(error);
        // Set an error message if there is an error during the API call
        setErrormsg("These aren't the droids you're looking for");
      });
  }, [url]);

  return (
    <div>
      {/* Check if there is an error message */}
      {errormsg ? (
        <div>
          {/* Display the error message in red */}
          <h1 style={{ color: 'red' }}>{errormsg}</h1>
          {/* Display an image */}
          <img src={imgUrl} alt="Obi-Wan Kenobi" />
        </div>
      ) : (
        <div>
          {/* Display details about the planet */}
          <h1>{starWars.name}</h1>
          <p>climate: {starWars.climate}</p>
          <p>terrain: {starWars.terrain}</p>
          <p>surface water: {starWars.surface_water}</p>
          <p>population: {starWars.population}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayPlanets;