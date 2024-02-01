// Import the TeamController
const teamController = require("../controllers/team.controller");

// Define API routes for Team operations and associate them with corresponding controller methods
module.exports = (app) => {
    app.get("/api/players/list", teamController.getPlayers);
    app.get("/api/players/:id", teamController.getOnePlayer);
    app.patch("/api/status/:id", teamController.updatePlayer);
    app.post("/api/players/addplayer", teamController.createPlayer);
    app.delete("/api/players/:id", teamController.deletePlayer);
};