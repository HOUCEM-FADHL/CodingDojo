import { useParams } from "react-router-dom";

// Value component takes props as input
const Value = (props) => {
  // Using useParams hook to extract parameters from the URL
  const { value, bgcolor, color } = useParams();

  // Rendering content based on whether 'value' is a number or not
  return (
    <div>
      {isNaN(+value) ? (
        // If 'value' is not a number, render with specified color and background color
        <h1 style={{ color: color, backgroundColor: bgcolor }}>
          The world is: {value}
        </h1>
      ) : (
        // If 'value' is a number, render a different message
        <h1>The number is: {value}</h1>
      )}
    </div>
  );
};

// Exporting the Value component as the default export
export default Value;
