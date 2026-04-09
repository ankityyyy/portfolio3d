import "./styles/Career.css";

const Career = () => {
  return (
  <div className="career-section section-container">
        <div className="career-container">
          <h2>
            My journey <span>&</span>
            <br /> experience
          </h2>
  
          <div className="career-info">
            <div className="career-timeline">
              <div className="career-dot"></div>
            </div>
  
            {/* Current */}
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>Full Stack Developer</h4>
                  <h5>Personal Projects</h5>
                </div>
                <h3>Present</h3>
              </div>
              <p>
                Building 5+ MERN stack projects and 3+ Generative AI applications
                including AI agents and RAG-based systems, focused on solving real-world problems.
              </p>
            </div>
  
            {/* Internship */}
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>Web Development Intern</h4>
                  <h5>CollegeTips.in</h5>
                </div>
                <h3>2025</h3>
              </div>
              <p>
                Worked on real-world web applications, improving frontend and backend
                development skills and gaining practical industry experience.
              </p>
            </div>
  
            {/* Learning Phase */}
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>Learning & Building</h4>
                  <h5>MERN • DSA • DevOps • GenAI</h5>
                </div>
                <h3>2024 – Present</h3>
              </div>
              <p>
                Continuously improving Data Structures & Algorithms, DevOps (Docker,
                CI/CD, AWS), and System Design while building scalable applications.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Career;
