// Importing necessary components and styles
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PlayersList from "./Views/PlayersList";
import AddPlayer from "./Views/AddPlayer";
import Status from "./Views/Status";
import 'bootstrap/dist/css/bootstrap.min.css';

// Main App component
function App() {
  return (
    // Main container div
    <div>
      {/* Define the routing for different paths */}
      <Routes>
        {/* Default route redirects to "/players/list" */}
        <Route path="/" element={<Navigate to="/players/list" />} />
        
        {/* Route for displaying the list of players */}
        <Route path="players/list" element={<PlayersList />} />
        
        {/* Route for adding a new player */}
        <Route path="players/addplayer" element={<AddPlayer />} />
        
        {/* Route for displaying the status of game with ID 1 */}
        <Route path="status/game/1" element={<Status />} />
      </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;
