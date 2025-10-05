import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "3rem",
        maxWidth: "1000px",
      }}
    >
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          flex: "0 0 260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #ffb3c6 0%, #ffd6e0 50%, #fff0f6 100%)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/me.png"
          alt="Beatriz Torres Archundia"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          flex: "1",
          maxWidth: "600px",
          color: "#33272a",
          fontSize: "1.05rem",
          lineHeight: "1.8",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#ff6f3c",
          }}
        >
          About Me
        </h1>

        <p>
          Hello there, my name is <strong>Beatriz Torres Archundia</strong>; a
          Computer Science student at California State University, Fullerton,
          with a passion for building technology that feels intuitive, creative,
          and human.
        </p>

        <p>
          I grew up in Sonoma, California, where my love for technology started
          early, inspired by innovators like Steve Jobs and Bill Gates. Over
          time, that curiosity turned into a drive to create. From developing
          AI-powered camera software and web apps to working on industry
          projects and community programs, I’ve enjoyed turning ideas into real
          solutions that make people’s lives easier.
        </p>

        <p>
          I have hands-on experience with JavaScript, React, Node.js, Python,
          and C++, and I love exploring how AI, design, and code can come
          together to create meaningful products. Outside of tech, I’m
          passionate about art, photography, and storytelling! When I’m not
          coding, you’ll probably find me sketching, organizing my next idea,
          helping others learn something new, or trying out new sports!
        </p>

        {/* Subtle callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            marginTop: "1.5rem",
            padding: "1rem 1.25rem",
            borderLeft: "4px solid #ff6f3c",
            background: "rgba(255, 111, 60, 0.06)",
            borderRadius: "0.5rem",
            fontSize: "0.95rem",
            color: "#594a4e",
          }}
        >
          “Technology is best when it brings people together.” — Matt Mullenweg
        </motion.div>
      </motion.div>
    </div>
  );
}
