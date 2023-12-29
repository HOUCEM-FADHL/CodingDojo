import React, { useState } from "react";

const PersonCard= (user) => {
    const {firstName,lastName,age,hairColor} = user;
    const [stateAge, setAge]= useState (age);
    return (
        <div>
            <h1>{firstName},{lastName}</h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setAge(stateAge+1) }>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}
export default PersonCard;
