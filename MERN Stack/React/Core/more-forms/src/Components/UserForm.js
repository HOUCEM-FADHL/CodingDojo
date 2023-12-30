import React, { useState } from  'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confPassword };
        console.log("Welcome", newUser);
    	setFirstName("");
        setLastName("");
    	setEmail("");
    	setPassword("");
        setConfPassword("");
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            {
                firstName.length<2 && firstName.length!==0?
                <p>First Name must be at least 2 characters</p>:
                null
            }
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            {
                lastName.length<2 && lastName.length!==0?
                <p>Last Name must be at least 2 characters</p>:
                null
            }
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {
                email.length<5 && email.length!==0?
                <p>Email must be at least 5 characters</p>:
                null
            }
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {
                password.length<8 && password.length!==0?
                <p>Password must be at least 8 characters</p>:
                null
            }
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confPassword} onChange={ (e) => setConfPassword(e.target.value) } />
            </div>
            {
                confPassword.length!==0 && confPassword===password?
                <p>Passwords are matching</p>:
                <p>Confirm Password must match Password</p>
            }
            <input type="submit" value="Create User" />
            <h2>Your Form Data</h2>
            <p>First Name: <span>{firstName}</span></p>
            <p>Last Name: <span>{lastName}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>Password: <span>{password}</span></p>
            <p>Confirm Password: <span>{confPassword}</span></p>
        </form>
            </>
    );
};
    
export default UserForm;
