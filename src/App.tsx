// import { BrowserRouter } from "react-router-dom";

// components
import ClientMatters from "./components/ClientMatters/ClientMatters";
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Status from "./components/Status/Status";
import Training from "./components/Training/Training";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Status />
      <ClientMatters />
      <Training />
      <CustomerFeedback />
    </>
  );
}

export default App;
