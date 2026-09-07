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

          {/* Shashi Infotech */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GenAI & MERN Stack Developer (OJT)</h4>
                <h5>Shashi Infotech</h5>
              </div>
              <h3>OJT</h3>
            </div>

            <p>
              Worked on MERN Stack and Generative AI technologies, gaining
              practical experience in building AI-powered applications.
            </p>
          </div>

          {/* CollegeTips */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>CollegeTips.in</h5>
              </div>
              <h3>Internship</h3>
            </div>

            <p>
              Gained hands-on experience in full-stack web development through
              a Web Development Internship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;


