// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

// Functional component for managing player status
const Status = () => {
    // State variable to store the list of players
    const [team, setTeam] = useState([]);

    // Fetching the list of players from the API when the component mounts
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/players/list")
            .then((res) => {
                console.log("getAll ", res.data);
                setTeam(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // Function to update player status
    const updateStatus = (e, id) => {
        e.preventDefault();

        // Sending a PATCH request to update player status
        axios
            .patch(`http://localhost:8000/api/status/${id}`, {
                status: e.target.value,
            })
            .then((res) => {
                console.log("after patch: ", res.data);
                // Updating the state to reflect the changed status
                setTeam(team.map((player) => (player._id === res.data._id ? res.data : player)));
            })
            .catch((err) => console.log(err));
    };

    // Rendering the component with the list of players and their status
    return (
        // Main container div with margin
        <div className="m-3">
            {/* Navigation links */}
            <div>
                <Link to="/players/list">Manage Player</Link> |{" "}
                <Link to="/status/game/1">Manage Player Status</Link>
            </div>

            {/* Game status navigation links */}
            <div>
                <h1>Player Status - Game 1</h1>
                <Link to="/status/game/1">Game 1</Link> |{" "}
                <Link to="/status/game/2">Game 2</Link> |{" "}
                <Link to="/status/game/3">Game 3</Link>

                {/* Table displaying the list of players and their status */}
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping through the list of players and displaying each row */}
                        {team.map((player) => (
                            <tr key={player._id}>
                                <td>{player.playerName}</td>
                                <td className="d-flex gap-2">
                                    {/* Button for marking player as Playing */}
                                    <Button
                                        value="Playing"
                                        onClick={(e) => {
                                            updateStatus(e, player._id);
                                        }}
                                        variant={player.status === "Playing" ? "success" : "secondary"}
                                    >
                                        Playing
                                    </Button>

                                    {/* Button for marking player as Not Playing */}
                                    <Button
                                        value="Not Playing"
                                        onClick={(e) => updateStatus(e, player._id)}
                                        variant={player.status === "Not Playing" ? "danger" : "secondary"}
                                    >
                                        Not Playing
                                    </Button>

                                    {/* Button for marking player as Undecided */}
                                    <Button
                                        value="Undecided"
                                        onClick={(e) => updateStatus(e, player._id)}
                                        variant={player.status === "Undecided" ? "warning" : "secondary"}
                                    >
                                        Undecided
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

// Export the Status component as the default export
export default Status;
