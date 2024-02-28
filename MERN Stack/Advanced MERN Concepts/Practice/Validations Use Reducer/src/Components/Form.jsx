import React, { useReducer } from "react";

const Form = () => {
    // We must define initial state: what our state will look like on initial render
    const initialState = {
        firstName: {
        value: "",
        error: null,
        },
        lastName: {
        value: "",
        error: null,
        },
        email: {
        value: "",
        error: null,
        },
    };

    // The action will look like: {type: "DO_SOMETHING", payload: "some_value"}
    const reducer = (state, action) => {
        switch (action.type) {
        case "SET_FirstName_Value":
            return {
            ...state,
            firstName: {
                ...state.firstName,
                value: action.payload,
            },
            };
        case "SET_FirstName_Error":
            return {
            ...state,
            firstName: {
                ...state.firstName,
                error: action.payload,
            },
            };
        case "SET_LastName_Value":
            return {
            ...state,
            lastName: {
                ...state.lastName,
                value: action.payload,
            },
            };
        case "SET_LastName_Error":
            return {
            ...state,
            lastName: {
                ...state.lastName,
                error: action.payload,
            },
            };
        case "SET_Email_Value":
            return {
            ...state,
            email: {
                ...state.email,
                value: action.payload,
            },
            };
        case "SET_Email_Error":
            return {
            ...state,
            email: {
                ...state.email,
                error: action.payload,
            },
            };
        default:
            return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstNameChange = (e) => {
        if (e.target.value.length < 3) { 
            dispatch({
                type: "SET_FirstName_Error",
                payload: "First Name must be at least 3 characters"
            });
        } else {
           dispatch({
                type: "SET_FirstName_Error",
                payload: ""
            });
        }
        dispatch({
            type: "SET_FirstName_Value",
            payload: e.target.value 
        });
    };
    const handleLastNameChange = (e) => {
        if (e.target.value.length < 3) { 
            dispatch({
                type: "SET_LastName_Error",
                payload: "Last Name must be at least 3 characters"
            });
        } else {
           dispatch({
                type: "SET_LastName_Error",
                payload: ""
            });
        }
        dispatch({
            type: "SET_LastName_Value",
            payload: e.target.value 
        });
    };
    const handleEmailChange = (e) => {
        if (e.target.value.length < 5) { 
            dispatch({
                type: "SET_Email_Error",
                payload: "Email must be at least 5 characters"
            });
        } else {
           dispatch({
                type: "SET_Email_Error",
                payload: ""
            });
        }
        dispatch({
            type: "SET_Email_Value",
            payload: e.target.value 
        });
    }
    return (
        <div>
        <h1>Form</h1>
        <div>
            <label>
            <span>First Name: </span>
            <input
                id="name"
                value={state.firstName.value}
                onChange={(e) => handleFirstNameChange(e)}
                />
            </label>
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
        </div>
        <div>
            <label>
            <span>Last Name: </span>
            <input
                id="lastName"
                value={state.lastName.value}
                onChange={(e) => handleLastNameChange(e)}
                />
            </label>
            {state.lastName.error !== null && (
                <p className="error">{state.lastName.error}</p>
                )}
        </div>
        <div>
        <label>
            <span>Email: </span>
            <input
            id="email"
            value={state.email.value}
            onChange={(e) => handleEmailChange(e)}
            />
                </label>
            {state.email.error !== null && (
                <p className="error">{state.email.error}</p>
                )}
        </div>
        <h1>{JSON.stringify(state)}</h1> {/* display current value of state */}
        </div>
    );
};

export default Form;
