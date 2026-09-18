import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import NccJourney from "./components/Nccjourney";
import Achievements from "./components/Achievements";
import Workflow from "./components/Workflow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BTech from "./pages/BTech";
import Intermediate from "./pages/Intermediate";
import School from "./pages/School";
import NCC from "./pages/NCC";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <NccJourney />
      <Achievements />
      <Workflow />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/btech" element={<><Navbar /><BTech /><Footer /></>} />
        <Route path="/intermediate" element={<><Navbar /><Intermediate /><Footer /></>} />
        <Route path="/school" element={<><Navbar /><School /><Footer /></>} />
        <Route path="/ncc" element={<><Navbar /><NCC /><Footer /></>} />
        <Route path="/gallery" element={<><Navbar /><Gallery /><Footer /></>} />
        <Route path="/certificates" element={<><Navbar /><Certificates /><Footer /></>} />
      </Routes>
    </>
  );
}

export default App;