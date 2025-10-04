import { useState } from "react";

function AssistantDock() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "1rem", right: "1rem", zIndex: 1000 }}>
      {open && (
        <div style={{ background: "#fff0f6", border: "2px solid #ff914d", borderRadius: "12px", padding: "1rem", width: "250px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#ff6f3c" }}>🐱 About Me</h3>
          <p style={{ fontSize: "0.9rem" }}>
            Hi, I’m Beatriz! I’m a CS student, developer, and cat lover.  
            Ask me about my projects, resume, or hobbies!
          </p>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{ background: "#ff914d", border: "none", borderRadius: "50%", width: "60px", height: "60px", color: "#fff", fontSize: "1.5rem", cursor: "pointer", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
      >
        🐾
      </button>
    </div>
  );
}

export default AssistantDock;
