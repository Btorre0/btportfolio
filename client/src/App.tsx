import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Resume from "./pages/Resume";
import "./index.css";

function HomeSections() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div
      ref={ref}
      style={{
        scrollBehavior: "smooth",
        background: "linear-gradient(135deg, #ffd6e0, #fff0f6)",
      }}
    >
      {/* HOME SECTION */}
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <motion.h1
          style={{
            color: "#ff6f3c",
            fontSize: "4rem",
            fontWeight: "700",
            y,
            scale,
            textShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          Welcome 🐱
        </motion.h1>
        <p>Scroll down to learn more about me!</p>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          height: "100vh",
          padding: "5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(15px)",
          background: "rgba(255, 214, 224, 0.6)",
        }}
      >
        <h1 style={{ color: "#ff6f3c" }}>About Me</h1>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          height: "100vh",
          padding: "5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(15px)",
          background: "rgba(255, 240, 246, 0.6)",
        }}
      >
        <h1 style={{ color: "#ff6f3c" }}>Projects</h1>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          height: "100vh",
          padding: "5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(15px)",
          background: "rgba(255, 230, 236, 0.6)",
        }}
      >
        <h1 style={{ color: "#ff6f3c" }}>Contact</h1>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSections />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;

