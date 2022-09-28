import "./App.css";
import { AllRouter } from "./Components/AllRouter";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AllRouter />
      <Footer />
    </>
  );
}

export default App;
