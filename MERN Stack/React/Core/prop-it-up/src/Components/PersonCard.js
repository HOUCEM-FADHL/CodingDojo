import React from "react";

const PersonCard= (user) => {
    const {firstName,lastName,age,hairColor} = user;
    return (
        <div>
            <h1>{firstName},{lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}
export default PersonCard;