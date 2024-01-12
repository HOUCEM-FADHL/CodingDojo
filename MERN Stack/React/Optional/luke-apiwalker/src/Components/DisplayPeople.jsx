import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayPeople = (props) => {
  const { url } = props;
  const [starWars, setStarWars] = useState([]);
  const [errormsg, setErrormsg] = useState(null);
  const [homeWord, setHomeWord] = useState('');
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

  useEffect(() => {
    // Fetch additional data (homeworld) based on the homeworld URL
    const homeworldUrl = `${starWars.homeworld}`;
    axios.get(homeworldUrl)
      .then(response => {
        setHomeWord(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  }, [starWars]);

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
          {/* Display details about the person */}
          <h1>{starWars.name}</h1>
          <p>height: {starWars.height}</p>
          <p>hair color: {starWars.hair_color}</p>
          <p>eye color: {starWars.eye_color}</p>
          <p>skin color: {starWars.skin_color}</p>
          <p>homeworld: {homeWord}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayPeople;