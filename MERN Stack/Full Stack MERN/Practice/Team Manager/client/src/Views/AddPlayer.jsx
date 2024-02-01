// Importing necessary libraries and components
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

// Functional component for adding a new player
const AddPlayer = () => {
  // State variables for managing input fields, errors, and navigation
    const [playerName, setPlayerName] = useState("");
    const [position, setPosition] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    // Event handler for form submission
    const submitHandler = (e) => {
        e.preventDefault();

        // Sending a POST request to add a new player
        axios
        .post("http://localhost:8000/api/players/addplayer", {
            playerName,
            position,
        })
        .then((res) => {
            console.log("addplayer ", res.data);
            // Redirecting to the player list page after successful addition
            navigate("/players/list");
        })
        .catch((err) => {
            console.log(err);
            // Handling errors and updating the state
            setError(err.response.data.errors);
        });
    };

    return (
        // Main container div with margin
        <div className="m-3">
        {/* Navigation links */}
        <div>
            <Link to="/players/list">Manage Player</Link> |{" "}
            <Link to="/status/game/1">Manage Player Status</Link>
        </div>

        {/* Add player and list navigation links */}
        <div>
            <Link to="/players/list">List</Link> |{" "}
            <Link to="/players/addplayer">Add Player</Link>

            {/* Player form */}
            <form onSubmit={submitHandler}>
            {/* Player Name input */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                Player Name:
                </Form.Label>
                <Col sm="10">
                <Form.Control
                    type="text"
                    name="playerName"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                </Col>
            </Form.Group>

            {/* Display error message for player name */}
            {error.playerName && (
                <div className="text-danger">{error.playerName.message}</div>
            )}

            {/* Preferred Position input */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                Preferred Position:
                </Form.Label>
                <Col sm="10">
                <Form.Control
                    type="text"
                    name="preferredPosition"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                </Col>
            </Form.Group>

            {/* Add button */}
            <Button
                type="submit"
                variant="success"
                disabled={playerName.length < 2}
            >
                Add
            </Button>
            </form>
        </div>
        </div>
    );
};

// Export the AddPlayer component as the default export
export default AddPlayer;
