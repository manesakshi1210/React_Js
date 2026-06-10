import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./Components/Cards";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        <Cards/>
      <Footer/>
    </>
  );
}

export default App;