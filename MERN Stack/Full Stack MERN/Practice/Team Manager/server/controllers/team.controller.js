// Import the Team model
const Team = require("../models/team.model");

// Export an object with methods for handling Team-related operations
module.exports = {
    // Create a new Team player
    createPlayer: (req, res) => {
        const { playerName, position, status } = req.body;
        Team.create({ playerName, position, status })
        .then((player) => res.json(player))
        .catch((err) => res.status(500).json(err));
    },
    // Retrieve all  Team players
    getPlayers: (req, res) => {
        Team.find()
        .then((players) => res.json(players))
        .catch((err) => res.status(500).json(err));
    },

    
    // Retrieve a single Team player by its ID
    getOnePlayer: (req, res) => {
        Team.findOne({ _id: req.params.id })
        .then((onePlayer) => res.json(onePlayer))
        .catch((err) => res.status(500).json(err));
    },
    
    // Update an existing Team player by its ID
    updatePlayer: (req, res) => {
        Team.findOneAndUpdate(
        { _id: req.params.id },
        {
            // playerName: req.body.playerName,
            // position: req.body.position,
            status: req.body.status
        },
        { new: true, runValidators: true }
        )
        .then((player) => res.json(player))
        .catch((err) => res.status(500).json(err));
    },

    // Delete a Team player by its ID
    deletePlayer: (req, res) => {
        Team.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json("Player deleted."))
        .catch((err) => res.status(500).json(err));
    },
    }