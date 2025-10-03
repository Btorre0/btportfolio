function Projects() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ color: "#ff6f3c" }}>Projects</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
        <div style={{ background: "#fff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>📸 Photo Gallery</h2>
          <p>React app to showcase photography.</p>
          <a href="https://github.com/btorre0/photo-gal" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <div style={{ background: "#fff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>🤖 FocusCue</h2>
          <p>AI-powered webcam with zoom and bokeh.</p>
          <a href="https://github.com/btorre0/focuscue" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
