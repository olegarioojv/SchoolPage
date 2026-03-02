// import { BrowserRouter } from "react-router-dom";

// components
import ClientMatters from "./components/ClientMatters/ClientMatters";
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Status from "./components/Status/Status";
import Team from "./components/Team/Team";
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
      <Team />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
