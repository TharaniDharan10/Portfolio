import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ContactMe from "./components/ContactMe";
import Certifications from './components/Certifications';
import Training from "./components/Training";
import Education from "./components/Education";
import Platforms from "./components/Platforms";
import Skills from "./components/Skills";  // Import Skills component
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <div className="page-container">
          <Navbar />
          <ScrollToTop />
          <main className="content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/training" element={<Training />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/education" element={<Education />} />
              <Route path="/platforms" element={<Platforms />} />
              <Route path="/skills" element={<Skills />} />  {/* Add Skills route */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
