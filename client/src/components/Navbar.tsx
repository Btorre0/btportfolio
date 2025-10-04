import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import cat from "../../assets/cat.png";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        background: "rgba(255, 214, 224, 0.6)",
        backdropFilter: "blur(10px)",
        padding: "1rem",
        zIndex: 1000,
        borderBottom: "1px solid rgba(255, 153, 170, 0.3)",
      }}
    >
      {/* 🐱 Cat Logo */}
      <RouterLink to="/" style={{ position: "absolute", left: "1.5rem" }}>
        <img
          src={cat}
          alt="cat logo"
          style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </RouterLink>

      {/* Smooth Scroll Links with Active Highlight */}
      <ScrollLink
        to="home"
        smooth={true}
        duration={700}
        spy={true}
        activeClass="active-link"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={700}
        spy={true}
        activeClass="active-link"
      >
        About
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={700}
        spy={true}
        activeClass="active-link"
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={700}
        spy={true}
        activeClass="active-link"
      >
        Contact
      </ScrollLink>

      {/* Resume Page Link */}
      <RouterLink
        to="/resume"
        style={{
            color: "#ff6f3c",
            fontWeight: 500,
            borderBottom: "2px solid transparent",
            transition: "all 0.3s ease",
        }}
        >
        Resume
        </RouterLink>

    </nav>
    
  );
}

export default Navbar;
