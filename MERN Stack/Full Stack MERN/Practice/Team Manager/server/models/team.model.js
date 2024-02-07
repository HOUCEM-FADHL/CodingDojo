// Import the mongoose library
const mongoose = require("mongoose");

// Define the schema for the Team model
const TeamSchema = new mongoose.Schema(
    {
        playerName: {
        type: String,
        required: [true, "Please add a player name"],
        minlength: [2, "Player name must be at least 2 characters"],
        },
        position: {
            type: String,
            required: [false],
        },
        status: {
            type: String,
            // required: [true, "Please add a status"],
            enum: ["Undecided", "Not Playing", "Playing"],
            default: "Undecided",
        }
    },
    { timestamps: true }
);

// Create the Team model using the defined schema
const Team = mongoose.model("Team", TeamSchema);

// Export the Team model
module.exports = Team;