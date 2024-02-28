import CustomNavbar from "./Components/CustomNavbar";
import FormWrapper from "./Components/FormWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NameProvider } from "./Context/NameContext";

function App() {
  return (
      <NameProvider> {/* This is the context provider/ Wrapper Component */}
        <CustomNavbar />
        <FormWrapper />
      </NameProvider>
  );
}

export default App;
