function About() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ color: "#ff6f3c" }}>About Me</h1>
      <p>
        Hi! I'm Beatriz Torres Archundia, a Computer Science student at CSUF.
        I love building clean, interactive web experiences and working with AI.
      </p>

      <div style={{ marginTop: "1rem", background: "#ffd6e0", padding: "1rem", borderRadius: "8px" }}>
        <h2>Fast Facts</h2>
        <ul>
          <li>Education: B.S. in Computer Science, CSUF</li>
          <li>Skills: React, Node.js, C++, AI/ML</li>
          <li>Loves cats and photography</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
