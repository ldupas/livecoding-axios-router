import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AnimalDetails from "./components/animals/AnimalDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/a-propos" element={<AboutUs />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/animal/:id" element={<AnimalDetails />} />
      </Routes>
    </div>
  );
}

export default App;
