import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [userInput, setUserInput] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showHelp) {
      const bounceEvent = new CustomEvent("assistantBounce");
      window.dispatchEvent(bounceEvent);
    }
  }, [showHelp]);

  const text = `welcome to my website!
ask luna (cat on the bottom right) if you need help.
type "help" or click a command below to explore.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  const handleHelp = () => {
    setShowHelp(true);
    setTimeout(() => setShowHelp(false), 4000);
  };

  const handleCommand = (cmd: string) => {
    const lower = cmd.toLowerCase();
    if (lower === "help") handleHelp();
    else if (lower === "resume") navigate("/resume");
    else {
      const section = document.getElementById(lower);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #ffd6e0 0%, #fff0f6 100%)",
        overflow: "hidden",
        textAlign: "center",
        position: "relative",
        padding: "1rem",
      }}
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(255,182,193,0.4), transparent 70%)",
          filter: "blur(100px)",
          zIndex: -1,
        }}
      />

      {/* 🧡 Name + Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: "2rem", padding: "0 1rem", maxWidth: "90%" }}
      >
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#ff6f3c",
            fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
            margin: 0,
          }}
        >
          Beatriz Torres Archundia
        </h1>
        <p
          style={{
            fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
            color: "#594a4e",
            marginTop: "0.5rem",
          }}
        >
          Computer Science @ CSUF • Developer • Creator
        </p>
      </motion.div>

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "100%",
          maxWidth: "850px",
          background: "rgba(255,255,255,0.35)",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          border: "1px solid rgba(255,111,60,0.2)",
          backdropFilter: "blur(12px)",
          fontFamily: "Courier New, monospace",
          color: "#33272a",
          padding: "1.5rem",
          textAlign: "left",
        }}
      >
        {/* Terminal Header */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }} />
        </div>

        {/* Typing Animation */}
        <motion.p
          style={{
            whiteSpace: "pre-line",
            fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
            lineHeight: "1.6",
            wordWrap: "break-word",
          }}
        >
          {displayed}
          <span
            style={{
              color: "#ff6f3c",
              animation: "blink 1s infinite",
            }}
          >
            |
          </span>
        </motion.p>

        {/* Command Buttons */}
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.8rem",
          }}
        >
          {["About", "Projects", "Contact", "Resume", "Help"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              style={{
                background: "rgba(255, 111, 60, 0.1)",
                color: "#ff6f3c",
                border: "1px solid rgba(255,111,60,0.2)",
                borderRadius: "8px",
                padding: "0.6rem 1rem",
                fontFamily: "Courier New, monospace",
                fontSize: "clamp(0.8rem, 3vw, 1rem)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,111,60,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,111,60,0.1)")
              }
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Line */}
        <div style={{ marginTop: "1.5rem", fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
          <span style={{ color: "#ff6f3c" }}>$ </span>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand(userInput);
                setUserInput("");
              }
            }}
            placeholder="type a command..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#33272a",
              fontFamily: "Courier New, monospace",
              width: "80%",
              fontSize: "inherit",
            }}
          />
        </div>
      </motion.div>

      {/* Luna Help Popup */}
      {showHelp && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            bottom: "12%",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,111,60,0.3)",
            padding: "1rem",
            borderRadius: "12px",
            fontSize: "clamp(0.8rem, 3vw, 1rem)",
            maxWidth: "80%",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <strong>Luna 🐾:</strong> You can click any command (About, Projects, Contact, Resume) or
          type “help” again anytime!
        </motion.div>
      )}
    </div>
  );
}
