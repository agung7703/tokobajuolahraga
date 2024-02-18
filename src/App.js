import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Homepage/Home";
import Produk from "./Pages/Products/Produk";
import About from "./Pages/AboutUs/About";
import Footer from "./Components/Footer";
import OurTeams from "./Pages/Teams/OurTeams";
import Contact from "./Pages/ContactUs/Contact";
import Deskripsi from "./Pages/Products/Deskripsi";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/Deskripsi" element={<Deskripsi />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/OurTeams" element={<OurTeams />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
