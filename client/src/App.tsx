import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";

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
    </div>
  );
}

export default App;
