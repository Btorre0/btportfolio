// src/pages/Home.tsx
function Home() {
  return (
    <section style={{ textAlign: "center", padding: "4rem", background: "#fff0f6" }}>
      <h1 style={{ fontSize: "3rem", color: "#ff6f3c" }}>Beatriz Torres Archundia</h1>
      <p style={{ fontSize: "1.2rem", color: "#333" }}>
        Computer Science Student • Full Stack Developer • Cat Enthusiast 🐱
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a href="/resume" style={{ margin: "1rem", color: "#fff", background: "#ff914d", padding: "0.8rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
          View Resume
        </a>
        <a href="/projects" style={{ margin: "1rem", color: "#fff", background: "#ff914d", padding: "0.8rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
          See Projects
        </a>
        <a href="/contact" style={{ margin: "1rem", color: "#fff", background: "#ff914d", padding: "0.8rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
