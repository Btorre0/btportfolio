import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { scroller } from "react-scroll";
import cat from "../../assets/cat.png";

interface Message {
  sender: "luna" | "user";
  text: string;
}

function CatDock() {
  const [isWaving, toggleWave] = useCycle(false, true);
  const [isChatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load chat history
  useEffect(() => {
    const saved = localStorage.getItem("lunaChat");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  // Save chat history + auto-scroll
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("lunaChat", JSON.stringify(messages));
    }
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Section references for scrolling
  const sections: Record<string, string> = {
    home: "home",
    about: "about",
    projects: "projects",
    contact: "contact",
  };

  // Luna’s response logic
  const handleLunaResponse = (input: string) => {
    const lower = input.toLowerCase();
    let response = "";
    let links: string[] = [];

    // Greetings
    if (/(hello|hi|hey|hola|what's up|sup)/.test(lower)) {
      response =
        "Hi there! I’m Luna — Beatriz’s little AI cat assistant. How can I help you today?";
    }

    // Detect section names
    for (const key in sections) {
      if (lower.includes(key)) links.push(key);
    }

    if (links.length > 0) {
      const list = links
        .map(
          (key) =>
            `<a href="#${key}" style="color:#ff6f3c;text-decoration:underline;">${key}</a>`
        )
        .join(", ");
      response = `You can find ${
        links.length > 1 ? "those sections" : "that section"
      } here: ${list}.`;

      // auto scroll to the first one
      const target = links[0];
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 800,
          delay: 100,
          smooth: "easeInOutQuart",
        });
      }, 1000);
    }

    // Info-based questions
    if (lower.includes("github")) {
      response = `Beatriz’s GitHub is <a href="https://github.com/Btorre0" target="_blank" style="color:#ff6f3c;text-decoration:underline;">github.com/Btorre0</a>.`;
    } else if (lower.includes("email")) {
      response = `You can reach Beatriz at <a href="mailto:Btorre0@csu.fullerton.edu" style="color:#ff6f3c;text-decoration:underline;">Btorre0@csu.fullerton.edu</a>.`;
    } else if (lower.includes("linkedin")) {
      response = `Here’s her LinkedIn: <a href="https://linkedin.com/in/btorre0" target="_blank" style="color:#ff6f3c;text-decoration:underline;">linkedin.com/in/btorre0</a>.`;
    } else if (lower.includes("resume")) {
      response = `You can view her resume on the top navigation bar or <a href="/resume" style="color:#ff6f3c;text-decoration:underline;">click here</a>.`; // hold
    } else if (lower.includes("skills")) {
      response = `Beatriz is skilled in React, Node.js, TypeScript, Python, C++, and AI tools like OpenCV and ONNX.`;
    }else if (lower.includes("experience") || lower.includes("internship")) {
      response = `She’s worked as a Computer Programmer at Eikon Technologies, building AI-powered and web-based software.`;
    } else if (
      lower.includes("education") ||
      lower.includes("school") ||
      lower.includes("college")
    ) {
      response = `Beatriz is studying Computer Science at California State University, Fullerton.`;
    } else if (lower.includes("major")) {
      response = `Her major is Computer Science.`;
    } else if (
      lower.includes("hobbies") ||
      lower.includes("fun") ||
      lower.includes("interests")
    ) {
      response = `Beatriz enjoys coding, photography, art, and spending time at the gym (or trying out new sports!).`;
    } else if (lower.includes("location") || lower.includes("where")) {
      response = `She’s based in Placentia, California.`;
    } else if (lower.includes("experience") || lower.includes("job")) {
      response = `She’s worked as a Computer Programmer at Eikon Technologies, building AI-powered and web-based software.`;
    } else if (
      lower.includes("about her") ||
      lower.includes("tell me about her") ||
      lower.includes("who is beatriz") ||
      lower.includes("who is she")
    ) {
      response = `Beatriz Torres Archundia grew up in Sonoma, California and has always been fascinated by technology. Inspired by innovators like Steve Jobs and Bill Gates, she developed a passion for creating things that make life easier and more beautiful.  
      She’s now studying Computer Science at Cal State Fullerton, working on AI and full-stack projects that blend creativity and tech.`;
    } else if (lower.includes("portfolio") || lower.includes("website")) {
      response = `This is her personal portfolio — built from scratch using React, TypeScript, Vite, and Framer Motion.`;
    } else if (lower.includes("help")) {
      response =
        "You can ask me about her resume, GitHub, email, projects, or any section of the website!";
    } else if (lower.includes("clear")) {
      response = "I’ve cleared our chat history.";
      setMessages([]);
      localStorage.removeItem("lunaChat");
      return;
    }

    // Fallback
    if (!response) {
      response =
        "Hmm… I’m not sure about that yet, but I’ll tell Beatriz to teach me soon!";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "luna", text: response }]);
    }, 400);
  };

  // Handle user message
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const userMsg: Message = { sender: "user", text: userInput.trim() };
    setMessages((prev) => [...prev, userMsg]);
    handleLunaResponse(userInput);
    setUserInput("");
  };

  // Intro message
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      const introMsgs = [
        { sender: "luna", text: "Welcome to Beatriz’s website!" },
        { sender: "luna", text: "I’m Luna — your little guide here." },
        {
          sender: "luna",
          text: "You can ask me about Beatriz, her projects, or how to find something!",
        },
      ];
      introMsgs.forEach((msg, i) => {
        setTimeout(() => setMessages((prev) => [...prev, msg as Message]), i * 1200);
      });
    }
  }, [isChatOpen]);

  return (
    <>
      {/* Floating Cat Icon */}
      <motion.div
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 1000,
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          toggleWave();
          setChatOpen((prev) => !prev);
        }}
        title="Chat with Luna"
      >
        <motion.img
          src={cat}
          alt="Luna"
          style={{
            width: "70px",
            height: "70px",
            userSelect: "none",
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.2))",
          }}
          animate={
            isWaving
              ? { rotate: [0, 10, -10, 10, -10, 0], transition: { duration: 1.2 } }
              : {
                  y: [0, -2, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                  },
                }
          }
        />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              bottom: "8rem",
              right: "2rem",
              width: "300px",
              background: "rgba(255, 240, 246, 0.95)",
              backdropFilter: "blur(12px)",
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              padding: "1rem",
              zIndex: 999,
              fontFamily: "sans-serif",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <h4 style={{ margin: "0", color: "#ff6f3c", textAlign: "center" }}>
              Luna
            </h4>

            <div
              style={{
                maxHeight: "220px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                scrollBehavior: "smooth",
              }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  style={{
                    background:
                      msg.sender === "luna"
                        ? "rgba(255, 214, 224, 0.9)"
                        : "rgba(255, 255, 255, 0.95)",
                    alignSelf:
                      msg.sender === "luna" ? "flex-start" : "flex-end",
                    padding: "0.6rem 0.9rem",
                    borderRadius: "12px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    color: "#333",
                    fontSize: "0.9rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              style={{
                display: "flex",
                gap: "0.4rem",
                marginTop: "0.5rem",
              }}
            >
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask Luna..."
                style={{
                  flex: 1,
                  borderRadius: "10px",
                  border: "1px solid #ffb3c6",
                  padding: "0.4rem 0.6rem",
                  outline: "none",
                  fontSize: "0.85rem",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "#ff6f3c",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.4rem 0.7rem",
                  cursor: "pointer",
                }}
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CatDock;
