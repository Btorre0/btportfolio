import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function AssistantDock() {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleBounce = () => {
      controls.start({
        y: [0, -20, 0],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    };
    window.addEventListener("assistantBounce", handleBounce);
    return () => window.removeEventListener("assistantBounce", handleBounce);
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 1000,
      }}
    >
      {open && (
        <div
          style={{
            background: "#fff0f6",
            border: "2px solid #ff914d",
            borderRadius: "12px",
            padding: "1rem",
            width: "clamp(200px, 50vw, 250px)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            fontSize: "clamp(0.8rem, 3vw, 0.9rem)",
          }}
        >
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#ff6f3c", fontSize: "clamp(1rem, 3vw, 1.1rem)" }}>
            🐱 About Me
          </h3>
          <p>
            Hi, I’m Beatriz! I’m a CS student, developer, and cat lover.
            Ask me about my projects, resume, or hobbies!
          </p>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#ff914d",
          border: "none",
          borderRadius: "50%",
          width: "clamp(55px, 15vw, 65px)",
          height: "clamp(55px, 15vw, 65px)",
          color: "#fff",
          fontSize: "clamp(1.3rem, 5vw, 1.6rem)",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        🐾
      </button>
    </motion.div>
  );
}

export default AssistantDock;
