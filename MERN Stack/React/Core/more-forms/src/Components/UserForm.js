import React, { useState } from 'react';

const UserForm = (props) => {
    // State variables to manage form inputs, user data, error messages, and form submission status
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [newUser, setNewUser] = useState({});
    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConf, setErrorConf] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to handle form submission
    const createUser = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        // Creating a new user object with form data
        setNewUser({ firstName, lastName, email, password, confPassword });

        // Validating form inputs and setting corresponding error messages
        setErrorFirstName(firstName.length < 2 && firstName.length !== 0 ? "First Name must be at least 2 characters" : "");
        setErrorLastName(lastName.length < 2 && lastName.length !== 0 ? "Last Name must be at least 2 characters" : "");
        setErrorEmail(email.length < 5 && email.length !== 0 ? "Email must be at least 5 characters" : "");
        setErrorPassword(password.length < 8 && password.length !== 0 ? "Password must be at least 8 characters" : "");
        setErrorConf(confPassword.length !== 0 && confPassword !== password ? "Passwords do not match" : "");

        // Resetting form input values
        setFirstName("");
        setConfPassword("");
        setPassword("");
        setLastName("");
        setEmail("");
    };

    // JSX representing the form and the display of form data
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <p>{errorFirstName}</p>

                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <p>{errorLastName}</p>
                
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <p>{errorEmail}</p>

                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <p>{errorPassword}</p>
                
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confPassword} onChange={ (e) => setConfPassword(e.target.value) } />
                </div>
                <p>{errorConf}</p>
                
                <input type="submit" value="Create User" />
            </form>

            {/* Displaying form data if there are no errors and the form is submitted */}
            <div>
                {(!isSubmitted || errorFirstName!=="" || errorConf!=="" || errorEmail!=="" || errorLastName!=="" || errorPassword!=="")?
                null:
                (<div>
                <h2>Your Form Data</h2>
                <p>First Name: <span>{newUser.firstName}</span></p>
                <p>Last Name: <span>{newUser.lastName}</span></p>
                <p>Email: <span>{newUser.email}</span></p>
                <p>Password: <span>{newUser.password}</span></p>
                </div>)
                }
            </div>
        </>
    );
};
    
export default UserForm;