import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CatDock from "./components/CatDock";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Resume from "./pages/Resume";
import catImage from "../assets/cat.png";

function App() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "Inter, sans-serif" }}>
      <CatLogo />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <SectionWrapper id="about" bg="rgba(255,214,224,0.6)">
                <About />
              </SectionWrapper>
              <SectionWrapper id="experience" bg="rgba(255,235,240,0.6)">
                <Experience />
              </SectionWrapper>
              <SectionWrapper id="projects" bg="rgba(255,240,246,0.6)">
                <Projects />
              </SectionWrapper>
              <SectionWrapper id="contact" bg="rgba(255,230,236,0.6)">
                <Contact />
              </SectionWrapper>
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <CatDock />
      <Footer />
    </div>
  );
}

/* 🐱 Persistent Cat Logo */
function CatLogo() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        top: "1rem",
        left: "1.5rem",
        zIndex: 100,
        cursor: "pointer",
      }}
      onClick={() => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img
        src={catImage}
        alt="cat logo"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "8px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </motion.div>
  );
}

/* 🌸 Compact Section Wrapper */
function SectionWrapper({ id, bg, children }: any) {
  return (
    <section
      id={id}
      style={{
        minHeight: "82vh",
        padding: "3rem 1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: bg,
        backdropFilter: "blur(8px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ width: "100%", maxWidth: "1000px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

/* 🌸 Footer */
function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1.5rem 0",
        fontSize: "0.9rem",
        color: "#594a4e",
        background: "linear-gradient(180deg, #fff0f6 0%, #ffd6e0 100%)",
      }}
    >
      © {new Date().getFullYear()} Beatriz Torres Archundia · Made with ❤️
    </footer>
  );
}

export default App;
