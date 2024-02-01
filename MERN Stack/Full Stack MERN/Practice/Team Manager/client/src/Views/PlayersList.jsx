// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

// Functional component for displaying the list of players
const PlayersList = () => {
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

    // Function to delete a player by ID
    const deletePlayer = (e, id) => {
        // Displaying a confirmation dialog before deleting the player
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this player?"
        );

        if (confirmDelete) {
            e.preventDefault();
            console.log("id ", id);

            // Sending a DELETE request to remove the player
            axios
                .delete(`http://localhost:8000/api/players/${id}`)
                .then((res) => {
                    console.log("after delete: ", res.data);
                    // Updating the state to remove the deleted player from the list
                    setTeam(team.filter((player) => player._id !== id));
                })
                .catch((err) => console.log(err));
        }
    };

    // Rendering the component with the list of players in a table
    return (
        // Main container div with margin
        <div className="m-3">
            {/* Navigation links */}
            <div>
                <Link to="/players/list">Manage Player</Link> |{" "}
                <Link to="/status/game/1">Manage Player Status</Link>
            </div>

            {/* List and Add Player navigation links */}
            <div>
                <Link to="/players/list">List</Link> |{" "}
                <Link to="/players/addplayer">Add Player</Link>

                {/* Table displaying the list of players */}
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping through the list of players and displaying each row */}
                        {team.map((player) => (
                            <tr key={player._id}>
                                <td>{player.playerName}</td>
                                <td>{player.position}</td>
                                <td>
                                    {/* Delete button with onClick event */}
                                    <Button
                                        type="submit"
                                        onClick={(e) => deletePlayer(e, player._id)}
                                        variant="danger"
                                    >
                                        Delete
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

// Export the PlayersList component as the default export
export default PlayersList;
