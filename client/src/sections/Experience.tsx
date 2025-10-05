import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div style={{ maxWidth: "850px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "2rem",
          color: "#ff6f3c",
          textAlign: "center",
        }}
      >
        Experience
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          background: "rgba(255,255,255,0.65)",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
          borderLeft: "4px solid #ff6f3c",
        }}
      >
        <h3
          style={{
            margin: "0 0 0.3rem",
            color: "#33272a",
            fontSize: "1.3rem",
            fontWeight: 600,
          }}
        >
          Computer Programmer
        </h3>
        <p
          style={{
            margin: 0,
            fontWeight: "500",
            color: "#594a4e",
          }}
        >
          Eikon Technologies, LLC —{" "}
          <span style={{ opacity: 0.8 }}>Sept 2023 – Sept 2024</span>
        </p>

        <ul
          style={{
            marginTop: "1rem",
            color: "#594a4e",
            fontSize: "1rem",
            lineHeight: "1.7",
          }}
        >
          <li>
            Collaborated on Apple-related software development under NDA,
            contributing to front-end and back-end systems.
          </li>
          <li>
            Designed, tested, and optimized features using JavaScript, Node.js,
            HTML, and CSS for production-grade internal tools.
          </li>
          <li>
            Supported integration of intelligent automation and AI-driven camera
            systems for next-generation device applications.
          </li>
          <li>
            Worked closely with senior engineers to debug, document, and deploy
            performance-critical code across multiple environments.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
