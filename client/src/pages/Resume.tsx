function Resume() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ color: "#ff6f3c" }}>My Resume</h1>
      <p>You can view or download my resume here:</p>
      <iframe
        src="/resume.pdf"
        style={{ width: "100%", height: "600px", border: "none", marginTop: "1rem" }}
        title="Resume"
      />
      <a href="/resume.pdf" download style={{ display: "inline-block", marginTop: "1rem", color: "#fff", background: "#ff914d", padding: "0.8rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
