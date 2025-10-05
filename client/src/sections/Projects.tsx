import { motion } from "framer-motion";

const projects = [
  {
    title: "Rentora — Full-Stack Rental Platform",
    description:
      "A responsive rental marketplace that supports listings, secure messaging, and AWS S3 image uploads with JWT authentication. Designed for ease and reliability.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AWS S3"],
    link: "https://github.com/sibisai/rentora",
    color: "linear-gradient(135deg, #ffe0f0 0%, #fce1ff 100%)",
  },
  {
    title: "PhotoGal — Creative Gallery App",
    description:
      "A VSCO-style photo gallery that organizes and animates images beautifully across devices. Built to test responsive layouts and custom animation pipelines.",
    tech: ["React", "Framer Motion", "Tailwind", "Vite"],
    link: "https://github.com/btorre0/photo-gal",
    color: "linear-gradient(135deg, #fff0f6 0%, #ffd6e0 100%)",
  },
  {
    title: "MindSketch — AI Brainstorming Tool",
    description:
      "An intelligent idea mapper that helps users brainstorm visually using generative AI. Integrates text clustering and concept visualization to spark creativity.",
    tech: ["Python", "Flask", "OpenAI API", "React", "D3.js"],
    link: "#",
    color: "linear-gradient(135deg, #ffd6e0 0%, #fff0f6 100%)",
  },
];

export default function Projects() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        padding: "5rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#ff6f3c",
          textAlign: "center",
        }}
      >
        Featured Projects
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          width: "100%",
        }}
      >
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{
              background: p.color,
              padding: "2rem",
              borderRadius: "1.25rem",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              textDecoration: "none",
              color: "#33272a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#ff6f3c",
                  marginBottom: "0.75rem",
                }}
              >
                {p.title}
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#594a4e",
                  marginBottom: "1rem",
                }}
              >
                {p.description}
              </p>
            </motion.div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    color: "#33272a",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Soft background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(255,182,193,0.4), transparent 70%)",
          filter: "blur(80px)",
          zIndex: -1,
        }}
      />
    </div>
  );
}
