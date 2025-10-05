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
        padding: "3rem 1.5rem",
        gap: "2rem",
        textAlign: "center",
        maxWidth: "800px",
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
        }}
      >
        Let’s Connect
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
          lineHeight: "1.8",
          color: "#33272a",
          maxWidth: "600px",
        }}
      >
        I’m always open to connecting with other developers, creators, or
        collaborators. Whether you want to discuss a project, share ideas, or
        just say hi — I’d love to hear from you!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {[
          {
            href: "mailto:Btorre0@csu.fullerton.edu",
            text: "Email Me",
            icon: <Mail size={20} color="#ff6f3c" />,
          },
          {
            href: "https://www.linkedin.com/in/beatriztorres/",
            text: "LinkedIn",
            icon: <Linkedin size={20} color="#ff6f3c" />,
          },
          {
            href: "https://github.com/btorre0",
            text: "GitHub",
            icon: <Github size={20} color="#ff6f3c" />,
          },
          {
            href: "/resume.pdf",
            text: "View Resume",
            icon: <FileDown size={20} color="#ff6f3c" />,
          },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
              color: "#33272a",
              background: "rgba(255, 111, 60, 0.1)",
              borderRadius: "999px",
              padding: "0.8rem 1.5rem",
              fontWeight: 500,
              fontSize: "clamp(0.85rem, 3vw, 1rem)",
              transition: "background 0.3s, transform 0.2s",
              boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
            }}
          >
            {link.icon} {link.text}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
