// src/App.tsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../../client/src/sections/Home";
import About from "../../../client/src/sections/About";
import Resume from "../../../client/src/sections/Resume";
import Projects from "../../../client/src/sections/Projects";
import Hobbies from "../../../client/src/sections/Hobbies";
import Contact from "../../../client/src/sections/Contact";
import AssistantDock from "../../../client/src/sections/AssistantDock";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#ffd6e0" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/hobbies">Hobbies</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* AI Assistant Sidebar */}
      <AssistantDock />
    </div>
  );
}

export default App;
