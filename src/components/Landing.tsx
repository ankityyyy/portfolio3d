import type { ReactNode } from "react";
import "./styles/Landing.css";
import AIChatbot from "./AIChatbot/AIChatbot";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function Landing({ children }: { children: ReactNode }) {
  return (
    <section className="landing-section" id="landingDiv">
      {" "}
      {/* FIXED LEFT SOCIAL MEDIA SIDEBAR */}{" "}
      <div className="social-sidebar">
        {" "}
        <a href="https://github.com/ankityyyy" target="_blank" rel="noreferrer">
          {" "}
          <FaGithub />{" "}
        </a>{" "}
        <a
          href="https://linkedin.com/in/ankitkumardubey"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaLinkedin />{" "}
        </a>{" "}
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          {" "}
          <FaInstagram />{" "}
        </a>{" "}
      </div>{" "}
      <div className="landing-container">
        {" "}
        {/* LEFT TEXT COLUMN */}{" "}
        <div className="landing-left">
          {" "}
          <p className="hello">Hello! I'm</p>{" "}
          <h2>
            {" "}
            ANKIT <br /> <span>DUBEY</span>{" "}
          </h2>{" "}
          <div className="line"></div>{" "}
          <p className="role">Full Stack Developer</p>{" "}
          <h2 className="landing-info-h2">
            {" "}
            <span>& GENAI</span> <br /> DEVOPS{" "}
          </h2>{" "}
          <p className="description">
            {" "}
            I build scalable web applications and AI-powered that solve
            real-world problems and create impactful experiences.{" "}
          </p>{" "}
          <div className="hero-buttons">
            {" "}
            <a
              href="/Ankit-Kumar-Dubey-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-work"
            >
              {" "}
              ↗ RESUME{" "}
            </a>{" "}
            {/* <button className="contact-me"> CONTACT ME </button> */}{" "}
          </div>{" "}
        </div>{" "}
        {/* CENTER COLUMN: INTERACTIVE 3D MODEL */}{" "}
        {/* <div className="landing-center"> <CharacterModel /> </div> */}{" "}
        {/* RIGHT COLUMN: CHATBOT */}{" "}
        <div className="landing-right">
          {" "}
          <AIChatbot />{" "}
        </div>{" "}
      </div>{" "}
      {children}{" "}
    </section>
  );
}
export default Landing;
