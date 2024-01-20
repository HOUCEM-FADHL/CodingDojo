// Import the JokeController
const JokeController = require('../controllers/joke.controller');

// Define API routes for Joke operations and associate them with corresponding controller methods
module.exports = (app) => {
    app.get('/api/allJokes', JokeController.getAllJokes);
    app.get('/api/allJokes/:id', JokeController.getOneJoke);
    app.get('/api/randomJoke', JokeController.getRandomJoke);
    app.post('/api/allJokes', JokeController.createJoke);
    app.put('/api/allJokes/:id', JokeController.updateJoke);
    app.delete('/api/allJokes/:id', JokeController.deleteJoke);
}
