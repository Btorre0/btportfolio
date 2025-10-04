import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff0f6",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 style={{ color: "#ff6f3c", fontSize: "3rem" }}>Welcome ✨</h1>
      <p>Scroll down to explore!</p>
    </motion.div>
  );
}

export default Home;
