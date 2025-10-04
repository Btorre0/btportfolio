function Resume() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "5rem 2rem",
        background: "#fff0f6",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#ff6f3c" }}>My Resume</h1>
      <p>You can view or download my resume here:</p>
      <iframe
        src="/resume.pdf"
        style={{
          width: "80%",
          height: "700px",
          border: "none",
          marginTop: "1rem",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
        title="Resume"
      />
      <br />
      <a
        href="/resume.pdf"
        download
        style={{
          display: "inline-block",
          marginTop: "1rem",
          color: "#fff",
          background: "#ff914d",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
