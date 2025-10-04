function Hobbies() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ color: "#ff6f3c" }}>Hobbies</h1>
      <p>I love photography, hiking, and playing around with AI experiments!</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <img src="/assets/react.svg" alt="Example" style={{ width: "150px", borderRadius: "8px" }} />
        {/* Replace with actual photo gallery later */}
      </div>
    </div>
  );
}

export default Hobbies;
