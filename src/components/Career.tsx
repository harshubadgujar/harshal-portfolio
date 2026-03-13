import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>K2 Ventures</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Worked on backend API integrations and feature development. Improved REST API stability and optimized database queries. Collaborated using Git workflows in a structured development environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Oasis Infobyte</h5>
              </div>
              <h3>PAST</h3>
            </div>
            <p>
              Built responsive web interfaces using modern frontend technologies. Developed reusable UI components for web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BE Information Technology</h4>
                <h5>MET Institute of Engineering</h5>
              </div>
              <h3>2019-2023</h3>
            </div>
            <p>
              Completed Bachelor of Engineering with a CGPA of 7.5. Developed fundamentally strong knowledge in software engineering, algorithms, and full-stack development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
