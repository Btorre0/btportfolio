import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 2rem",
        gap: "2.5rem",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#ff6f3c",
        }}
      >
        Let’s Connect
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: "1.05rem",
          lineHeight: "1.8",
          color: "#33272a",
          maxWidth: "600px",
        }}
      >
        I’m always open to connecting with other developers, creators, or
        collaborators. Whether you want to discuss a project, share ideas, or
        just say hi — I’d love to hear from you!
      </motion.p>

      {/* Contact Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {/* Email */}
        <a
          href="mailto:Btorre0@csu.fullerton.edu"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <Mail size={20} color="#ff6f3c" /> Email Me
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/beatriztorres/"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <Linkedin size={20} color="#ff6f3c" /> LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/btorre0"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <Github size={20} color="#ff6f3c" /> GitHub
        </a>

        {/* Resume */}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          <FileDown size={20} color="#ff6f3c" /> View Resume
        </a>
      </motion.div>

      {/* Subtle glow in background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.2 }}
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(255,182,193,0.4), transparent 70%)",
          filter: "blur(70px)",
          zIndex: -1,
        }}
      />
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  textDecoration: "none",
  color: "#33272a",
  background: "rgba(255, 111, 60, 0.1)",
  borderRadius: "999px",
  padding: "0.8rem 1.5rem",
  fontWeight: 500,
  transition: "background 0.3s, transform 0.2s",
  boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
};
