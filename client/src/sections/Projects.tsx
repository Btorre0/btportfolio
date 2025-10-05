import { motion } from "framer-motion";

const projects = [
  {
    title: "Rentora — Full-Stack Rental Platform",
    description:
      "A responsive rental marketplace supporting listings, secure messaging, and AWS S3 uploads with JWT authentication.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AWS S3"],
    link: "https://github.com/sibisai/rentora",
    color: "linear-gradient(135deg, #ffe0f0 0%, #fce1ff 100%)",
  },
  {
    title: "PhotoGal — Creative Gallery App",
    description:
      "A VSCO-style gallery that organizes and animates images beautifully across devices.",
    tech: ["React", "Framer Motion", "Tailwind", "Vite"],
    link: "https://github.com/btorre0/photo-gal",
    color: "linear-gradient(135deg, #fff0f6 0%, #ffd6e0 100%)",
  },
  {
    title: "MindSketch — AI Brainstorming Tool (In Progress)",
    description:
      "An intelligent idea mapper using generative AI to visualize concept clusters and spark creativity.",
    tech: ["Python", "Flask", "OpenAI API", "React", "D3.js"],
    link: "https://github.com/Btorre0/mindsketch",
    color: "linear-gradient(135deg, #ffd6e0 0%, #fff0f6 100%)",
  },
  {
    title: "Thread-Fork — Parallel Process Simulator",
    description:
      "Simulates Unix-style forking and threading patterns in C, demonstrating PID/TID management and scheduling.",
    tech: ["C", "POSIX Threads", "Unix"],
    link: "https://github.com/Btorre0/thready-fork-ass7",
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
        gap: "2.5rem",
        padding: "3rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          fontWeight: 700,
          color: "#ff6f3c",
          textAlign: "center",
        }}
      >
        Featured Projects
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{
              background: p.color,
              padding: "1.8rem",
              borderRadius: "1rem",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              textDecoration: "none",
              color: "#33272a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                fontWeight: 700,
                color: "#ff6f3c",
                marginBottom: "0.75rem",
              }}
            >
              {p.title}
            </h2>
            <p
              style={{
                fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
                lineHeight: "1.6",
                color: "#594a4e",
                marginBottom: "1rem",
              }}
            >
              {p.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    padding: "0.25rem 0.7rem",
                    borderRadius: "999px",
                    fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                    color: "#33272a",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
